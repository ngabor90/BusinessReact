import React from 'react'
import line from '../assets/line.png'
import ExpertiseImage from "../assets/ExpertiseLogo.png"

const Expertise = () => {
    return (
        <div className='my-20' id='expertise'>
            <div className='max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center'>
                {/* text section */}
                <div className='space-y-7'>
                    <div className="flex gap-5 items-center">
                        <h3 className='bg-[#e3eeee] text-[#008080] font-bold px-3 py-1'>OUR EXPERTISE</h3>
                        <img src={line} alt="" />
                    </div>
                    <div className='space-y-7'>
                        <h1 className='md:text-5xl text-3xl font-bold'>Lorem ipsum Dolor <br />
                            Sit amet consectetur <br />
                            Adipisicing.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae, autem enim quisquam quas esse nisi deleniti libero quaerat doloribus ullam alias vitae earum molestiae maxime. Soluta, similique. Deserunt facere reiciendis expedita minus qui harum.
                        </p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae esse distinctio sint soluta fugiat, labore porro pariatur fugit excepturi repellendus officiis.
                    </div>
                    <button className='p-2 border-2 border-gray-400 hover:bg-[#008080] hover:text-white hover:border-transparent transition duration-200 ease-in-out'>
                        Explore Services
                    </button>

                </div>
                {/* image section */}
                <div className='bg-[#E0F8F8] rounded-br-4xl rounded-tl-4xl'>
                    <img src={ExpertiseImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Expertise