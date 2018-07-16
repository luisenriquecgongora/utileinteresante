import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class MiniDescription extends Component {
  render() {
    return (
      <div>
        <p class="black-text justify-text OpenSansFont">Esta parte de la sierra de Lima, además de contar con un agradable clima,
           cuenta con paisajes naturales poco conocidos por el turismo, 
          entre ellos la Laguna de Calancayo, conocida por sus colores que varían entre turquesa, verde y azul.</p>
      </div>
    );
  }
}

export default MiniDescription;
