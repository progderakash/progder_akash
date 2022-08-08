import React from 'react'
import './header.css'
import CTA from '../CTA'
import ME from '../../assets/IMG_20210123_080439.jpg'
import HeaderSocials from './headerSocials'

const header = () => {
    return ( 
      <header id = "home" >
        <div className = "container header_container" >
        <h5 > Hello I'm</h5>
         <h1 > Akash Verma </h1> 
         <h5 className = "text-light" > Final Year Student </h5> 
         <CTA / >
        <HeaderSocials/>
        <div className = 'me' >
        <img src = { ME } alt = "me"/>
        </div> 
        <a href = "#contact"className = 'scroll_down'> Scroll Down </a>

        </div> 
        </header>
    )
}

export default header