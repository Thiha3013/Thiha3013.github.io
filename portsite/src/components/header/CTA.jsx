import React from 'react'
import CV from '../../assets/cv.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn btn-primary'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA