import React from "react";

const Car = ({children, color}) => {

    // console.log(props);

        return(
            <div style={ {backgroundColor: 'pink', width: "400px", padding: "10px", margin: "5px auto"} }>
                <p>Marque : {children} </p>
                <p>Couleur : {color ? color :"Néant" } </p>
            </div>
        )
}

export default Car;