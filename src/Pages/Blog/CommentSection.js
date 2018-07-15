import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CommentSection extends Component {
  render() {
    return (
      <div className="grey lighten-2">
        <div className="col-container">
          <div className="colCenter">
            <p>Deja un comentario</p>
          </div>
          <div className="colSides center valign-middle">
            <i className="material-icons">keyboard_arrow_down</i>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
