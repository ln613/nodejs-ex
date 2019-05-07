const { connectDB, get, getIdName, getById, search, getPlayerRating, getPlayerGames, cdVersion } = require('./utils/db');
const { res } = require('./utils');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { doc, id, fields, prop, val, idname, player_rating, rating_date, player_games, lookup } = event.queryStringParameters;
  await connectDB();
  let r = {};

  if (lookup) {
    const version = await cdVersion();
    const cats = await get('cats');
    r = { cats, cdVersion: version };
  } else if (idname) {
    r = await getIdName(doc);
  } else if (id && doc) {
    r = await getById(doc, id);
  } else if (fields || prop) {
    r = await search(doc, prop, val, fields);
  } else if (player_rating) {
    r = await getPlayerRating(id, rating_date);
  } else if (player_games) {
    r = await getPlayerGames(id);
  } else if (doc) {
    r = await get(doc);
  }

  return res(r);
};