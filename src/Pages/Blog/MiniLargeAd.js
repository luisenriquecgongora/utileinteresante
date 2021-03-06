import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class MiniLargeAd extends Component {
  render() {
    return (
      <div className="OswaldFont">
        <div className="row valign-wrapper hide-on-med-and-down">
          <div className="col s7">
            <h6 className="grey-text">LEE TAMBIÉN</h6>
            <h6 className="black-text small-textf bold">[MONTAÑA DE SIETE COLORES : COMO LLEGAR Y CUÁNTO CUESTA]</h6>
          </div>
          <div className="col s5 center">
            <img src="/img/montainImg.png" className="responsive-img center"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniLargeAd;
