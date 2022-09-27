import React, {Component} from 'react';
import {Mycars} from './components/Mycars';
import './App.css';

export class App extends Component {

    // Props & State
    state = {
      titre: 'Mon catalogue Voitures'      
    }

    render() {
      return (
        <div className="App">
          <Mycars color='green' titre='Mon catalogue Voitures' /> 
        </div>
      );
    }

}

