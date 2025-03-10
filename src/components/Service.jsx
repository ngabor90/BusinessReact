import React from 'react'
import serviceImage from "../assets/service-img.png"
import line from "../assets/line.png"
import finance from "../assets/Finance.png"
import investment from "../assets/Investment.png"
import wealth from "../assets/Wealth.png"
import estate from "../assets/Estate.png"

const Service = () => {
    return (
        <div className='my-20' id='service'>
            <div className='max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center'>
                {/* image section */}
                <div className='bg-[#E0F8F8] rounded-br-4xl rounded-tl-4xl'>
                    <img src={serviceImage} alt="" />
                </div>
                {/* text section */}
                <div className='space-y-7'>
                    <div className='flex gap-5 items-center'>
                        <h3 className='bg-[#e3eeee] text-[#008080] font-bold px-3 py-1'>OUR SERVICE</h3>
                        <img src={line} alt="" />
                    </div>
                    <div className='space-y-7'>
                        <h1 className='md:text-5xl text-3xl font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, voluptatum.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quas accusamus dolore excepturi fugit aperiam facere vitae numquam amet accusantium.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex gap-3 items-center'>
                            <img src={finance} alt="" />
                            <h5 className='font-semibold'>Financial Planning</h5>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={investment} alt="" />
                            <h5 className='font-semibold'>Investment Advisory</h5>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={estate} alt="" />
                            <h5 className='font-semibold'>Estate Planning</h5>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={wealth} alt="" />
                            <h5 className='font-semibold'>Wealth Management</h5>
                        </div>
                    </div>
                    <button className='p-2 border-2 border-gray-400 hover:bg-[#008080] hover:text-white hover:border-transparent transition duration-200 ease-in-out'>
                        Explore Services
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Service