import React from "react";

export const Car = ({color, car}) => {

        return(
            <div style={ {backgroundColor: 'pink', width: "400px", padding: "10px", margin: "5px auto"} }>
                <p>Marque : {car} </p>
                <p>Couleur : {color ? color :"Néant" } </p>
            </div>
        )
}

