import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class StarterSpecial extends Component {
  render() {
    return (
      <div>

        <div className="col s12 fullWidth hide-on-med-and-down">
          <img src="/img/especialView.png" className="responsive-img roundedBorder littleSpaceTop borderStrong innerPadding fullWidth"></img>
        </div>
        <div className="col s12 fullWidth no-margin-padding-sides hide-on-large-only">
          <div className="row grey lighten-3 no-margin-top fullWidth OpenSansFont bold black-text heightMobile valign-wrapper">
            <h6 className="no-margin-top littleFont col s5 offset-s3">CONTENIDO PATROCINADO</h6>
            <img src="/img/tottus_logo.png" className="col s4 right responsive-img"></img>
          </div>
          <img src="/img/especialViewMobile.png" className="responsive-img littleSpaceTop innerPadding fullWidth"></img>
        </div>
      </div>
    );
  }
}

export default StarterSpecial;
