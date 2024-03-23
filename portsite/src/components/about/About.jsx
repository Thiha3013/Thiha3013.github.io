import './about.css'
import React from 'react'
//import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
//import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { PiSoccerBallFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";



const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about_container">
        {/*<div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>*/}
        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <FaAward className='about_icon'></FaAward>
              <h5>Experience</h5>
              <small>6+ years coding</small>
            </article>
            <article className="about_card">
              <PiSoccerBallFill className='about_icon'/>
              <h5>Hobbies</h5>
              <small>Football,  </small>
              <small>DOTA2,  </small>
              <small>Running</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>IV calculator,  </small>
              <small>Sentiment Analyzer,  </small>
              <small>Mummy Maze clone</small>
            </article>
            <article className="about_card">
            <FaUserGraduate className='about_icon'/>
              <h5>Interests</h5>
              <small>Quantative Finance,  </small>
              <small>Data Mining,  </small>
              <small>Machine Learning</small>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About