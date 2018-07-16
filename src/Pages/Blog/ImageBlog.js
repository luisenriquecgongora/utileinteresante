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
      <div class="card OswaldFont">
        <div class="card-image">
          <img src="/firstImageBlog.png"></img>
          <span class="card-title">ENTRE LAS CORDILLERAS DE CANTA, SE ENCUENTRA LA LAGUNA DE CALANCAYO. (FOTO: MEDRANO TOURS)</span>
        </div>
      </div>
    );
  }
}

export default ImageBlog;
