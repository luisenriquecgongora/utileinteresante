import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Subscribe from './Subscribe';

export default class Footer extends Component {
  render(){
    return (
      <footer className="white OpenSansFont leftMargined2">
        <div className="footerAd leftMarginedFixed">
          <div className="left">
            <img className="responsive-img left littleleftMargined" src="/img/miniAd.png"></img>
            <div className="left">
              <div className="left littleleftMargined">
                <div className="no-margin-abs no-padding-abs"><h5 className="xsmall-text grey-text left no-margin-abs no-padding-abs normal-line-height">¡Imperdible!</h5></div>
                <div className="no-margin-abs no-padding-abs no-marginTop"><h5 className="small-textf black-text bold left no-margin-abs no-padding-abs normal-line-height no-marginTop">NAO EL ROBOT MULTIUSOS LLEGA AL PERU</h5></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row hide-on-large-only">
            <div className="col s9">
              <h6 className="grey-text text-darken-3 leftSpacing bold">INFORMACIÓN AL USUARIO</h6>
            </div>
            <div className="col s3">
              <i className="material-icons grey-text right">keyboard_arrow_down</i>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row nonothing">
            <div className="col l3 s6 valign-wrapper">
              <img src="/img/america_footer.svg" className="logoNavabar"></img>
              <h6 className="grey-text text-darken-3 leftSpacing bold">América</h6>
            </div>
            <div className="col l3 s6 hide-on-med-and-down">
              <a className="grey-text text-darken-1" href="#!">Políticas de Privacidad<br/></a>
              <a className="grey-text text-darken-1" href="#!">Términos y Condiciones<br/></a>
              <a className="grey-text text-darken-1" href="#!">Código de Ética<br/></a>
            </div>
            <div className="col l2 s6 valign-wrapper hide-on-med-and-down">
              <div className="col s1">
                <img src="/img/facebook_logo_black.svg" className="logofooter"></img>
                <img src="/img/twitter_logo_black.svg" className="logofooter"></img>
                <img src="/img/instagram_logo_black.svg" className="logofooter"></img>
              </div>
              <div className="col s10">
                <p className="grey-text text-darken-1 leftSpacing no-margin-abs">Facebook</p>
                <p className="grey-text text-darken-1 leftSpacing no-margin-abs">Twitter</p>
                <p className="grey-text text-darken-1 leftSpacing no-margin-abs">Instagram</p>
              </div>
            </div>
            <div className="col l4 s6 hide-on-med-and-down">
              <Subscribe />
            </div>
            <div className="col l5 s6 hide-on-large-only">
              <div className="row">
                <div className="col s4">
                  <img src="/img/facebook_logo.svg" className="logoNavabar"></img>
                </div>
                <div className="col s4">
                  <img src="/img/twitter_logo.svg" className="logoNavabar"></img>
                </div>
                <div className="col s4">
                  <img src="/img/instagram_logo.svg" className="logoNavabar"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row hide-on-large-only white-text">
            a<br></br>
            a<br></br>
            a<br></br>
        </div>
        <div className="row hide-on-med-and-down white-text">
            a<br></br>
            a<br></br>
            a<br></br>
        </div>
        <div className="row hide-on-med-and-down white-text">
            a<br></br>
            a<br></br>
            a<br></br>
        </div>
        <div className="row hide-on-med-and-down white-text">
            a<br></br>
            a<br></br>
            a<br></br>
        </div>
      </footer>
    )
  }
}
