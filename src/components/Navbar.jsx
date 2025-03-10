import React, { useState } from 'react'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className='py-3'>
            <div className='max-w-7xl mx-auto flex items-center px-6 md:px-0 justify-between'>
                {/* logo */}

                <h1 className='md:text-2xl text-2xl font-bold'>React Business Site</h1>
                {/* menu section  */}
                <nav className='hidden md:block'>
                    <ul className='flex gap-10 items-center text-lg font-semibold text-gray-800'>
                        <li>
                            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]">Home</Link>
                        </li>
                        <li>
                            <Link to="expertise" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]">Expertise</Link>
                        </li>
                        <li>
                            <Link to="service" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]">Service</Link>
                        </li>
                        <li>
                            <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]">Testimonials</Link>
                        </li>
                        <li>
                            <Link to="cta" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]">START NOW!</Link>
                        </li>
                    </ul>
                </nav>
                {/* button section */}
                <div className='hidden md:flex gap-7 items-center'>
                    <button className='text-[#008080] hover:text-[#004d30] transition duration-200 ease-in-out'>Sign in</button>
                    <button className='bg-[#008080] text-white px-4 py-2 rounded-sm hover:bg-[#004d40] transition duration-200 ease-in-out'>Get Started</button>
                </div>
                <div className='md:hidden text-4xl text-[#008080]'>
                    {
                        showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />
                    }
                </div>

            </div>
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
    )
}

export default Navbar