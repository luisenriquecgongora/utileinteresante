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
        <p class="black-text justify-text">Es parte de la Sierra y se encuentra en Es parte de la Sierra y se encuentra en
          Es parte de la Sierra y se encuentra en Es parte de la Sierra y se encuentra en
          Es parte de la Sierra y se encuentra en Es parte de la Sierra y se encuentra en</p>
      </div>
    );
  }
}

export default MiniDescription;
