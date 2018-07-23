import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CardListTurismo extends Component {
  render() {
    return (
      <div className="row OswaldFont">
        <div className="row">
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/turi1.png"></img>
                <h3 class="card-title">
                  la huaca de la luna abre otro de sus templos al pÚblico </h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/turi2.png"></img>
                <h3 class="card-title">
                  Lima tiene una “Laguna de 7 colores” que debes visitar</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/turi3.png"></img>
                <h3 class="card-title">
                  paracas destino inolivdable lorem ipsum is a simple text</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/turi4.png"></img>
                <h3 class="card-title">
                  paracas destino inolivdable lorem ipsum is a simple text</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/turi5.png"></img>
                <h3 class="card-title">
                  Las Cataratas de Ahuashiyacu (Tarapoto) - Lo que se debe saber</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/turi6.png"></img>
                <h3 class="card-title">
                  VISITA LOS centros turísticos más importantes de la ciudad del Cusco </h3>
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

export default CardListTurismo;
