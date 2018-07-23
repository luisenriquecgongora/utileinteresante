import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class VideoContainer extends Component {
  render() {
    return (
      <div>
        <img src="/img/momTottus.png" className="responsive-img roundedBorder fullWidth"></img>
        <div className="row OpenSansFont offsetTop innerPadding">
          <h4 className="white-text">#LoremIpsum</h4>
          <div className="row card white green-text text-darken-4 innerPadding center margined">
            <div className="valign-wrapper margined">
              <div className="col l2 hide-on-med-and-down">
                <img src="/img/focoIcon.png"></img>
              </div>
              <div className="col s12 l7">
                <h6 className="bold"><span><img className="col l2 hide-on-large-only" src="/img/focoIconSmall.png"></img></span>Ut enim ad
                  minim veniam</h6>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
              </div>
              <div className="col l3 hide-on-med-and-down">
                <button className="btn green darken-4 xsmall-text">IR A LA NOTA COMPLETA</button>
              </div>
            </div>
            <div className="col s12 hide-on-large-only">
              <button className="btn green darken-4 xsmall-text">IR A LA NOTA COMPLETA</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoContainer;
