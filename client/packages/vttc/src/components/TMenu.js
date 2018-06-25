import React from 'react';
import { Link } from 'react-router-dom';

const TMenu = ({ id }) =>
  <div class="ui vertical menu">
    <Link class="item" to={'/tournaments/' + id}>Teams</Link>
    <Link class="item" to={'/schedule/' + id}>Schedule</Link>
    <Link class="item" to={'/standing/' + id}>Standing</Link>
    <Link class="item" to={'/stats/' + id}>Stats</Link>
  </div>

export default TMenu;