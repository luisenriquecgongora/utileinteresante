import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CardList extends Component {
  render() {
    return (
      <div className="row OswaldFont">
        <div className="row">
          <div className="col s12 m4 fullHeightCard">
            <div class="card ">
              <div class="card-image">
                <img src="/img/cardLac.png"></img>
                <h3 class="card-title"><span className="bold small-text OswaldFont">ESTILO DE VIDA</span> <br></br>
                  ¿Cómo saber si sufres de intolerancia a la lactosa?</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="/img/canTest.png"></img>
                  <a className="btn-floating transparent halfway-fab waves-effect waves-light red center centeredVCard"><img src="/img/play_icon.svg"></img></a>
                <h3 class="card-title"><span className="bold small-text">SALUD</span> <br></br>
                  Cáncer Testicular: Síntomas a los que debes estar alerta</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card fullHeightCard">
              <div className="card-image ">
                <img src="/img/weirdLand.png"></img>
              </div>
              <div className="card-content no-margin-padding-sides no-margin-top">
                <div className="row">
                  <p className="right grey-text">FOTOS 1/20</p>
                </div>
                <div className="row no-margin-padding-sides">
                  <p className="black-text col m5 l4 bold">TURISMO</p>
                  <p className="grey-text xsmall-text col m5 l3">CONTENIDO PATROCINADO</p>
                  <h6 className="black-text col s12">Lima tiene una “Laguna de 7 colores” que puedes visitar po 50 soles</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card ">
              <div className="card-image center">
                <img src="/img/migra.png"></img>
                <a className="btn-floating transparent halfway-fab waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
              </div>
              <div className="card-content no-margin-padding-sides no-margin-top">
                <div className="row">
                  <p className="right white-text">FOTOS 1/20</p>
                </div>
                <div className="row no-margin-padding-sides">
                  <p className="black-text col m5 l4 bold">TRÁMITES</p>
                  <p className="grey-text xsmall-text col m5 l3">CONTENIDO PATROCINADO</p>
                  <h6 className="black-text col s12">Migraciones antenderá 24 horas del día en la sede breña</h6>
                </div>
            </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="/img/canTest.png"></img>
                <h3 class="card-title"><span className="bold small-text">SALUD</span> <br></br>
                  CÁNCER TESTICULAR: SÍNTOMAS  A LOS QUE DEBES ESTAR ALERTA</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/cardLac.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
                <h3 class="card-title"><span className="bold small-text">ESTILO DE VIDA</span> <br></br>
                  ¿Cómo saber si sufres de intolerancia a la lactosa?</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row center">
          <button className="btn center white black-text small-text OpenSansFont"> VER MÁS</button>
        </div>
      </div>
    );
  }
}

export default CardList;
