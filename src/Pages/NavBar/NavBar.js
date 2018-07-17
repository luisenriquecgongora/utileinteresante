import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBarLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarActive: false,
      textColor : (this.props.startingColor=="black")?'black-text':'white-text',
      navBarColor: (this.props.startingColor=="black")?'white':'transparent gradNavBar',
      util_e_interesante_logo: (this.props.startingColor=="black")?'/util_e_interesante_black.png':'util_e_interesante_white.png',
      lefBarActive: false
      };
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.toggleAmericaBar =  this.toggleAmericaBar.bind(this);
  }

  toggleAmericaBar(e){
    var textColor = 'black-text'
    var navBarColor = 'transparent gradNavBar'
    var util_e_interesante_logo = '/util_e_interesante_black.png'
    if(this.state.navBarActive && this.props.startingColor!="black"){
      textColor = 'white-text'
      navBarColor = 'transparent gradNavBar'
      util_e_interesante_logo = '/util_e_interesante_white.png'
    }else{
      textColor = 'black-text'
      navBarColor = 'white'
      util_e_interesante_logo = '/util_e_interesante_black.png'
    }
    this.setState({
      lefBarActive: !this.state.lefBarActive,
      textColor:textColor,
      navBarColor:navBarColor,
      util_e_interesante_logo:util_e_interesante_logo
     })
  }

  toggleNavBar(e){
    var textColor = 'black-text'
    var navBarColor = 'transparent gradNavBar'
    var util_e_interesante_logo = '/util_e_interesante_black.png'
    if(this.state.navBarActive && this.props.startingColor!="black"){
      textColor = 'white-text'
      navBarColor = 'transparent gradNavBar'
      util_e_interesante_logo = '/util_e_interesante_white.png'
    }else{
      textColor = 'black-text'
      navBarColor = 'white'
      util_e_interesante_logo = '/util_e_interesante_black.png'
    }
    this.setState({
      navBarActive: !this.state.navBarActive,
      textColor:textColor,
      navBarColor:navBarColor,
      util_e_interesante_logo:util_e_interesante_logo
     })
  }

  render(){
    return (
      <div className="navbar-fixed">
      <nav className={this.state.navBarColor}>
        <div className="nav-wrapper">
          <div class="little-left-pad left">
            <span className="valign-wrapper">
              <img src="/logo_america.png" onClick={this.toggleAmericaBar}></img>
              {!this.state.lefBarActive ?
                <i className="material-icons grey-text">keyboard_arrow_down</i>
                :
                <i className="material-icons grey-text">keyboard_arrow_up</i>
              }
              <Link to="/landing" className="valign-wrapper">
              <img src={this.state.util_e_interesante_logo} href="/landing" className="hide-on-med-and-down"></img></Link>
            </span>
            {this.state.lefBarActive &&
              <div className="white margin-top-no">
                <p className="black-text OswaldFont">EN VIVO</p>
                <p className="black-text OswaldFont bold">ENTRETENIMIENTO</p>
                <p className="black-text OswaldFont">NOTICIAS</p>
                <p className="black-text OswaldFont">DEPORTE</p>
              </div>
            }
          </div>
          <Link to="/landing" class="brand-logo center hide-on-large-only valign-wrapper"><img src={this.state.util_e_interesante_logo} className="valign-middle"></img></Link>
          <ul id="nav-mobile" className="right OswaldFont">
            <li className="hide-on-med-and-down bold"><Link to="/salud" href="sass.html" className={this.state.textColor}>SALUD</Link></li>
            <li className="hide-on-med-and-down bold"><Link to="/tecnologia" href="badges.html" className={this.state.textColor}>TECNOLOGÍA</Link></li>
            <li className="hide-on-med-and-down bold"><Link to="/estilodevida" href="badges.html" className={this.state.textColor}>ESTILO DE VIDA</Link></li>
            <li className="hide-on-med-and-down bold"><Link to="/tramites" href="collapsible.html" className={this.state.textColor}>TRAMITES</Link></li>
            <li className="hide-on-med-and-down bold"><a className={this.state.textColor}><i className="material-icons">search</i></a></li>
            <li><a onClick={this.toggleNavBar} className={this.state.textColor}><i className="material-icons">menu</i></a></li>
          </ul>
        </div>
        {
          this.state.navBarActive &&
          <div className="OswaldFont">
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
