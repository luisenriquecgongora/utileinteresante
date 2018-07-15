import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import CardList from './CardList';

class Landing extends Component {
  render() {
    return (
      <div className="robotoFont row">
        <NavBar></NavBar>
        <div className="marginTop">
            <img src="/background.png" className="bg"></img>
            <h1 className="white-text">LANDING</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
