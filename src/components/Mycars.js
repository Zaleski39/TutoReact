import React, {Component} from "react";
import {Car} from "./Cars";

export class Mycars extends Component {

    state = {
        titre: 'Mon Catalogue Voitures',
        voitures:[
            {name:'Ford', color:'red', year: 2023},
            {name:'Mercedes', color:'black', year: 2022},
            {name:'Peugeot', color:'green', year: 2019},
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

    getAge = (year) => {
        const now = new Date().getFullYear();
        const age = now - year;

        // ans, an
        let frenchYeardStr= "";
        if (age === 1) {
            frenchYeardStr = " an";
        } else if (age > 1) {
            frenchYeardStr = " ans";            
        }       
        return `${age} ${frenchYeardStr}`
    }

    render() {

        // const [ford, mercedes,peugeot ] = this.state.voitures;
        // console.log(ford, mercedes,peugeot);

        // Fonction pour récupérer l'année actuelle
        // const yearActuelle = new Date().getFullYear();
        return (
            <div>
                <h1>{this.state.titre}</h1> 
                <button onClick={this.addTeenYears}> + 10 ans </button>                  
                {                
                    this.state.voitures.map(({name, color, year}, index) =>{
                        return(
                            <div key={index} >
                                <Car 
                                    color={color} 
                                    year={this.getAge(year)}
                                >
                                    {name}
                                </Car>
                            </div> 
                        )
                    })                    
                }
            </div>           
        )
    }
}

