import './about.css'
import React from 'react'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

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
              <small>5+ years coding</small>
            </article>

            <article className="about_card">
              <FiUser className='about_icon' />
              <h5>Clients</h5>
              <small>0 Clients</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>5+ completed projects</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum, non nemo enim totam perspiciatis possimus harum quaerat dolor, doloremque modi fuga id. Alias architecto aliquam dolores, perspiciatis dignissimos hic.</p>
          <a href="" className="btn">Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About