import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBarLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarActive: false,
      textColor : 'white-text',
      navBarColor : 'transparent gradNavBar'
      };
    this.toggleNavBar = this.toggleNavBar.bind(this);

  }

  toggleNavBar(e){
    var textColor = 'black-text'
    var navBarColor = 'transparent gradNavBar'
    if(this.state.navBarActive){
      textColor = 'white-text'
    }else{
      textColor = 'black-text'
    }
    if(this.state.navBarActive){
      navBarColor = 'transparent gradNavBar'
    }else{
      navBarColor = 'white'
    }
    console.log(this.state.navBarColor)
    this.setState({
      navBarActive: !this.state.navBarActive,
      textColor:textColor,
      navBarColor:navBarColor
     })
  }

  render(){
    return (
      <div className="navbar-fixed">
      <nav className={this.state.navBarColor}>
        <div className="nav-wrapper">
          <div class="little-left-pad left">
            <span className="valign-wrapper">
              <img src="/google_mini.png"></img>
              <i className="material-icons grey-text">keyboard_arrow_down</i>
              <Link to="/landing" className="valign-wrapper"><img src="/googlelogo.png" href="/landing" className="hide-on-med-and-down"></img></Link>
            </span>
          </div>
          <Link to="/landing" class="brand-logo center hide-on-large-only valign-wrapper"><img src="/googlelogo.png" className="valign-middle"></img></Link>
          <ul id="nav-mobile" className="right">
            <li className="hide-on-med-and-down"><Link to="/salud" href="sass.html" className={this.state.textColor}>SALUD</Link></li>
            <li className="hide-on-med-and-down"><Link to="/tecnologia" href="badges.html" className={this.state.textColor}>TECNOLOGÍA</Link></li>
            <li className="hide-on-med-and-down"><Link to="/estilodevida" href="badges.html" className={this.state.textColor}>ESTILO DE VIDA</Link></li>
            <li className="hide-on-med-and-down"><Link to="/tramites" href="collapsible.html" className={this.state.textColor}>TRAMITES</Link></li>
            <li className="hide-on-med-and-down"><a className={this.state.textColor}><i className="material-icons">search</i></a></li>
            <li><a onClick={this.toggleNavBar} className={this.state.textColor}><i className="material-icons">menu</i></a></li>
          </ul>
        </div>
        {
          this.state.navBarActive &&
          <div>
          <div className="row white">
            <div className="container">
              <div className="row">
                <div className="col s12 m4 black-text">
                  <h6><Link to="/salud" className="black-text">SALUD</Link></h6>
                  <p className="grey-text normal-line-height">Tendencias &#183; Street Style &#183; Desfiles &#183; Style &#183; Festivales</p>
                </div>
                <div className="col s12 m4 black-text">
                  <h6><Link to="/tecnologia" className="black-text">TECNOLOGÍA</Link></h6>
                  <p className="grey-text normal-line-height">Tendencias &#183; Street Style &#183; Desfiles &#183; Style &#183; Festivales</p>
                </div>
                <div className="col s12 m4 black-text">
                  <h6><Link to="/estilodevida" className="black-text">ESTILO DE VIDA</Link></h6>
                  <p className="grey-text normal-line-height">Tendencias &#183; Street Style &#183; Desfiles &#183; Style &#183; Festivales</p>
                </div>
                <div className="col s12 m4 black-text">
                  <h6><Link to="/tramites" className="black-text">TRAMITES</Link></h6>
                  <p className="grey-text normal-line-height">Tendencias &#183; Street Style &#183; Desfiles &#183; Style &#183; Festivales</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fullScreenOverLay" onClick={this.toggleNavBar}></div>
          </div>
        }
      </nav>

      </div>
    )
  }
}
