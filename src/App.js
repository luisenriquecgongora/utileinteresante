import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Salud from './Pages/Salud';
import Tecnologia from './Pages/Tecnologia';
import EstiloDeVida from './Pages/EstiloDeVida';
import Tramites from './Pages/Tramites';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='*/landing' component={Landing}/>
              <Route path='*/salud' component={Salud}/>
              <Route path='*/tecnologia' component={Tecnologia}/>
              <Route path='*/estilodevida' component={EstiloDeVida}/>
              <Route path='*/tramites' component={Tramites}/>
              <Route path='*/blog' component={Blog}/>
              <Route path="*/" render={() => (
                <Redirect to='/Blog'/>
              )}/>
            </Switch>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
