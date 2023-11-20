import React,{useState} from 'react'
import dice_1 from '../../../assets/dice_1.png'
import dice_2 from '../../../assets/dice_2.png'
import dice_3 from '../../../assets/dice_3.png'
import dice_4 from '../../../assets/dice_4.png'
import dice_5 from '../../../assets/dice_5.png'
import dice_6 from '../../../assets/dice_6.png'

import style from './Main.module.css'
import Button from '../shared/Button'

function Main({diceNumber, setDiceNumber,postRollledWork,error,setTotalScore}) {
    const [imageurl, setImageUrl] = useState(dice_1)
    const [rulesShow,setRulesShow] = useState(false);
    
    
    const dice_images ={
        1:dice_1,
        2:dice_2,
        3:dice_3,
        4:dice_4,
        5:dice_5,
        6:dice_6
    };

    function rollDice(){
        //here we should use useEffect as there will be one dice roll for sure
        if(error){
            return;
        }
        setDiceNumber(Math.floor(Math.random() * 6 + 1));
        setImageUrl(dice_images[diceNumber]);
        postRollledWork();
    }

    function showRules(){
        setRulesShow(!rulesShow);
    }

  return (
    <div className={style.main}>
        <div className={style.image}>
            <img src = {imageurl} alt='dice ' onClick={rollDice}/>
        </div>
      <p>Click on Dice to roll</p>
        <div className={style.buttons}>
            <button className={style.reset} onClick={() => setTotalScore(0)}>Reset Score</button>
            <button className={style.rules} onClick={showRules}>Show Rules</button>
        </div>
        {   rulesShow &&
            <div class={style.rulesdiv}>
                <h1>How to play dice game</h1>
                <p>Select any number <br/>Click on dice image <br/>
                after click on  dice  if selected number is 
                equal to dice number you will get same point as dice <br/>
                if you get wrong guess then  2 point will be dedcuted  </p>
            </div>
        }
    </div>
  )
}

export default Main
