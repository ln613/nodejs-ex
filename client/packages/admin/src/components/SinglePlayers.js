import React from 'react';
import { compose, withProps } from 'recompose';
import { connect } from 'no-redux';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import actions from 'utils/actions';
import { tourSelector } from 'utils/selectors';
import { TextBox, Select, CheckBox } from 'utils/comps';
import { withLoad, withEditList, withSuccess, withParams } from 'utils';

const SinglePlayers = ({ tournament, date, players, patchTour, setFormTournamentPlayers, getPlayerRating, id }) =>
  <div>
    <h1>Players - {tournament.name}</h1>
    <hr />
    {(tournament.players || []).map((p, i) =>
      <div class="f aic mrc8" key={`players${i}`}>
        <Select name={`tournament.players[${i}].id`} index={i} options={players} />
        <TextBox name={`tournament.players[${i}].rating`} index={i} label="Rating" />
        <Button primary onClick={() => getPlayerRating({id: tournament.players[i].id, date})}>Get Tournament Rating</Button>
        <Button primary onClick={() => getPlayerRating({id: tournament.players[i].id, date: '_'})}>Get Current Rating</Button>
      </div>
    )}
    <Button secondary onClick={() => setFormTournamentPlayers({})}>Add Player</Button>
    <hr />
    <Button primary onClick={() => patchTour(toTour(tournament), { id })}>Save</Button>
  </div>

export default compose(
  connect(tourSelector, actions),
  withParams,
  withProps(p => ({ date: moment(p.tournament.ratingDate).format('YYYY-MM-DD') })),
  withLoad('players'),
  withLoad('tournament'),
  withEditList('tournament.players'),
  withSuccess('tour', () => alert('Saved'), () => alert('Error happened!'))
)(SinglePlayers)

const toTour = t => ({id: t.id, players: (t.players || []).map(p => ({id: +(p.id || 0), rating: +p.rating})) })