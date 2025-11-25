import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <nav className='fixed w-full top-0 flex justify-between items-center p-4 border-black bg-[#1A1A1A] border-b-2 rounded-b-2xl shadow-xl/30'>

      <h1 className='bg-clip-text text-transparent bg-linear-to-r from-orange-600 to-yellow-200 font-bold text-3xl'>Chauti06</h1>

      <div className='text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className='md:hidden size-6' onClick={()=> setVisible(!visible)}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        <div className='hidden md:flex gap-6 text-xl'>
          <Link to="/" onClick={()=> setVisible(false)} className="relative p-1 transition-all duration-200
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:h-[2px] after:w-0 after:bg-blue-300
             after:transition-all after:duration-300
             hover:after:w-full">About</Link>
          <Link to="/project" onClick={()=> setVisible(false)} className="relative p-1 transition-all duration-200
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:h-[2px] after:w-0 after:bg-blue-300
             after:transition-all after:duration-300
             hover:after:w-full">Projects</Link>
          <Link to="/contact" onClick={()=> setVisible(false)} className="relative p-1 transition-all duration-200
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:h-[2px] after:w-0 after:bg-blue-300
             after:transition-all after:duration-300
             hover:after:w-full">Contact</Link>
        </div>

        {
          visible && (
            <div className='absolute right-0 top-15 w-full md:hidden flex flex-col border-b-2 border-black bg-[#1A1A1A] justify-center items-center gap-3 z-10 rounded-b-2xl'>
              <Link to="/" className='p-1'>About</Link>
              <Link to="/project" className='p-1'>Projects</Link>
              <Link to="/contact" className='p-1'>Contact</Link>
            </div>
          )
        }

      </div>
    </nav>
  )
}

