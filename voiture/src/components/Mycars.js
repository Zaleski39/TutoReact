import React, {Component} from "react";
import {Car} from "./Cars";

export class Mycars extends Component {

        // Props & State
        state = {
            cars: ["Ford", "Mercedes", "Renault" ]
          }

    render() {    

        return (
            <div>
                <h1 style={ { color:this.props.color } }> {this.props.title} </h1>  
                <Car car={this.state.cars[0]} color="Rouge"> </Car>  
                <Car car={this.state.cars[1]}>    </Car>  
                <Car car={this.state.cars[2]} color="Grise">      </Car>  
            </div>
        ) 
    }
}