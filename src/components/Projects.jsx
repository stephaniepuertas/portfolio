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
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aliquam vitae ut unde eius, itaque ratione quaerat quae fugiat minima beatae. Placeat dolor optio corporis ipsum suscipit nisi recusandae culpa.</p>
      <div className='grid sm:grid-col-2 gap-12'>
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
