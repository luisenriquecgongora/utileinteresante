import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CardListSalud extends Component {
  render() {
    return (
      <div className="row OswaldFont">
        <div className="row hide-on-med-and-down">
          <div className="col s12">
            <div class="card center valign-wrapper">
              <div class="card-image">
                <img src="/img/fruitb.png"></img>
                <h3 class="card-title large-text centeredVCard2 centeredhCard2">
                  ¿Cómo desinfectar frutas y verduras para evitar enfermedades?</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div class="card  ">
              <div class="card-image">
                <img src="/img/salud1.png"></img>
                <h3 class="card-title">
                  ¿Cuáles son los beneficios del espárrago en nuestra la salud?</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/salud2.png"></img>
                <h3 class="card-title">
                  La palta una fruta llena de beneficios y favorita en todo el mundo</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/salud3.png"></img>
                <h3 class="card-title">
                  ¿Cuánto mide y pesa el paiche?</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/salud4.png"></img>
                <h3 class="card-title">
                  ¿porque son tan caras las almendras?</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/salud5.png"></img>
                <h3 class="card-title">
                  5 platos para toda la familia con aji amarillo que tienes que probar</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/salud6.png"></img>
                <h3 class="card-title">
                  Propiedades medicinales del aguaymanto</h3>
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

export default CardListSalud;
