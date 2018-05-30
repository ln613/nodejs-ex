import React from 'react';
import { range, is, pick } from 'ramda';
import { connect } from 'no-redux';
import { compose } from 'recompose';
import actions from 'utils/actions';
import { scheduleSelector } from 'utils/selectors';
import { cdurl, withLoad, withDetail, withParams, withListener, getNameById, findById, tap } from 'utils';
import { withRouter } from 'react-router-dom';
import { TextBox, Table } from 'utils/comps';
import TMenu from './TMenu';

const Schedule = ({ schedule, tournament, id }) =>
  <div class="p16 f">
    <TMenu id={id} />
    <div class="p32 fv">
      <h1>Schedule - {tournament.name}</h1>
      <hr/>
      {(schedule || []).map(w =>
        <div class="pt8">
          <div class="pt8 fs24 darkgreen">{w.date}</div>
          <Table name="week" data={w.matches} equalWidth>
            <td key="team1Points" hidden />  
            <td key="team2Points" hidden />  
            <td key="winner" hidden />  
            <td key="loser" hidden />  
            <td key="result" center />  
          </Table>
        </div>  
      )}
    </div>
  </div>

export default compose(
  connect(scheduleSelector, actions),
  withParams,
  withLoad('tournament', 'id'),
  withListener('click', p => tap(p))
)(Schedule);