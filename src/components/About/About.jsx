import React from 'react'
import './About.css'
import ME from '../../assets/IMG-20201123-WA0006.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>
<div className="container about_container">
  <div className="about_me">
    <div className="about_me-image">
      <img src={ME} alt="About Image"/>
    </div>
    
  </div>
  <div className="about_content">
  <div className="about_cards">
   <article className="about_card">
    <FaAward className='about_icon'/>
    <h5>Experience</h5>
      <small>0+ Years Working (Fresher)</small>

   </article>
   <article className="about_card">
    <FiUsers className='about_icon'/>
    <h5>Clients</h5>
      <small>2 Clients</small>

   </article>

<article className="about_card">
    <VscFolderLibrary className='about_icon'/>
    <h5>Projects</h5>
      <small>10+ Completed Projects</small>

   </article>


    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit id aperiam odio consectetur quam est magnam, blanditiis repellendus possimus accusamus in hic placeat. Nisi aperiam minima esse sunt maxime.
    </p>
    <a href="#contact" className="btn btn-primary">Let's Talk</a>
  </div>
  </div>


    </section>
  )
}

export default About