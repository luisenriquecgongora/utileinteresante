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
      <div className="row">
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="/foodImg.jpg"></img>
              <span class="card-title bold flow-text">Lorem Ypsum Lorem</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardList;
