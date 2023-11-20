import React,{useState} from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

function GamePlay() {
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [diceNumber,setDiceNumber] = useState(1);
  const [error,setErrorState] = useState(false);

  function postRollledWork(){
    if(selectedNumber == undefined){
      setErrorState(true);
      return;
    }
    setErrorState(false);
    setSelectedNumber(undefined);
    if(diceNumber == selectedNumber?.val){
      setTotalScore(totalScore + diceNumber);
    }
    else{
      setTotalScore(totalScore - 2);
    }
  }

  return (
    <div>
      <Header
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        error={error}
        setErrorState={setErrorState}
      />
      <Main
        diceNumber={diceNumber}
        setDiceNumber={setDiceNumber}
        postRollledWork={postRollledWork}
        error={error}
        setTotalScore = {setTotalScore}
      />
    </div>
  )
}

export default GamePlay
