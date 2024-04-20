import {logo} from '../amit.json';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home',link:'/' },
    { id: 2, text: 'About' ,link:'#about' },
    { id: 3, text: 'Skills',link:'#skills'  },
    { id: 4, text: 'Projects',link:'#project'  },
    { id: 5, text: 'Blogs',link:'#blog'  },
  ];

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className=' w-5 sm:w-12 text-3xl font-bold text-[#00df9a] '><img src={logo} className="object-contain" alt="logo"/></h1>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-black'
          >
             <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className='text-black'/> : <AiOutlineMenu size={20} className='text-black' />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-background  ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className=' w-5 sm:w-12 text-3xl font-bold text-[#00df9a] '><img src={logo} className="object-contain" alt="logo"/></h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4  rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer  text-black'
            onClick={handleNav}
          >
             <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;