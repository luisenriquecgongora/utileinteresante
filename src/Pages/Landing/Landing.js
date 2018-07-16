import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CardList from '../CardList';
import CardStarter from './CardStarter';

class Landing extends Component {
  render() {
    return (
      <div className="robotoFont row">
        <NavBar startingColor="black"></NavBar>
        <div className="hide-on-large-only">
          <img src="/background.png" className="bgLanding"></img>
          <div className="marginLanding robotoFont">
              <h6 className="white-text center bold">TURISMO</h6>
              <Link to="/blog"><h5 className="white-text center">LIMA TIENE UNA LAGUNA DE 7 COLORES QUE PUEDES VISITAR POR 50 SOLES</h5></Link>
              <p className="white-text center">Disfruta de un día entero al máximo y conoce este destino turístico muy cerca de Lima</p>
          </div>
        </div>
        <div className="container">
          <CardStarter></CardStarter>
          <div className="col s12">
            <h5 className="grey-text bold center hide-on-large-only">ESPECIAL</h5>
            <h5 className="grey-text bold hide-on-med-and-down">ESPECIAL</h5>
          </div>
          <div className="row">
            <img src="/especialImage.png" className="responsive-img"></img>
          </div>
          <div className="col s12">
            <h5 className="grey-text bold center hide-on-large-only">MEME UTILITARIO</h5>
            <h5 className="grey-text bold hide-on-med-and-down">MEME UTILITARIO</h5>
          </div>
          <div className="row">
            <img src="/memeutilitarioSmall.png" className="responsive-img hide-on-large-only"></img>
            <img src="/memeutilitario.png" className="responsive-img hide-on-med-and-down"></img>
          </div>
          <div className="row">
            <div className="col s12">
              <h5 className="grey-text bold center hide-on-large-only">LO ÚLTIMO</h5>
              <h5 className="grey-text bold hide-on-med-and-down">LO ÚLTIMO</h5>
            </div>
            <CardList></CardList>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
