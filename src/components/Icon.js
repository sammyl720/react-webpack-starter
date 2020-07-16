import React from 'react'
import '../assets/css/icon.css'
import mickey from '../assets/images/mickey.gif'
const Icon = () => {
  return (
    <div className='icon-wrapper'>
      <img className='icon' src={mickey} />
    </div>
  )
}

export default Icon