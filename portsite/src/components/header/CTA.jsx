import React from 'react'
import CV from '/Users/tha/coding/projects/psite/portsite/src/assets/01-24ResumeCV1.7.docx.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn btn-primary'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA