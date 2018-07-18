import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class CirclesSection extends Component {
  render() {
    return (
      <div>
        <div className="row center OpenSansFont">
          <div className="col s12 l4 ">
            <img src="/circleImg1.png" className="responsive-img innerPadding"></img>
            <h6 className="small-text">LOREM IPSUM DOLOR SIT</h6>
            <h6 className="green-text text-lighten-2 innerPadding">LOREM IPSUM is a simple text gutemberg</h6>
            <button className="btn green darken-3 xsmall-text">SEGUIR LEYENDO</button>
          </div>
          <div className="col s12 l4 ">
            <img src="/circleImg2.png" className="responsive-img innerPadding"></img>
            <h6 className="small-text">LOREM IPSUM DOLOR SIT</h6>
            <h6 className="green-text text-lighten-2 innerPadding">LOREM IPSUM is a simple text gutemberg</h6>
            <button className="btn green darken-3 xsmall-text">VER VIDEO</button>
          </div>
          <div className="col s12 l4 ">
            <img src="/circleImg3.png" className="circle responsive-img innerPadding"></img>
            <h6 className="small-text">LOREM IPSUM DOLOR SIT</h6>
            <h6 className="green-text text-lighten-2 innerPadding">LOREM IPSUM is a simple text gutemberg</h6>
            <button className="btn green darken-3 xsmall-text">SEGUIR LEYENDO</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CirclesSection;
