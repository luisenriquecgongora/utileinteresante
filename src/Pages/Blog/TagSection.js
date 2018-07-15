import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class TagSection extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3">
          <h6 className="grey-text flow-text">Etiquetas</h6>
        </div>
        <div className="col s9">
          <h5 className="black-text flow-text bold"><span>TURISMO </span><span> ESTILO DE VIDA</span></h5>
        </div>
      </div>
    );
  }
}

export default TagSection;
