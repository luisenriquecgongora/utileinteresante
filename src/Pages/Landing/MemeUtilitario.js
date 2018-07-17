import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class MemeUtilitario extends Component {
  render() {
    return (
      <div>
        <div className="col s12">
          <h5 className="grey-text bold center hide-on-large-only OswaldFont">MEME UTILITARIO</h5>
          <h5 className="grey-text bold hide-on-med-and-down OswaldFont">MEME UTILITARIO</h5>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="FixedHeightContainer valign-wrapper">
              <div className="containerImage">
                <img src="/memeutilitario1.png" className="roundedBorderBig memeContainer"></img>
                <div className="purpleBack">
                <div className="text-block OswaldFont">
                  <h6>SELECCIÓN DE OBJETOS</h6>
                  <h6>QUE PUESTO DE UNA</h6>
                  <h6>MANERA BIEN ODERNADA</h6>
                </div>
                </div>
              </div>
              <div className="containerImage">
                <img src="/memeutilitario2.png" className="roundedBorderBig memeContainer"></img>
                <div className="purpleBack">
                <div className="text-block OswaldFont">
                  <h6>SELECCIÓN DE OBJETOS</h6>
                  <h6>QUE PUESTO DE UNA</h6>
                  <h6>MANERA BIEN ODERNADA</h6>
                </div>
                </div>
              </div>
              <div className="containerImage">
                <img src="/memeutilitario1.png" className="roundedBorderBig memeContainer"></img>
                <div className="purpleBack">
                <div className="text-block OswaldFont">
                  <h6>SELECCIÓN DE OBJETOS</h6>
                  <h6>QUE PUESTO DE UNA</h6>
                  <h6>MANERA BIEN ODERNADA</h6>
                </div>
                </div>
              </div>
              <img src="/memeMcDonalds.png" className="roundedBorderBig memeContainer"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeUtilitario;
