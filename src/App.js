import React, {Component} from 'react';
import {Mycars} from './components/Mycars';
import './App.css';

export class App extends Component {

    // Props & State
    state = {
      titre: 'Mon catalogue Voitures',
      color: 'green'   
    }

    render() {
      return (
        <div className="App">
          <Mycars 
            color = {this.state.color} 
            titre= {this.state.titre} /> 
        </div>
      );
    }

}

