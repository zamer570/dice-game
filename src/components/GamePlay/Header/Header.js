import React, {useState} from 'react'
import CustomButton from '../shared/Button'
import style from './Header.module.css'

function Header({totalScore,setTotalScore,selectedNumber,setSelectedNumber,error,setErrorState}) {
  const arr = [1,2,3,4,5,6];
  

  function setNumber(value){
    setErrorState(false);
    setSelectedNumber(value);
  }

  return (
    <nav className={style.navbar}>
      <div className={style.score_card}>
        <h1>{totalScore}</h1>
        <h3>Total Score</h3>
      </div>
      <div className={style.number_select}>
        {
          error ? 
          <p>You have not selected any number</p> : <></>
        }
        <div>
          {
            arr.map((val,i) => (
              <CustomButton key = {i} val = {val} setNumber = {setNumber} selectedNumber = {selectedNumber}/>
            ))
          }
        </div>
        <h3>Select Number</h3>
      </div>
    </nav>
  )
}

export default Header;
