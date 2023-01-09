export const Welcome = () => {
    const bonjour = () => console.log("Bonjour");
    const bonsoir = (param) => console.log(param);
    return(
        <div>
            {/* Invoquer une fonction "bonjour" qui affichera console.log('Bonjour') */}
            <button onClick={() => bonjour()}>Invoquer une fonction</button>

            {/* Invoquer une fonction "bonsoir" avec un argument "Bonsoir" et l'afficher dans console.log('Bonsoir')   */}
            <button onClick={() => bonsoir("Bonsoir")}>Invoquer une fonction</button>

            {/* Lancer la console.log ("Bonne nuit") après le click sans invoquer de fonction */}
            <button onClick={() => console.log("Bonne nuit")}>ConsoleLog sur le bouton</button>
        </div>
    )
}
