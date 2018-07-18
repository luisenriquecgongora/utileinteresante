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
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/cardLac.png"></img>
                <a className="btn-floating transparent halfway-fab waves-effect waves-light red center"><img src="/playbut.png"></img></a>
                <h3 class="card-title"><span className="bold small-text">ESTILO DE VIDA</span> <br></br>
                  ¿Cómo saber si sufres de intolerancia a la lactosa?</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/canTest.png"></img>
                <h3 class="card-title"><span className="bold small-text">SALUD</span> <br></br>
                  CÁNCER TESTICULAR: SÍNTOMAS  A LOS QUE DEBES ESTAR ALERTA</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card ">
              <div className="card-image">
                <img src="/weirdLand.png"></img>
              </div>
              <div className="card-content no-margin-padding-sides no-margin-top">
                <div className="row">
                  <p className="right grey-text">FOTOS 1/20</p>
                </div>
                <div className="row no-margin-padding-sides">
                  <p className="black-text col s3 bold">TURISMO</p>
                  <p className="grey-text xsmall-text col s3">CONTENIDO PATROCINADO</p>
                  <h6 className="black-text col s12">LIMA TIENE UNA “LAGUNA DE 7 COLORES” QUE PUEDES VISITAR POR 50 SOLES</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card ">
              <div className="card-image center">
                <img src="/migra.png"></img>
                <a className="btn-floating transparent halfway-fab waves-effect waves-light red center"><img src="/playbut.png"></img></a>
              </div>
              <div className="card-content no-margin-padding-sides no-margin-top">
                <div className="row">
                  <p className="right white-text">FOTOS 1/20</p>
                </div>
                <div className="row no-margin-padding-sides">
                  <p className="black-text col s3 bold">TRÁMITES</p>
                  <p className="grey-text xsmall-text col s3">CONTENIDO PATROCINADO</p>
                  <h6 className="black-text col s12">MIGRACIONES ATENDERÁ LAS 24 HORAS A CIUDADANOS EXTRANJEROS EN SEDE DE BREÑA</h6>
                </div>
            </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="/canTest.png"></img>
                <h3 class="card-title"><span className="bold small-text">SALUD</span> <br></br>
                  CÁNCER TESTICULAR: SÍNTOMAS  A LOS QUE DEBES ESTAR ALERTA</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/cardLac.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard waves-effect waves-light red center"><img src="/playbut.png"></img></a>
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
