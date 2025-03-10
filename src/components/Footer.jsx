import React from 'react'
import facebook from "../assets/Frame 1.png"
import twitter from "../assets/Frame 2.png"
import instagram from "../assets/Frame 3.png"


const Footer = () => {
  return (
    <div className='bg-[#008080] p-6 md:p-20' id='contact'>
      <div className='max-w-7xl mx-auto text-white'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-0 md:mb-16 mb-10'>
          {/* column 1 */}
          <div className='space-y-7'>
            <h1 className='font-bold text-2xl'>Business Site</h1>
            <p>Our expert financial consultants provide solutions to help you achieve financial wealth. Trust us to guide you toward a brighter financial future.</p>
            <div className='flex gap-7'>
              <div className='flex gap-3'>
                <img src={facebook} alt="" />
                <p className='hidden md:block'>Facebook</p>
              </div>
              <div className='flex gap-3'>
                <img src={twitter} alt="" />
                <p className='hidden md:block'>Twitter</p>
              </div>
              <div className='flex gap-3'>
                <img src={instagram} alt="" />
                <p className='hidden md:block'>Instagram</p>
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className='space-y-5 md:pl-28'>
            <h1 className='font-bold text-xl'>Our Services</h1>
            <p>Insurance Planning</p>
            <p>Estate Planning</p>
            <p>Tax Optimization</p>
            <p>Debt Management</p>
          </div>
          {/* column 3 */}
          <div className='space-y-5 md:pl-28'>
            <h1 className='font-bold text-xl'>Explore More</h1>
            <p>About us</p>
            <p>Blog</p>
            <p>Sitemap</p>
            <p>Privacy</p>
          </div>
          {/* column 4 */}
          <div className='space-y-5 md:pl-28'>
            <h1 className='font-bold text-xl'>Contact Details</h1>
            <p>contact@business.com</p>
            <p>+36 (30) 123-4567</p>
          </div>
        </div>
        <hr />
        <div className='mt-5 flex justify-between text-center'>
          <p>Németh Gábor 2025 React Business Site</p>
          <div className='flex gap-4 md:gap-7'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer