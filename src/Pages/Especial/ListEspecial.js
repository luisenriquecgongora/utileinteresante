import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class ListEspecial extends Component {
  render() {
    return (
      <div>
        <div className="hide-on-large-only">
          <div className="col s12 m4">
            <div class="card horizontal valign-wrapper OpenSansFont bold lime green-text text-darken-4">
              <div class="card-image little-padding-left">
                <img src="/img/imgList1.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard2 waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Gobierno buscará más participación privada en la educación pública</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card horizontal valign-wrapper OpenSansFont bold green white-text">
              <div class="card-image little-padding-left">
                <img src="/img/imgList2.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard2 waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>3 formas de financiar la compra de los útiles escolares</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card horizontal valign-wrapper OpenSansFont bold green darken-3 white-text">
              <div class="card-image little-padding-left">
                <img src="/img/imgList3.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard2 waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Líderes educativos recibieron capacitación en calidad académica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hide-on-med-and-down">
          <div className="col s12 m4">
            <div className="card cardSize lime">
              <div className="card-image">
                <img src="/img/imgList1.png"></img>
                  <a className="btn-floating transparent halfway-fab centeredVCard2 waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
              </div>
              <div className="card-content OpenSansFont bold green-text text-darken-4">
                <h6>Gobierno buscará más participación privada en la educación pública</h6>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card cardSize green">
              <div className="card-image">
                <img src="/img/imgList2.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard2 waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
              </div>
              <div className="card-content OpenSansFont bold white-text">
                <h6>3 formas de financiar la compra de los útiles escolares</h6>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card cardSize green darken-3">
              <div className="card-image">
                <img src="/img/imgList3.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard2 waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
              </div>
              <div className="card-content OpenSansFont bold white-text">
                <h6>Líderes educativos recibieron capacitación en calidad académica</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListEspecial;
