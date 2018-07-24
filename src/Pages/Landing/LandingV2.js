import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CardListLanding from './CardListLanding';
import CardStarter from './CardStarter';
import MemeUtilitario from './MemeUtilitario';

class Landing extends Component {
  render() {
    return (
      <div className="robotoFont row">
        <NavBar startingColor="black"></NavBar>

        <div className="hide-on-large-only">
          <img src="/img/background.png" className="bgLanding"></img>
          <div className="marginLanding robotoFont">
              <h6 className="white-text center bold">TURISMO</h6>
              <Link to="/blog"><h5 className="white-text center">LIMA TIENE UNA LAGUNA DE 7 COLORES QUE PUEDES VISITAR POR 50 SOLES</h5></Link>
              <p className="white-text center">Disfruta de un día entero al máximo y conoce este destino turístico muy cerca de Lima</p>
          </div>
        </div>
        <div className="marginTop">
          <div className="row fullSides white">
            <img src="/img/backgroundBlog.jpg" className="bgV2 hide-on-med-and-down"></img>
            <div className="">
              <CardStarter></CardStarter>
              <div className="col s12">
                <h5 className="grey-text bold center hide-on-large-only OswaldFont">ESPECIAL</h5>
                <h5 className="grey-text bold hide-on-med-and-down OswaldFont">ESPECIAL</h5>
              </div>
              <div className="row">
                <Link to='/especial'>
                  <img src="/img/especialImage.png" className="responsive-img"></img>
                </Link>
              </div>
              <MemeUtilitario></MemeUtilitario>
              <div className="row">
                <div className="col s12">
                  <h5 className="grey-text bold center hide-on-large-only OswaldFont">LO ÚLTIMO</h5>
                  <h5 className="grey-text bold hide-on-med-and-down OswaldFont">LO ÚLTIMO</h5>
                </div>
                <CardListLanding></CardListLanding>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
