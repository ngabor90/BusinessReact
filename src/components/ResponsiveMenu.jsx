import React from 'react';
import { Link } from 'react-scroll';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {

    const closeMenu = () => setShowMenu(false);

    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-green-50 px-8 pb-6 pt-16 md:hidden rounded-r-xl shadow-md transition-all`}>
            <div>
                <h1 className='font-bold text-xl text-center'>React Business Site</h1>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-9 items-center text-md font-semibold text-gray-800'>
                        <li>
                            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="expertise" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]" onClick={closeMenu}>Expertise</Link>
                        </li>
                        <li>
                            <Link to="service" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]" onClick={closeMenu}>Service</Link>
                        </li>
                        <li>
                            <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]" onClick={closeMenu}>Testimonials</Link>
                        </li>
                        <li>
                            <Link to="cta" smooth={true} duration={500} className="cursor-pointer hover:text-[#008080]" onClick={closeMenu}>START NOW!</Link>
                        </li>
                        <button className='text-[#008080] hover:text-[#004d40] transition duration-200 ease-in-out'>Sign in</button>
                        <button className='bg-[#008080] text-white px-4 py-2 rounded-sm hover:bg-[#004d40] transition duration-200 ease-in-out'>Get Started</button>
                    </ul>
                </nav>
            </div>
            <div>
                <h1>React Business Site 2025 - Németh Gábor</h1>
            </div>
        </div>
    );
}

export default ResponsiveMenu;
