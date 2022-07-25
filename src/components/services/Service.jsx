import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Video Editing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='services_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service
