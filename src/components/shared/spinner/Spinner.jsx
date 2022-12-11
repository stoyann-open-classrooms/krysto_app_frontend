import React from 'react'
import Dots from '../../../assets/dots.gif'
import './spinner.css'
function Spinner() {
  return (
    <div className='loadingSpinnerContainer'>
        <img src={Dots} alt="" />
    </div>
  )
}

export default Spinner