import React, {Component} from "react";
import {Car} from "./Cars";

export class Mycars extends Component {

    state = {
        titre: 'Mon Catalogue Voitures',
        voitures:[
            {name:'Ford', color:'red', year: 2000},
            {name:'Mercedes', color:'black', year: 2010},
            {name:'Peugeot', color:'green', year: 2018},
        ]
    }
    // Fonction pour ajouter ans à l'age du véhicule
    addTeenYears = (e) => {
        const updatedState = this.state.voitures.map((param) =>{
            return param.year -= 10
        });
        this.setState({
            updatedState
        })        
    }    

    render() {
        // Fonction pour récupérer l'année actuelle
        const yearActuelle = new Date().getFullYear();
        return (
            <div>
                <h1>{this.state.titre}</h1> 
                <button onClick={this.addTeenYears}> + 10 ans </button>              

                {
                    this.state.voitures.map((voiture, index) =>{
                        return(
                            <div key={index} >
                                <Car nom={voiture.name} color={voiture.color} year={ yearActuelle - voiture.year + ' ans'}/> 
                            </div> 
                        )
                    })
                }
            </div>           
        )
    }
}

