import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav((prev)=> !prev) ;
        console.log('state changed')
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                // if nav is tru 
                nav ? (
                    //show this code 
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-'>
                            <AiOutlineHome size={20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                    </div>
                )
                :(
                    //if not true then show this code
                    <div></div>
                )
            }
        </div>
    )
}

export default Sidenav
