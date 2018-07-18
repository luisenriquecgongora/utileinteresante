import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CardListSalud from './CardListSalud';

class Salud extends Component {
  render() {
    return (
      <div className="robotoFont row">
        <NavBar></NavBar>
        <h3 className="center white-text OswaldFont">SALUD</h3>
        <div className="marginTop">
            <img src="/backnutricion.png" className="bg"></img>
            <div className="row fullSides white roundedBorder">
              <CardListSalud></CardListSalud>
            </div>
        </div>
      </div>
    );
  }
}

export default Salud;
