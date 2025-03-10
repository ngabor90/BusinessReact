import React from 'react'
import graduation from "../assets/graduation.png"
import shield from "../assets/shield.png"
import apps from "../assets/apps.png"

const Team = () => {
    return (
        <div className='my-20'>
            <div className='max-w-7xl mx-auto p-6 md:p-0'>
                <h1 className='text-3xl md:text-4xl font-bold'>Our Team Provides Valuable Services at <br />
                    Any Time in Any Situation</h1>
                <div className='grid md:grid-cols-3 my-10 md:my-20 gap-10 md:gap-20'>
                    <div className='space-y-4 pr-10'>
                        <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#DAFAFC]'>
                            <img src={graduation} alt="" />
                        </div>
                        <h1 className='font-bold text-xl'>Expert Guidance</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae reprehenderit impedit assumenda obcaecati soluta consequuntur.</p>
                        <button className='text-[#008080] hover:text-[#080080]'>Read More</button>
                    </div>
                    <div className='space-y-4 pr-10'>
                        <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#FDE4E4]'>
                            <img src={shield} alt="" />
                        </div>
                        <h1 className='font-bold text-xl'>Risk Management</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias, recusandae corporis voluptas nihil neque dolor.</p>
                        <button className='text-[#008080] hover:text-[#080080]'>Read More</button>
                    </div>
                    <div className='space-y-4 pr-10'>
                        <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#DAFCDF]'>
                            <img src={apps} alt="" />
                        </div>
                        <h1 className='font-bold text-xl'>Customized Solutions</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sequi minima porro dolore, ipsam error natus?</p>
                        <button className='text-[#008080] hover:text-[#080080]'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team