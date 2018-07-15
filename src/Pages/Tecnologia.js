import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import CardList from './CardList';

class Tecnologia extends Component {
  render() {
    return (
      <div className="robotoFont row">
        <NavBar></NavBar>
        <h1 className="center white-text">TECNOLOGIA</h1>
        <div className="marginTop">
            <img src="/modifiedBack.jpg" className="bg"></img>
            <div className="row fullSides white">
              <CardList></CardList>
            </div>
        </div>
      </div>
    );
  }
}

export default Tecnologia;
