import { Mail } from 'lucide-react'
import React from 'react'
import HeroImage from '../assets/HeroLogo.png'


const Hero = () => {
    return (
        <div id='home'>
            <div className='max-w-7xl h-[650px] p-6 md:p-0 mx-auto grid md:grid-cols-2 gap-6 md:gap-0 place-items-center'>
                {/*Text section */}
                <div className='md:space-y-7 space-y-4'>
                    <h1 className='md:text-7xl text-4xl font-bold drop-shadow-sm'>Lorem ipsum <br />
                        <span className='text-[#008080]'>Dolor</span> sit amet</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur <br />
                        adipisicing elit. Veniam rerum, cumque doloribus <br />
                        neque quaerat ullam quae unde.</p>
                    <div className='flex md:gap-4 gap-2 items-center'>
                        <div className='flex items-center md:gap-5 gap-2 shadow px-4 py-2'>
                            <Mail className='text-gray-500' />
                            <input type="text" placeholder='Your email address' className='w-[150px] md:w-[250px]' />
                        </div>
                        <button className='bg-[#008080] text-white px-4 py-2 rounded-sm hover:bg-[#004d40] transition duration-200 ease-in-out'>Get Started</button>
                    </div>
                </div>
                {/* image section */}
                <div>
                    <img src={HeroImage} alt="" className='w-[600px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero