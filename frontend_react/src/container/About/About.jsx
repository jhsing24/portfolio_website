import React from 'react'
import {motion} from 'framer-motion'
import images from '../../constants/images'
import {AppWrap} from '../../wrapper'
//import { urlFor, client } from '../../client'
//import {useState, useEffect} from 'react'

import './About.scss'
 
const abouts = [
  {title: 'Frontend Development', description: 'I have had experience creating responsive websites using various frameworks and software.', imgUrl: images.about01},
  {title: 'Web Design', description: 'I have an eye for design and can create assets that help accentuate a website.', imgUrl: images.about02},
  {title: 'UI/UX', description: 'I pay close attention to usability and accessibility of websites, and I always aim to improve user experience.', imgUrl: images.about03},
]
const About = () => {
  /*const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);*/
  
  return (
    <>
    <h2 className='head-text'>I know that
      <span> Good Design </span>
      means
      <span> Good Business </span>
    </h2>

    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div 
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className='app__profile-item'
        key={about.title + index}>
          <img src={about.imgUrl} alt='about.title'/>
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(About, 'about')