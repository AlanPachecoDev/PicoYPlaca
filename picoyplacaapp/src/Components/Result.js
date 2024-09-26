import React from "react";

//Styles
import '../Styles/Result.css';

import * as functions from '../Functions/PredictorFunctions';

function ResultOfPredictor(props){

    const handleDisplay = () =>{
        props.setDisplay("none");
    }


    return(
        <div id="resultContainer">
            <input type="button" id="resultButton" value="X" onClick={handleDisplay}></input>
            <h3>{props.plate.toUpperCase()}</h3>
            <h4>{props.day} | {props.hour}</h4>
            <div id="restultTextContainer">
                <p>{functions.predictPlate(props.plate, props.day, props.hour)}</p>
            </div>
        </div>

    );

}


export default ResultOfPredictor;