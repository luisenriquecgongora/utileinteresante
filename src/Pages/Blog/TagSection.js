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
      <div className="row OswaldFont">
        <div className="col s3 m3 l2">
          <h6 className="grey-text flow-text">Etiquetas</h6>
        </div>
        <div className="col s3 m3 l2">
          <h5 className="black-text flow-text bold">TURISMO</h5>
        </div>
        <div className="col s5 m3">
          <h5 className="black-text flow-text bold"> ESTILO DE VIDA</h5>
        </div>
      </div>
    );
  }
}

export default TagSection;
