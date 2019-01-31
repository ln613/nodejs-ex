const R = require('ramda');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const util = require('@ln613/util');

const e = {};

e.isProd = process.env.NODE_ENV === 'PROD';

e.cd = 'http://res.cloudinary.com/vttc/image/upload/v1522908408/';

e.tap = x => R.tap(console.log, R.isNil(x) ? 'null' : x);

e.serial = (arr, func) => arr.reduce((promise, next) => promise.then(r => func(next).then(r1 => R.append(r1, r))), Promise.resolve([]));

e.sort = R.sort((a, b) => a - b);

e.sortDesc = R.sort((a, b) => b - a);

e.isOdd = n => n % 2 === 1;

e.config = fs.existsSync(path.join(__dirname, 'config.js')) ? require('./config') : null;

const send = d => (p, res) => p.then(x => res.json(d || x)).catch(e => res.send(e))

e.done = send('done')

e.send = send()

e.port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000

e.ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

e.getMongoURL = () => {
  let mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL || 'mongodb://localhost:27017/vttc';
  if (process.env.DATABASE_SERVICE_NAME) {
    const mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase();
    const mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'];
    const mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'];
    const mongoDatabase = process.env[mongoServiceName + '_DATABASE'];
    const mongoPassword = process.env[mongoServiceName + '_PASSWORD'];
    const mongoUser = process.env[mongoServiceName + '_USER'];

    if (mongoHost && mongoPort && mongoDatabase) {
      mongoURL = 'mongodb://';
      if (mongoUser && mongoPassword) {
        mongoURL += mongoUser + ':' + mongoPassword + '@';
      }
      mongoURL += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    }
  }
  return mongoURL;
}

e.mongoURL = e.getMongoURL()

e.secret = e.config ? e.config.secret : process.env.secret
e.username = e.config ? e.config.username : process.env.username
e.password = e.config ? e.config.password : process.env.password

e.cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
}

e.nocache = (req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

e.gotoLogin = res => {
  res.clearCookie('vttc_token');
  res.redirect('/login');
}

const rrCycle = (x, r, l) => x < r ? x - r + l : x - r + 1;

e.rrSchedule = (x, sorted) => {
  const l = sorted ? x : R.sortWith([R.descend(R.prop('rating'))], x);
  if (e.isOdd(l.length)) l.push({id: null});
  const t1 = R.range(1, l.length);
  const t2 = R.range(0, l.length / 2);
  return t1.map((r, i) => {
    const l1 = t1.map(n => l[rrCycle(n, r, l.length)]);
    const l2 = R.insert(0, l[0], l1);
    return t2
      .map(n => ({ round: i + 1, home: l2[n].id, away: l2[l.length - n - 1].id }))
      .filter(t => t.home && t.away)
      .map((t, j) => ({...t, id: j + 1}));
  })
}

e.getTeamRating = t => t.players && t.players.length > 1
  ? R.pipe(R.map(x => +(x.isSub ? 0 : (x.tRating || x.rating))), e.sort, R.takeLast(2), R.sum)(t.players)
  : 0;

e.rrScheduleTeam = (teams, startDate, ids = [1, 2, 3, 4, 5, 6]) => R.compose(
  rs => rs.map((w, i) => ({ id: i + 1, matches: w.map((m, j) => { m.id = ids[j]; return m; }), date: moment(startDate).add(i, 'week').toISOString() })),
  R.splitEvery(ids.length),
  R.unnest,
  e.rrSchedule,
  R.map(t => ({...t, rating: e.getTeamRating(t)}))
)(teams);

e.json2js = x => JSON.parse(x, (k, v) => R.takeLast(4, k).toLowerCase() === 'date' ? new Date(v) : v)

const rdiff = [[3,0],[5,-2],[8,-5],[10,-7],[13,-9],[15,-11],[18,-14],[20,-16],[25,-21],[30,-26],[35,-31],[40,-36],[45,-41],[50,-45],[55,-50]];
const rdelta = [401,301,201,151,101,51,26,-24,-49,-99,-149,-199,-299,-399];

const rateDiff = (r1, r2) => {
  const n = rdelta.findIndex(x => x <= r1 - r2);
  return n === -1 ? R.last(rdiff) : rdiff[n];
}

e.adjustRating = g => {
  if (g.isDouble) {
      return g;
  } else {
    const p1Win = +g.result[0] > +g.result[2];
    const d = p1Win ? rateDiff(g.p1Rating, g.p2Rating) : rateDiff(g.p2Rating, g.p1Rating);
    return Object.assign({}, g, { p1Diff: p1Win ? d[0] : d[1], p2Diff: p1Win ? d[1] : d[0] });
  }
}

e.newRating = (r, d) => Math.max(r + d, 100)

e.sortTeam = R.pipe(R.map(t => [e.getTeamRating(t), t]), R.sortWith([R.descend(R.nth(0))]), R.map(R.nth(1)))

e.numOfGroups = n => Math.pow(2, Math.floor(Math.log10(n / 3) / Math.log10(2)))

e.group = ts => {
  const n = ts.length;
  const g = e.numOfGroups(n);
  return ts.map((t, i) => {
    const l = Math.floor(i / g);
    const c = i % g;
    const group = e.isOdd(l) ? (g - c - 1) : c;
    return {...t, group};
  });
}

e.gengames = (t, t1, t2) => {
  const team1 = util.findById(t1)(t.teams);
  const team2 = util.findById(t2)(t.teams);
  return R.range(0, 5).map(n => ({ id: n + 1, date: t.startDate, t1, t2,
    p1: +team1.players[n === 1 || n === 4 ? 1 : 0].id,
    p2: +team2.players[n === 0 || n === 4 ? 1 : 0].id,
    p3: n === 2 ? team1.players[1].id : undefined,
    p4: n === 2 ? team2.players[1].id : undefined
  }));
}

module.exports = e;
