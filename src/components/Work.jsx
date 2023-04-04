import React from 'react'
import Workitem from './Workitem'
import { data } from '../constants/index'

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#fbaebd] mb-5'>Work</h1>
            {data.map((item, idx)=>(
                <Workitem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration}
                details={item.details}/>

            ))}

        </div>
    )
}

export default Work
