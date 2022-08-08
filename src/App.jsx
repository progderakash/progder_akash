import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/About/About'
import Experience from './components/experience/experience'

import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
   <Header/>
    <Nav/>
    <About/>
    <Experience/>
    
    <Portfolio/>
    
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App