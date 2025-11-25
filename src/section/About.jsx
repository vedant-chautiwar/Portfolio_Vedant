import React from 'react'
import { Navbar } from '../components/Navbar'
import {Typewriter} from "react-simple-typewriter"
import pfp from "../assets/pfp.jpg";
import resume from"../assets/resume.pdf";

export const About = () => {

  const dResume = () =>{

  }

  return (
    <>
    <Navbar/>
    <div className="mt-24 w-full flex flex-col md:flex-row gap-10 p-4">
        <div className='flex flex-col gap-10 text-center md:text-left h-auto p-2'>
          <h1 className='text-4xl text-white font-medium'>Hello, myself <span className='font-bold text-5xl text-yellow-300'>Vedant</span> !</h1> 
          <span className='text-blue-300 text-3xl'>
            <Typewriter 
              words = {["Web Developer", "App Developer", "DSA Enthusiast"]}
              loop = {0}
              cursor
              cursorStyle = "|"
              typeSpeed = {150}
              deleteSpeed = {200}
              delaySpeed = {1000} 
            />
          </span>
          <p className='text-gray-400 text-lg leading-relaxed'>
            Hi, I’m Vedant someone who genuinely enjoys creating things through code. I love building websites, exploring app development, and sharpening my logic through DSA problem-solving. I’m always curious about how things work under the hood, and I enjoy turning ideas into smooth, functional digital experiences.
            Outside the tech world, I’m a huge sports lover. I follow and play cricket, football, and lawn tennis sports that keep me energetic, competitive, and disciplined. I’m also a big foodie who loves trying new dishes, exploring cafés, and discovering different flavors. Whether it’s writing code, playing sports, or enjoying good food, I’m always excited to learn, explore, and grow a little more every day.
          </p>
        </div>
        <div className='flex items-center justify-center md:items-end'>
          <img src={pfp} alt="" className='rounded-2xl object-cover shadow-lg'/>
        </div>
    </div>
    <div className='p-4 mt-5 flex flex-col gap-3 md'>
      <h1 className='text-4xl text-center md:text-left font-bold text-pink-500'>
        Skills
      </h1>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-3 text-center'>
        <div className='flex gap-2 justify-center items-center md:w-[200px] p-2 text-white border-2 rounded-4xl hover:bg-linear-to-tr from-red-900 to-red-600 transition-colors duration-300 hover:cursor-pointer'>
          <i class="fa-brands fa-html5"></i>
          HTML
        </div>
        <div className='flex gap-2 justify-center items-center md:w-[200px] p-2 text-white border-2 rounded-4xl hover:bg-linear-to-tr from-red-900 to-red-600 transition-colors duration-300 hover:cursor-pointer'>
          <i class="fa-brands fa-css"></i>
          CSS
        </div>
        <div className='flex gap-2 justify-center items-center md:w-[200px] p-2 text-white border-2 rounded-4xl hover:bg-linear-to-tr from-red-900 to-red-600 transition-colors duration-300 hover:cursor-pointer'>
          <i class="fa-brands fa-js"></i>
          Javascript
        </div>
        <div className='flex gap-2 justify-center items-center md:w-[200px] p-2 text-white border-2 rounded-4xl hover:bg-linear-to-tr from-red-900 to-red-600 transition-colors duration-300 hover:cursor-pointer'>
          <i class="fa-brands fa-react"></i>
          React
        </div>
        <div className='flex gap-2 justify-center items-center md:w-[200px] p-2 text-white border-2 rounded-4xl hover:bg-linear-to-tr from-red-900 to-red-600 transition-colors duration-300 hover:cursor-pointer'>
          <i class="fa-brands fa-java"></i>
          Java
        </div>
        <div className='flex gap-2 justify-center items-center md:w-[200px] p-2 text-white border-2 rounded-4xl hover:bg-linear-to-tr from-red-900 to-red-600 transition-colors duration-300 hover:cursor-pointer'>
          <i class="fa-brands fa-python"></i>
          Python
        </div>
      </div>
    </div>
    <div className='mb-10 mt-5 p-4 flex justify-center md:justify-start'>
      <a href={resume} download="Vedant_Resume.pdf" className='text-white bg-blue-700 p-3 rounded-4xl hover:cursor-pointer hover:bg-linear-to-tr from-blue-600 to to-blue-400'>
        Download Resume
      </a>
    </div>
    </>
  )
}
