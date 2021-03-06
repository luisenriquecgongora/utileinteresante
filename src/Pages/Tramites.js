import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import CardList from './CardList';

class Tramites extends Component {
  render() {
    return (
      <div className="robotoFont row OswaldFont">
        <NavBar></NavBar>
        <h3 className="center white-text OswaldFont">TRÁMITES</h3>
        <div className="marginTop">
            <img src="" className="bg grey"></img>
            <div className="row fullSides white roundedBorder">
              <CardList></CardList>
            </div>
        </div>
      </div>
    );
  }
}

export default Tramites;
