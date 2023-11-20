import React from 'react'
import style from './Button.module.css'

function CustomButton({val, setNumber, selectedNumber,resetScore,showRules}) {
  return (
    <button onClick={() => setNumber({val})} className={selectedNumber?.val == val ? style.select : style.unselect}>
        {val}
    </button>
  )
}

export default CustomButton
