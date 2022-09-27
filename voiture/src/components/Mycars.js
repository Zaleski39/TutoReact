import React, {Component} from "react";
import {Car} from "./Cars";
import {Wrapper} from "./Wrapper";
import {MyHeader} from "./MyHeader";

export class Mycars extends Component {

        // Props & State
        state = {
            cars: ["Ford", "Mercedes", "Renault" ]
          }

    render() {    

        return (
            <div>
                <Wrapper>  
                    <MyHeader title={this.props.titre} color={this.props.color} >                           
                    </MyHeader>
                </Wrapper>
                <Car car={this.state.cars[0]} color="Rouge"> </Car>  
                <Car car={this.state.cars[1]}>    </Car>  
                <Car car={this.state.cars[2]} color="Grise">      </Car>  
            </div>
        ) 
    }
}

