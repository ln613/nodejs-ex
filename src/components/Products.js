import React from 'react';
import { cdurl } from 'utils';
import CatMenu from './CatMenu';
//import 'products.bundle';

export default ({ lookup, n, d, history }) =>
  <div class="p16 f">
    <CatMenu />
    <div class="pl32 w90">
      <h1>Products</h1>
      <div class="ui divider"></div>
      <div class="fw w100">
        <div class="f w20 p8">  
          <div class="card fv cp">
            <img class="w100" alt="" />
            <hr />
            <div class="p8 fg1">
              <h3>Tenergy 5</h3>
              <div>abc</div>
            </div>
            <hr class="w100" />
            <div class="f p8">
              <div class="fs24 blue">$100</div>
              <div class="fs24 red pl8">$80</div>
            </div>  
          </div>
        </div>  
      </div>
    </div>
  </div>
