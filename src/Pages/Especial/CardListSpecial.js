import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CardListSpecial extends Component {
  render() {
    return (
      <div className="row OswaldFont">
        <div className="row">
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/esp1.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard left waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
                <h3 class="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/esp2.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard left waves-effect waves-light red center"><img src="/img/array_pic.svg"></img></a>
                <h3 class="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/esp3.png"></img>
                <h3 class="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/esp4.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard left waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
                <h3 class="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/esp5.png"></img>
                <h3 class="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h3>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="card ">
              <div class="card-image">
                <img src="/img/esp6.png"></img>
                <a className="btn-floating transparent halfway-fab centeredVCard left waves-effect waves-light red center"><img src="/img/play_icon.svg"></img></a>
                <h3 class="card-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h3>
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

export default CardListSpecial;
