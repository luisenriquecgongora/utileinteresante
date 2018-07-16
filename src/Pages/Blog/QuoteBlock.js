import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class QuoteBlock extends Component {
  render() {
    return (
      <div className="grey lighten-2 roundedBorder">
        <div className="col-container">
          <div className="colSides center">
            <h3 className="upPos OswaldFont">“</h3>
          </div>
          <div className="colCenter center bold OpenSansFont">
            <p>Y si deseas hospedarte en la ciudad de Canta, los hoteles varían entre los
              150 soles y 180 soles, por habitación. En el caso de la gastronomía,
              esta varía entre platos típicos y menús, que van desde los 7 soles y 15 soles.
            </p>
          </div>
          <div className="colSides center">
            <h3 className="lowPos OswaldFont">”</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBlock;
