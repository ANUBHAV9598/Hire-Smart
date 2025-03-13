import React, { useState } from 'react';
import Dropdown from './ui/Dropdown';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='w-full h-16 bg-[#F5DEB3] flex items-center justify-between px-4 md:px-8'>
            {/* Logo Section */}
            <div className='flex items-center gap-3'>
                <img className='object-cover rounded-full h-14 w-14' src={logo} alt="logo" />
                <h1 className='text-xl font-bold md:text-2xl'>Hire Smart</h1>
            </div>

            {/* Desktop Navigation */}
            <div className='items-center hidden gap-6 md:flex'>
                <Dropdown />
                <Link className='text-black transition hover:text-gray-700'>How it Works</Link>
                <Link className='text-black transition hover:text-gray-700'>Find Workers</Link>
                <Link className='text-black transition hover:text-gray-700'>Post a Job</Link>
            </div>

            {/* Authentication & CTA */}
            <div className='hidden gap-4 md:flex'>
                <Link className='px-4 py-2 text-black transition hover:underline'>Sign In</Link>
                <Link className='bg-[#009963] text-white px-4 py-2 rounded-md hover:bg-[#007a4a] transition'>Hire Now</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>

            {/* Mobile Dropdown Menu */}
            <div 
                className={`absolute top-16 left-0 w-full bg-[#F5DEB3] flex flex-col items-center gap-4 py-4 shadow-md transition-all duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} md:hidden`}
            >
                <Dropdown />
                <Link className='text-black transition hover:text-gray-700' onClick={() => setMenuOpen(false)}>How it Works</Link>
                <Link className='text-black transition hover:text-gray-700' onClick={() => setMenuOpen(false)}>Find Workers</Link>
                <Link className='text-black transition hover:text-gray-700' onClick={() => setMenuOpen(false)}>Post a Job</Link>
                <Link className='px-4 py-2 text-black transition hover:underline' onClick={() => setMenuOpen(false)}>Sign In</Link>
                <Link className='bg-[#009963] text-white px-4 py-2 rounded-md hover:bg-[#007a4a] transition' onClick={() => setMenuOpen(false)}>Hire Now</Link>
            </div>
        </div>
    );
};

export default Navbar;
