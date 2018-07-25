import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Subscribe from './Subscribe';
import MiniDescription from './MiniDescription';
import LargeDescription from './LargeDescription';
import MiniLargeAd from './MiniLargeAd';
import QuoteBlock from './QuoteBlock';
import ImageBlog from './ImageBlog';
import TagSection from './TagSection';
import CommentSection from './CommentSection';
import Relacionados from './Relacionados';
import Catcher from './Catcher';

class Blog extends Component {
  render() {
    return (
      <div className="row">
        <NavBar startingColor="black"></NavBar>
        <div className="marginTop">
            <img src="/img/backgroundBlog.jpg" className="bg"></img>
            <div className="row fullSides white">
              <img src="/img/contenidopatrocinado.png" className="responsive-img fullWidth"></img>
              <Catcher></Catcher>
              <div className="col s12 m8 roundedBorder">
                <ImageBlog></ImageBlog>
                <div className="row">
                  <div className="col s8">
                    <h6 className="OswaldFont bold">TURISMO <span className="grey-text">03 JUNIO 2018</span></h6>
                  </div>
                </div>
                <MiniDescription></MiniDescription>
                <MiniLargeAd></MiniLargeAd>
                <LargeDescription></LargeDescription>
                <ImageBlog></ImageBlog>
                <MiniLargeAd></MiniLargeAd>
                <QuoteBlock></QuoteBlock>
                <LargeDescription></LargeDescription>
                <MiniLargeAd></MiniLargeAd>
                <TagSection></TagSection>
                <CommentSection></CommentSection>
              </div>
              <div className="col s12 m4">
                <div class="card hide-on-med-and-down center noleftpad">
                  <div class="card-image side300">
                    <img src="/img/sideView.png"></img>
                  </div>
                </div>
                <Subscribe></Subscribe>
              </div>
              <Relacionados></Relacionados>
            </div>
        </div>
      </div>
    );
  }
}

export default Blog;
