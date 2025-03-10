import React from 'react'
import amazon from "../assets/amazon.png"
import airbnb from "../assets/airbnb.png"
import fedex from "../assets/fedex.png"
import ripple from "../assets/ripple.png"
import stripe from "../assets/stripe.png"
import walmart from "../assets/walmart.png"

const Companies = () => {
    return (
        <div className='mt-20 p-6 md:p-0'>
            <div className='max-w-7xl mx-auto flex flex-wrap items-center gap-4 md:gap-0 md:grid
            md:grid-cols-6 grayscale-100'>
                <img src={amazon} alt="" className='w-[100px] md:w-[150px]' />
                <img src={airbnb} alt="" className='w-[100px] md:w-[150px]' />
                <img src={fedex} alt="" className='w-[100px] md:w-[150px]' />
                <img src={ripple} alt="" className='w-[100px] md:w-[150px]' />
                <img src={stripe} alt="" className='w-[100px] md:w-[150px]' />
                <img src={walmart} alt="" className='w-[100px] md:w-[150px]' />
            </div>
        </div>
    )
}

export default Companies