import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>MY SKILLS</h2>
       <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>HTML</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>CSS</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">Proficient</small>
              </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Bootstrap</h4>
                <small className="text-light">Competent</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Tailwind</h4>
                <small className="text-light">Competent</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Bulma</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>React</h4>
                <small className="text-light">Competent</small></div>
                
              </article>

            </div>
            </div>
            
{/*Backend development */}
            <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Node JS</h4>
                <small className="text-light">Competent</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
               <div> <h4>MongoDB</h4>
                <small className="text-light">Competent</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>PHP</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>MySQL</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Python</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Firebase</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              

            </div>

        </div>
       
                   
{/*Android development */}
            <div className="experience_android">
          <h3>Android Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Kotlin</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
               <div> <h4>Flutter</h4>
                <small className="text-light">Competent</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>Dart</h4>
                <small className="text-light">Competent</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>XML</h4>
                <small className="text-light">Proficient</small></div>
              </article>
            
              

            </div>

        </div>
         {/*Others */}

         <div className="experience_backend">
          <h3>Others</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div><h4>C</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
               <div> <h4>C++</h4>
                <small className="text-light">Proficient</small></div>
              </article>
              

            </div>

        </div>


       
       </div>
      
       
     

  
    </section>
  )
}

export default experience