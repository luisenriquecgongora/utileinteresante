import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

import CardList from '../CardList';
class Relacionados extends Component {
  render() {
    return (
      <div className="col s12">
        <h5 className="grey-text bold">RELACIONADOS</h5>
        <CardList></CardList>
      </div>
    );
  }
}

export default Relacionados;
