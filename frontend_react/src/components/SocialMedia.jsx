import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'



const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/jeromehsing' target="_blank" rel="noreferrer"><FaLinkedinIn /> </a>
        </div>
        <div>
           <a href='https://www.github.com/jhsing24' target="_blank" rel="noreferrer"> <FaGithub /> </a>
        </div>
    </div>
  )
}

export default SocialMedia