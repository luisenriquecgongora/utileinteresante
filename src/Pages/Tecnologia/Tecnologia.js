import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CardListTecnologia from './CardListTecnologia';

class Tecnologia extends Component {
  render() {
    return (
      <div className="robotoFont row OswaldFont">
        <NavBar></NavBar>
        <h3 className="center white-text OswaldFont">TECNOLOGIA</h3>
        <div className="marginTop">
            <img src="" className="bg blue"></img>
            <div className="row fullSides white roundedBorder">
              <CardListTecnologia></CardListTecnologia>
            </div>
        </div>
      </div>
    );
  }
}

export default Tecnologia;
