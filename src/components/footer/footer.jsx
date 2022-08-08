import React from 'react'
import './footer.css'
import{FaFacebookF} from 'react-icons/fa'
import{FiInstagram,FiMail} from 'react-icons/fi'

const footer = () => {
  return (
   <footer>
    <a href="#" className="footer_logo">&bull;&bull;<u>PROGDER</u>&bull;&bull;</a>
   <ul className="permalinks">
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Skills</a></li>
    <li><a href="#portfolio">Education</a></li>
   

    <li><a href="#contact">Contact</a></li>
   </ul>
   <div className="footer_socials">
    <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
    <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
    <a href="https://gmail.com" target="_blank"><FiMail/></a>
   </div>
   <div className="footer_copyright">
    <small>&copy;PROGDER. All rights reserved.</small>
   </div>

   </footer>
  )
}

export default footer