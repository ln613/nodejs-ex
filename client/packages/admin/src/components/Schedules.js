import React from 'react';
import { isNil } from 'ramda';
import { compose } from 'recompose';
import { connect } from '@ln613/state';
import actions from 'utils/actions';
import { withLoad, withLoadForce, withParams, withNewId } from '@ln613/compose';
import { tournamentSelector } from 'utils/selectors';
import { kos } from 'utils';
import { Table } from '@ln613/ui/semantic';
import { withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { tap } from '@ln613/util';

const Schedules = ({ tournament, history, id, newId }) =>
  <div>
    <div class="f">
      <h1 class="fg1">Schedules - {tournament.name}</h1>
      {/* <Button primary onClick={() => history.push(`/schedule/${id}/+${newId}`)}>Add</Button> */}
    </div>
    <hr/>
    <Table name="schedules" link={x => `/schedule/${id}/${x.id}`} data={(tournament.schedules || []).map(x => ({
      'id': x.id || (isNil(x.group) ? '' : +x.group),
      [tournament.isSingle ? 'round' : (!isNil(x.group) || x.ko ? 'group' : 'date')]: tournament.isSingle ? ('Round ' + x.id) : (!isNil(x.group) ? ('Group ' + x.group) : (x.ko ? kos[Math.log2(x.ko)] : x.date)) })
    )} />
  </div>

export default compose(
  connect(tournamentSelector, actions),
  withParams,
  withLoad('players'),
  withLoadForce('tournament'),
  withNewId('tournament.schedules'),
  withRouter
)(Schedules)