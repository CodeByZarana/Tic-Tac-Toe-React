import { useState } from "react"
export default function Player({initialName, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false);

    const [playerName, setPlayerName] = useState(initialName);
    //getting the name through the input field and setting it to the output
    function handleChange(event){
            setPlayerName(event.target.value);
    }
    //If isEditing is true, which means we are editing the player details.
    //Upgrade UI if Edit button is pressed. Using State

    function handleEditClick(){
        setIsEditing(editing => !editing);
    }
    //Changing state based on the previous value of the state, should pass
    //a function to the state
    let editablePlayerName = <span id="player-name">{playerName}</span>;
    let buttonCaption = 'Edit';
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        buttonCaption = 'Save'
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span id="player">
                {editablePlayerName}
                <span id="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    )
}
/**
 * In JavaScript, when using arrow functions, if you enclose the body of the function with 
 * curly brackets {}, you are defining a function with a block body. 
 * In a block body, you must explicitly return a value using the return statement. 
 * If you don’t include the return statement, the function will not return anything, 
 * and thus it will return undefined.
 */