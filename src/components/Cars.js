import React from "react";
import {Wrapper} from "./Wrapper";

export const Car = ({color, car}) => {

        return(
            <Wrapper>
                <p>Marque : {car} </p>
                <p>Couleur : {color ? color :"Néant" } </p>
            </Wrapper>           
        )
}

