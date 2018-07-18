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
            <img src="/backgroundBlog.jpg" className="bg"></img>
            <div className="row fullSides white">
              <img src="/contenidopatrocinado.png" className="responsive-img fullWidth"></img>
              <Catcher></Catcher>
              <div className="col s12 m8 roundedBorder">
                <ImageBlog></ImageBlog>
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
                <div class="card hide-on-med-and-down">
                  <div class="card-image">
                    <img src="/sideView.png"></img>
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
