import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handlSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer ==='X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        
        <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquare ={handlSelectSquare} activePlayerSymbol ={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
//Basic markup which does not need to have any state or props can go in the index.html file. 
//Hence, not all content must go in the components.

/**
 * The public folder is made available to the users in the same way the index.html file is and hence we don't need to pass
 * the full path to those files(the code is in index.html file)
 * Which Folder Should You Use?
 * You should use the public/ folder for any images that should not be handled by the build process 
 * and that should be generally available. Good candidates are images used directly in the index.html file or favicons.
 * On the other hand, images that are used inside of components should typically be stored in the src/ folder (e.g., in src/assets/).
*/

