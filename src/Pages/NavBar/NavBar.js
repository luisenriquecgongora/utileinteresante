import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBarLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarActive: false,
      navBarColor: (this.props.startingColor=="black")?'white':'transparent gradNavBar',
      util_e_interesante_logo: (this.props.startingColor=="black")?'/img/util_e_interesante_black.svg':'/img/util_e_interesante_white.svg',
      color: (this.props.startingColor=="black")?'black':'white',
      lefBarActive: false
      };
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.toggleAmericaBar =  this.toggleAmericaBar.bind(this);
  }

  toggleAmericaBar(e){
    var color = 'black-text'
    var navBarColor = 'transparent gradNavBar'
    var util_e_interesante_logo = '/img/util_e_interesante_black.svg'
    if(this.state.navBarActive && this.props.startingColor!="black"){
      color = 'white'
      navBarColor = 'transparent gradNavBar'
      util_e_interesante_logo = '/img/util_e_interesante_white.svg'
    }else{
      color = 'black'
      navBarColor = 'white'
      util_e_interesante_logo = '/img/util_e_interesante_black.svg'
    }
    this.setState({
      lefBarActive: !this.state.lefBarActive,
      navBarColor:navBarColor,
      util_e_interesante_logo:util_e_interesante_logo,
      color: color
     })
  }

  toggleNavBar(e){
    var navBarColor = 'transparent gradNavBar'
    var color = 'black-text'
    var util_e_interesante_logo = '/img/util_e_interesante_black.svg'
    if(this.state.navBarActive && this.props.startingColor!="black"){
      color = 'white'
      navBarColor = 'transparent gradNavBar'
      util_e_interesante_logo = '/img/util_e_interesante_white.svg'
    }else{
      color = 'black'
      navBarColor = 'white'
      util_e_interesante_logo = '/img/util_e_interesante_black.svg'
    }
    this.setState({
      navBarActive: !this.state.navBarActive,
      navBarColor:navBarColor,
      util_e_interesante_logo:util_e_interesante_logo,
      color : color
     })
  }

  render(){
    return (
      <div className="navbar-fixed">
      <nav className={this.state.navBarColor}>
        <div className="nav-wrapper">
          <div class="little-left-pad left leftMargined">
            <div className="valign-wrapper">
              <img src="/img/logo_america.svg" onClick={this.toggleAmericaBar} className="logoNavabar"></img>
              {!this.state.lefBarActive ?
                <img onClick={this.toggleAmericaBar} src={"/img/arrow_down_"+this.state.color+".svg"} className="littleleftMargined logoNavabarArrow"></img>
                :
                <img onClick={this.toggleAmericaBar} src={"/img/arrow_up_"+this.state.color+".svg"} className="littleleftMargined logoNavabarArrow"></img>
              }
              <i className="material-icons grey-text"></i>
              <Link to="/landing" className="valign-wrapper littleleftMargined hide-on-med-and-down">
                <img src={this.state.util_e_interesante_logo} href="/landing" className="logoUtilInteresante"></img>
              </Link>
            </div>
            {this.state.lefBarActive &&
              <div className="white margin-top-no leftBarWidth">
                <p className="black-text OswaldFont">EN VIVO</p>
                <p className="black-text OswaldFont bold">ENTRETENIMIENTO</p>
                <p className="black-text OswaldFont">NOTICIAS</p>
                <p className="black-text OswaldFont">DEPORTE</p>
              </div>
            }
          </div>
          <img src={this.state.util_e_interesante_logo} href="/landing" className="brand-logo center hide-on-large-only logoUtilInteresante"></img>
          <ul id="nav-mobile" className="right OswaldFont rightMargined">
            <li className="hide-on-med-and-down bold"><Link to="/salud" href="sass.html" className={this.state.color + '-text'}>SALUD</Link></li>
            <li className="hide-on-med-and-down bold"><Link to="/tecnologia" href="badges.html" className={this.state.color + '-text'}>TECNOLOGÍA</Link></li>
            <li className="hide-on-med-and-down bold"><Link to="/estilodevida" href="badges.html" className={this.state.color + '-text'}>ESTILO DE VIDA</Link></li>
            <li className="hide-on-med-and-down bold"><Link to="/tramites" href="collapsible.html" className={this.state.color + '-text'}>TRAMITES</Link></li>
            <li className="hide-on-med-and-down bold"><a><img src={"/img/search_icon_"+this.state.color+".svg"} className="logoNavabar iconNavBar"></img></a></li>
            <li><a onClick={this.toggleNavBar}><img src={"/img/sandwich_"+this.state.color+".svg"} className="logoNavabar iconNavBar"></img></a></li>
          </ul>
        </div>
        {
          this.state.navBarActive &&
          <div className="OswaldFont">
            <div className="row white leftMarginedActive">
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
