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
      <div className="grey lighten-2">
        <div className="col-container">
          <div className="colSides center">
            <h3 className="upPos">&#34;</h3>
          </div>
          <div className="colCenter center">
            <h5>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h5>
          </div>
          <div className="colSides center">
            <h3 className="lowPos">&#34;</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBlock;
