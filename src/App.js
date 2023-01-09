import React, {Component} from 'react';
import {Mycars} from './components/Mycars';
import './App.css';

export class App extends Component {

    // Props & State
    state = {
      title: 'Mon catalogue Voitures',
      color: 'green'   
    }

    // Fonction pour changer le titre en dur
    changeTitle = (e) => {
      // console.log(e.target);
      this.setState({
        title: 'Mon nouveau Titre en dur'
      })
    }
    // Fonction pour changer le titre via paramètre
    changeViaParam = (titleParam) => {
      this.setState({
        title: titleParam
      })
    }
    // Fonction pour changer le titre via Bind
    changeViaBind = (titleBind) => {
      this.setState({
        title: titleBind
      })
    }
    // Fonction pour changer le titre via Input
    changeViaInput = (e) => {
      // console.log(e.target);
      this.setState({
        title: e.target.value
      })
    }

    render() {
      return (
        <div className="App">
          <Mycars 
            color = {this.state.color} 
            title= {this.state.title} /> 
            <button onClick={this.changeTitle}>Changer le nom en dur</button>
            <button onClick={() => this.changeViaParam('Titre via un paramètre')}>Changer le nom du titre via un paramètre</button>
            <button onClick={ this.changeViaBind.bind(this, 'Titre via un Bind') }>Changer le nom du titre via un Bind</button>
            <input type="text" onChange={this.changeViaInput} value={this.state.title} />
        </div>
      );
    }
}

