import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import {
  BrowserRouter,
  Route,
  Link, Switch, Redirect
} from 'react-router-dom';

class LargeDescription extends Component {
  render() {
    return (
      <div className="OpenSansFont">
      <h5 className="bold">¿Cómo llegar y cuánto cuesta?</h5>
        <p class="black-text justify-text">La “laguna de siete colores”, como se la conoce,
           está ubicada en la provincia de Canta (noreste de Lima),
            debajo de la cordillera La Viuda a 4 800 msnm, cerca de Cerro de Pasco y Huancayo.
        </p>
        <p class="black-text justify-text">Si planeas ir por tu cuenta, primero debes dirigirte al kilómetro
           22 de Carabayllo y tomar una minivan que te llevará de Lima a Canta (en dos horas) por un precio de 15 soles. </p>
        <p class="black-text justify-text">Una vez allí, podrás tomar un carro particular para
           trasladarte al nevado de La Viuda. El precio desde la ciudad de Canta hasta la
            laguna te costará 20 soles.</p>
        <p class="black-text justify-text">A tu llegada, no solo serás testigo de la belleza de la
          Laguna de Calancayo, sino también de la Laguna de Chuchón. En sus alrededores,
          podrás observar patos andinos, alpaca y criadores de truchas.
        </p>
      </div>
    );
  }
}

export default LargeDescription;
