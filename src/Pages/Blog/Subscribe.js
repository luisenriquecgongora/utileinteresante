import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class Subscribe extends Component {
  render() {
    return (
      <div class="card black">
        <div class="card-content white-text">
          <h6 class="flow-text OswaldFont">¿TE GUSTÓ LO QUE LEÍSTE?</h6>
          <p class="OpenSansFont">Suscríbete y recibe novedades</p>
          <div className="suscribeContainer OpenSansFont">
            <input className="inputSubscribe"></input>
            <button className="okinputSubscribe bold">OK</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
