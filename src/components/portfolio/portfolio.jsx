import React from 'react'
import './portfolio.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h2>MY EDUCATION</h2>
      <div className="container education_container">
            
            <div className="education_college">
                <h3>Bachelors in CSE</h3>
                <h4>Shri Ram Murti Smarak College Of Engineering & Technology, Bareilly  </h4>
                <h5>2019-present</h5>
                <h2>70%</h2>
                <div className="education_content">
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>1<sup>st</sup> Year</h4>
                            <small className="text-light">85%</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>2<sup>nd</sup> Year</h4>
                            <small className="text-light">--%</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>3<sup>rd</sup> Year</h4>
                            <small className="text-light">--%</small>
                          </div>
                    </article>
                </div>
            </div>


{/*class-12th*/ }
<div className="education_college">
                <h3>Intermediate</h3>
                <h4>KV NER, Bareilly  </h4>
                <h5>2017-2019</h5>
                <h2>85%</h2>
                <div className="education_content">
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Computer Science</h4>
                            <small className="text-light">97</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Chemistry</h4>
                            <small className="text-light">85</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>English</h4>
                            <small className="text-light">83</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Mathematics</h4>
                            <small className="text-light">81</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Physics</h4>
                            <small className="text-light">79</small>
                          </div>
                    </article>
                </div>
            </div>


            {/*class-10th*/ }
<div className="education_college">
                <h3>High School</h3>
                <h4>MDJV, Jaunpur  </h4>
                <h5>2015-2017</h5>
                <h2 >8.0 CGPA</h2>
                <div className="education_content">
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Computer Science</h4>
                            <small className="text-light">9.0 CGPA</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Science</h4>
                            <small className="text-light">8.0 CGPA</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>English</h4>
                            <small className="text-light">8.0 CGPA</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Mathematics</h4>
                            <small className="text-light">8.0 CGPA</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Hindi</h4>
                            <small className="text-light">8.0 CGPA</small>
                          </div>
                    </article>
                    <article className="education_details">
                          <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>Social Science</h4>
                            <small className="text-light">8.0 CGPA</small>
                          </div>
                    </article>
                </div>
            </div>



            

      </div>   
      
      
    
    </section>
  )
}

export default portfolio