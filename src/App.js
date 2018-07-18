import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import LandingV2 from './Pages/Landing/LandingV2';
import Salud from './Pages/Salud/Salud';
import Tecnologia from './Pages/Tecnologia/Tecnologia';
import EstiloDeVida from './Pages/Turismo/EstiloDeVida';
import Tramites from './Pages/Tramites';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Especial from './Pages/Especial/Especial';

class App extends Component {
  render() {
    return (
      <div className="NewspaperMode">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='*/landing' component={Landing}/>
              <Route path='*/landingv2' component={LandingV2}/>
              <Route path='*/salud' component={Salud}/>
              <Route path='*/tecnologia' component={Tecnologia}/>
              <Route path='*/estilodevida' component={EstiloDeVida}/>
              <Route path='*/tramites' component={Tramites}/>
              <Route path='*/blog' component={Blog}/>
              <Route path='*/especial' component={Especial}/>
              <Route path="*/" render={() => (
                <Redirect to='/landing'/>
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
