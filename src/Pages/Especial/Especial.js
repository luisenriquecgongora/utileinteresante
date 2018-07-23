import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ListEspecial from './ListEspecial';
import StarterSpecial from './StarterSpecial';
import VideoContainer from './VideoContainer';
import CirclesSection from './CirclesSection';
import CardListSpecial from './CardListSpecial';

class Landing extends Component {
  render() {
    return (
      <div className="row">
        <NavBar startingColor="black"></NavBar>
        <div className="marginTop">
            <img src="/img/totusSkin.png" className="bg"></img>
            <div className="row fullSides white">
              <StarterSpecial></StarterSpecial>
              <ListEspecial></ListEspecial>
              <VideoContainer></VideoContainer>
              <CirclesSection></CirclesSection>
              <CardListSpecial></CardListSpecial>
            </div>
        </div>
      </div>
    );
  }
}

export default Landing;
