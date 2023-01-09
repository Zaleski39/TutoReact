import React, {Component} from 'react';
import {Mycars} from './components/Mycars';
import './App.css';

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <Mycars />
      </div>
    )
  }
  
}

