import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CardListTurismo from './CardListTurismo';

class EstiloDeVida extends Component {
  render() {
    return (
      <div className="robotoFont row">
        <NavBar></NavBar>
        <h5 className="center white-text OswaldFont hide-on-large-only">TURISMO</h5>
        <h3 className="center white-text OswaldFont hide-on-med-and-down">TURISMO</h3>
        <div className="marginTopTurismo">
            <img src="/img/estilodevida.png" className="bgTurismo hide-on-large-only"></img>
            <img src="/img/estilodevidaDesktop.png" className="bgTurismo hide-on-med-and-down"></img>
            <div className="row fullSides white roundedBorder">
              <CardListTurismo></CardListTurismo>
            </div>
        </div>
      </div>
    );
  }
}

export default EstiloDeVida;
