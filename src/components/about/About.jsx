import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt='about image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 months internship</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>200+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto molestiae odio sequi unde id ex, a nihil itaque neque fugiat? Laboriosam officia magni totam quas quis qui illo ad.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
