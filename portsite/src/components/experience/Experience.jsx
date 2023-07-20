import './experience.css'
import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience_container">

        <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small> 
                </div>
              </article>

            </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className='experience_content'>

            <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>MongoDb</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Express JS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                  <h4>Java</h4>
                  <small className='text-light'>Basic</small>
                  </div>
                </article>

              </div>  
        </div>

      </div>
    </section>
    
  )
}

export default Experience