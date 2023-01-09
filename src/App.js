import React, {Component} from 'react';
import {Mycars} from './components/Mycars';
import {Welcome} from './components/Welcome';
import './App.css';

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <Welcome />
        <Mycars />
      </div>
    )
  }
  
}

