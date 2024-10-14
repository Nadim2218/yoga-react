import React from 'react'
import "./Button.css";

const Buttons = ({buttontext}) => {
  return (
    <button className='signin-btn'>{buttontext}</button>
  )
}

export default Buttons