import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class ImageBlog extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-image">
          <img src="/background.png"></img>
          <span class="card-title flow-text normal-line-height">ENTRE LAS CORDILLERAS DE CANTA SE ENCUENTRA LAS LAGUNAS DE CALANCAYO</span>
        </div>
      </div>
    );
  }
}

export default ImageBlog;
