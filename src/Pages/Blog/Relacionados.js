import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

import CardListTurismo from '../Turismo/CardListTurismo';
class Relacionados extends Component {
  render() {
    return (
      <div className="col s12">
        <h5 className="grey-text bold OswaldFont">RELACIONADOS</h5>
        <CardListTurismo></CardListTurismo>
      </div>
    );
  }
}

export default Relacionados;
