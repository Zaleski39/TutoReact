import React, {Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon catalogue Voitures'
  }

    render() {
      return (
        <div className="App">
          <Mycars title={this.state.titre}> </Mycars>          
        </div>
      );
    }



}

export default App;
