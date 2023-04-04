import React from 'react'
import Projectitem from './Projectitem'
import caviarlife from '../assets/images/caviarlife.png'
import hoobank from '../assets/images/hoobank.png'
import myclick from '../assets/images/myclick.png'
import pml from '../assets/images/pml.png'
import travel from '../assets/images/travel.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#fbaebd]'>Projects</h1>
      <p className='text-center py-8'>The projects listed below are just a few examples of the diverse range of projects that I have been developing for clients and personal growth. I have worked on various projects ranging from website development, mobile app development, and e-commerce solutions, to content creation and social media management. Each project has presented unique challenges and opportunities for growth, allowing me to expand my skillset and gain valuable experience. Through my work, I have learned to be adaptable and flexible in my approach, always striving to deliver the best possible results for my clients. I am passionate about using technology and creativity to bring ideas to life and make a positive impact in the world.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectitem img={caviarlife} title='CaviarLife App'/>
        <Projectitem img={hoobank} title='HooBank App'/>
        <Projectitem img={myclick} title='MyClick App'/>
        <Projectitem img={pml} title='PreferredRealtor App'/>
        <Projectitem img={travel} title='Travel App'/>
      </div>
    </div>
  )
}

export default Projects
