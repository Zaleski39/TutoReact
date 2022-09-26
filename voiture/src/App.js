import React, {Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

    // Props & State
    state = {
      titre: 'Mon catalogue Voitures',
      color: 'green'
    }

    render() {
      return (
        <div className="App">
          <Mycars 
              title={this.state.titre} 
              color={this.state.color}
              /> 
        </div>
      );
    }

}

export default App;
