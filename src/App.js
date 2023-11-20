import React, {useState} from 'react'
import './App.css';
import StartGame from './components/start-game/StartGame';
import GamePlay from './components/GamePlay/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () =>{
    setIsGameStarted(!isGameStarted);
  }
  return (
    <>
      {isGameStarted ? <GamePlay/>: <StartGame toggle = {toggleGame}/>}
    </>
  );
}

export default App;
