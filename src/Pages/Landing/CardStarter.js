import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CardStarter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 hide-on-med-and-down">
          <div class="card">
            <div class="card-image">
              <Link to ="/blog"><img src="/backgroundMultiBig.png"></img></Link>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/backgroundMultiSmall.png"></img>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="/backgroundMultiSmall.png"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardStarter;
