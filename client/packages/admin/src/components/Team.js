import React from 'react';
import { compose, withProps } from 'recompose';
import { pick, find, is } from 'ramda';
import { connect } from 'no-redux';
import { Button } from 'semantic-ui-react';
import actions from 'utils/actions';
import { teamSelector } from 'utils/selectors';
import { Table, TextBox, DoubleSelect } from 'utils/comps';
import { tap, withLoad, withEdit, withSuccess, withParams, getPropById } from 'utils';

const Team = ({ tournament, team, players, putTeam, postTeam, id }) =>
  <div>
    <h1>Team - {team.name}</h1>
    <hr />
    <TextBox name="team.id" disabled />
    <TextBox name="team.name" />
    <DoubleSelect name="team.players" options={players} buttonStyle="ui button" />
    <hr />
    <Button primary onClick={() => id[0] != '+' ? putTeam(toTeam(team, players), { id1: tournament.id, id: team.id }) : postTeam(toTeam(team, players), { id1: tournament.id })}>Save</Button>
  </div>

export default compose(
  connect(teamSelector, actions),
  withParams,
  withLoad('players'),
  withLoad('tournament', 'id1'),
  withEdit('team', 'tournament.teams', {players:[]}),
  withSuccess('team', () => alert('Saved'), () => alert('Error happened!'))
)(Team)

const toTeam = (t, ps) => ({
  id: t.id,
  name: t.name,
  players: (t.players || []).map(p => is(Object, p) ? p : {id: +p, rating: getPropById('rating')(+p)(ps) })
})