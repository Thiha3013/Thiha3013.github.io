import React from 'react'
import {BsLinkedin}  from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/myat-minn-thiha-8a60b6255/" rel="noopener noreferrer" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Thiha3013" rel="noopener noreferrer" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials