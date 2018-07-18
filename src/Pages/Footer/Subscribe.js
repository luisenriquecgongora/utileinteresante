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
      <div className="marginBot">
        <p className="black-text no-margin bold OswaldFont">SUSCRÍBETE Y RECIBE NOVEDADES</p>
        <div class="card-content black-text ">
          <div className="suscribeContainer">
            <input className="inputSubscribeFooter" placeholder="Recibe tu correo"></input>
            <button className="okinputSubscribeFooter">OK</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
