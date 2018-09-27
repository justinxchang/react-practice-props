import React from 'react';
import './userInput.css';


//export default function ({handleNameInput1, handleImageInput1, createPokemon1}) { 
    //if you do it this way, you don't have to put props in front of the methods below

export default function (props) {
    return (
        <div className="user-input--component">

            <input type="text" 
                   onChange={props.handleNameInput1} 
                //    handleNameInput2={props.handleNameInput1}
                   placeholder="name">
            </input>

            <input type="text" 
                   onChange={props.handleImageInput1}
                //    handleImageInput2={props.handleImageInput1}
                   placeholder="image_url">
            </input>

            <button onClick={props.createPokemon1}>submit</button>
        </div>
    )
}