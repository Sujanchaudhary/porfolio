import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaFacebook } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='-blank'><BsLinkedin/></a>
      <a href='https://github.com' target='-blank'><FaGithub/></a>
      <a href='https://facebook.com' target='-blank'><FaFacebook/> </a>
    </div>
  )
}

export default HeaderSocials
