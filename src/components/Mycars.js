import React, {Component} from "react";
import {Car} from "./Cars";
import {Wrapper} from "./Wrapper";
import {MyHeader} from "./MyHeader";

export class Mycars extends Component {

        // Function noCopy sur le <p>
        noCopy = () => {
            alert('Merci de ne pas copier le texte');
        }

        // Function Mose Hover sur le <h1>
        addStyle = (e) => {
            // console.log(e.target);
            if (e.target.classList.contains('styled') ) {
                e.target.classList.remove('styled');
            } else{
                e.target.classList.add('styled');
            }
        }


        // Props & State
        state = {
            cars: ["Ford", "Mercedes", "Renault" ]
          }

    render() {    

        return (
            <div>
                {/* <Wrapper>  
                    <MyHeader 
                        title={this.props.titre} 
                        color={this.props.color} > 
                        {this.props.title}                          
                    </MyHeader>
                </Wrapper> */}
                <h1 onMouseOver={this.addStyle}> {this.props.title}</h1>
                <p onCopy={this.noCopy}> Je suis le texte ou j'affiche une alerte ou je demande de ne pas copier le texte  </p>
                <Car car={this.state.cars[0]} color="Rouge"> </Car>  
                <Car car={this.state.cars[1]}>    </Car>  
                <Car car={this.state.cars[2]} color="Grise">      </Car>  
            </div>
        ) 
    }
}

