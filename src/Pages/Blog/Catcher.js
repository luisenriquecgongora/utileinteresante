import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

export default class Catcher extends Component {
  render() {
    return (
      <div>
        <div className="col s12 OpenSansFont">
          <h4 className="black-text center">Lima tiene una  “Laguna de 7 Colores” que puedes</h4>
        </div>
        <div className="col s12 OpenSansFont">
          <h6 className="black-text center title-small-text flow-text normal-line-height">Disfruta un día entero al máximo y conoce este destino turístico muy cerca de Lima.
             Uno de los lugares turísticos más atractivos y cercanos a Lima es Canta.
            Pero, si ya conoces este destino y quieres regresar o recién la vas a descubrir.</h6>
        </div>
      </div>
    );
  }
}
