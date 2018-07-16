import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Subscribe from './Subscribe';

export default class Footer extends Component {
  render(){
    return (
      <footer className="page-footer white">
        <div className="container">
          <div className="row">
            <div className="col l2 s6 valign-wrapper">
              <div className="row">
                <div className="col s12 valign-wrapper">
                  <img src="/america_logo_footer.png"></img>
                  <p className="grey-text text-darken-3 leftSpacing">América</p>
                </div>
              </div>
            </div>
            <div className="col l3 s6 hide-on-med-and-down">
              <a className="grey-text text-darken-1" href="#!">Políticas de Privacidad<br/></a>
              <a className="grey-text text-darken-1" href="#!">Términos y Condiciones<br/></a>
              <a className="grey-text text-darken-1" href="#!">Código de Ética<br/></a>
            </div>
            <div className="col l2 s6 valign-wrapper hide-on-med-and-down">
              <div className="col s1">
                <img src="/facebook_logo.png"></img>
                <img src="/twitter_logo.png"></img>
                <img src="/instagram_logo.png"></img>
              </div>
              <div className="col s10">
                <p className="grey-text text-darken-1 leftSpacing no-margin">Facebook</p>
                <p className="grey-text text-darken-1 leftSpacing no-margin">Twitter</p>
                <p className="grey-text text-darken-1 leftSpacing no-margin">Instagram</p>
              </div>
            </div>
            <div className="col l5 s6 hide-on-med-and-down">
              <Subscribe />
            </div>
            <div className="col l5 s6 hide-on-large-only">
              <div className="row">
                <div className="col s4">
                  <img src="/facebook_logo_large.png"></img>
                </div>
                <div className="col s4">
                  <img src="/twitter_logo_large.png"></img>
                </div>
                <div className="col s4">
                  <img src="/instagram_logo_large.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
