import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CardListTecnologia extends Component {
  render() {
    return (
      <div className="row OswaldFont">
        <div className="row">
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/naobot.png"></img>
                <h3 class="card-title">
                  NAO, EL ROBOT MULTIUSOS LLEGA AL PERÚ, ENTERÁTE QUIENES YA LO TIENEN</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/tec2.png"></img>
                <h3 class="card-title">
                  Videojuego FIFA 18 en Perú: ¿cómo comprarlo y cuánto cuesta?</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/tec3.png"></img>
                <h3 class="card-title">
                  LOREM IPSUM IS A SIMPLE TEXT SINCE 1930 WITH GUTEMBERG</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/tec4.png"></img>
                <h3 class="card-title">
                  SMARTWACTH, mil veces más barato que apple watch</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/tec5.png"></img>
                <h3 class="card-title">
                  SONRÍELE A TU RELOJ y activa la vista de holograma</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/tec6.png"></img>
                <h3 class="card-title">
                  DESPUÉS DE LAS VIDEOLLAMADAS CONTINÚAN LOS HOLOGRAMAS</h3>
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

export default CardListTecnologia;
