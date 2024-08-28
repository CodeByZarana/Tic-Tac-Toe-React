import { useState } from "react"

const initialGameBoard = [
    [null, null, null] ,
    [null, null, null] ,
    [null, null, null] ,
]

export default function GameBoard({activePlayerSymbol, onSelectSquare}){
    const [gameBoard, setGameBoard] = useState(initialGameBoard); //manage and update the game board
    
    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard)=> {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }
    
    return(
       <ol id = "game-board">
        {gameBoard.map((row, rowIndex)=> <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={ () => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}
                    </button></li>)}
            </ol>
        </li>)}
        
        </ol>
    )
}