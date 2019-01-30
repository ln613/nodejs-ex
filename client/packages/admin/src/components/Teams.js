import React from 'react';
import { compose } from 'recompose';
import { connect } from '@ln613/state';
import actions from 'utils/actions';
import { withLoad, withLoadForce, withParams, withNewId } from '@ln613/compose';
import { tournamentSelector } from 'utils/selectors';
import { Table } from '@ln613/ui/semantic';
import { withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react';

const teamTable = (teams, id) =>
  <Table name="teams" link={x => `/team/${id}/${x}`} data={(teams || []).map(x => ({ 'id': x.id, 'name': x.name }))} />

const Teams = ({ tournament, history, id, newId }) =>
  <div>
    <div class="f">
      <h1 class="fg1">Teams - {tournament.name}</h1>
      <Button primary onClick={() => history.push(`/team/${id}/+${newId}`)}>Add</Button>
    </div>
    <hr/>
    {tournament.groups ? tournament.groups.map(g =>
      <div class="pt8" key={g[0]}>
        <div class="pv8 fs24 darkgreen">Group {+g[0] + 1}</div>
        {teamTable(g[1], id)}
      </div>
    ) : teamTable(tournament.teams, id)}
  </div>

export default compose(
  connect(tournamentSelector, actions),
  withParams,
  withLoad('players'),
  withLoadForce('tournament'),
  withNewId('tournament.teams'),
  withRouter
)(Teams)