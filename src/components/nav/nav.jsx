import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import{useState} from 'react'
const nav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
    
    <a href="#"className={activeNav==='#'? 'active': ''} onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active': ''} ><AiOutlineUser/></a>
    <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active': ''}  ><BiBook/></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'? 'active': ''} ><RiServiceLine/></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''} ><BiMessageDetail/></a>

      </nav>
  )
}

export default nav