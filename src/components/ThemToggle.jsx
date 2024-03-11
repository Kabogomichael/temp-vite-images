import React from 'react'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'
import { useGlobalContext } from '../assets/context'

const ThemToggle = () => {
    const {isDarkTheme, toggleDarkTheme} =useGlobalContext()
  return <section className='toggle-container'>
<button className='dark-toggle' onClick={toggleDarkTheme}>
    {isDarkTheme?(
       <BsFillMoonFill className='toggle-icon' /> 
    ):(
    <BsFillSunFill className='toggle-icon' />
    )}



</button>
  </section>
}

export default ThemToggle