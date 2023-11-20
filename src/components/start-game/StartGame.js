import React from 'react'
import style from './StartGame.module.css'
import homeImg from '../../assets/dices.png'

function StartGame({toggle}) {
  return (
      <div className={style.start_game} >
        <img src = {homeImg} alt = 'home'/>
        <div>
          <h1>DICE GAME</h1>
          <button onClick={toggle}>Play Now</button>
        </div>
      </div>
  )
}

export default StartGame
