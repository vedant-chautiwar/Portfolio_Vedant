import React from 'react'
import { Navbar } from '../components/Navbar'

export const Projects = () => {
  return (
    <>
    <Navbar/>
    <h1 className='mt-20 text-center text-6xl font-extrabold text-red-600'>Projects</h1>
    <div className='mt-10 p-4 text-center flex flex-col md:grid md:grid-cols-3 gap-4'>
      <div className="flex flex-col border-2 border-purple-500 p-3 gap-3 text-white rounded-2xl shadow-xl">
        <div className='flex flex-col gap-3 text-center'>
          <h1 className='text-2xl font-bold text-yellow-300'>BMI Calculator</h1>
          <p>
            This responsive BMI Calculator, built with HTML, CSS, and JavaScript, lets users enter weight in kilograms or pounds and height in centimeters or inches. It calculates BMI to two decimal places and highlights results with color indicators for underweight, normal, and overweight ranges.
          </p>
        </div>
        <div className="flex justify-between items-center p-2">
          <a href="https://github.com/vedant-chautiwar/bmi_calculator" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Github</a>
          <a href="https://bmi-calculator-chi-drab.vercel.app/" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Live Link</a>
        </div>
      </div>

      <div className="flex flex-col border-2 border-purple-500 p-3 gap-3 text-white rounded-2xl shadow-xl">
        <div className='flex flex-col gap-3 text-center'>
          <h1 className='text-2xl font-bold text-yellow-300'>TicTacToe Game</h1>
          <p>
            This responsive TicTacToe game, built with React, provides a clean, interactive UI that supports touch and keyboard input. Players can play locally against another player, with win detection, draw handling, and smooth animations. The layout seamlessly adapts across mobile, tablet, and desktop screens.
          </p>
        </div>
        <div className="flex justify-between items-center p-2">
          <a href="https://github.com/vedant-chautiwar/TicTacToe" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Github</a>
          <a href="https://tic-tac-toe-nine-umber-79.vercel.app/" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Live Link</a>
        </div>
      </div>

      <div className="flex flex-col border-2 border-purple-500 p-3 gap-3 text-white rounded-2xl shadow-xl">
        <div className='flex flex-col gap-3 text-center'>
          <h1 className='text-2xl font-bold text-yellow-300'>TurfZone</h1>
          <p>
            This responsive frontend website, named TurfZone, was built using React for a hackathon project. It features a clean single-page layout showcasing essential sections and interactive UI elements. The site is fully frontend-based and adapts seamlessly across mobile, tablet, and desktop screens.
          </p>
        </div>
        <div className="flex justify-between items-center p-2">
          <a href="https://github.com/vedant-chautiwar/TurfZone_Zennit" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Github</a>
          <a href="https://turf-zone-zennit.vercel.app/" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Live Link</a>
        </div>
      </div>

      <div className="flex flex-col border-2 border-purple-500 p-3 gap-3 text-white rounded-2xl shadow-xl">
        <div className='flex flex-col gap-3 text-center'>
          <h1 className='text-2xl font-bold text-yellow-300'>Weather App</h1>
          <p>
            This responsive weather application, built with React and Tailwind CSS, displays real-time data using the OpenWeather API. It features a clean single-page layout where users can search any city to view temperature, humidity, wind speed, and conditions. The UI is fully frontend-based and adapts smoothly across mobile, tablet, and desktop screens.
          </p>
        </div>
        <div className="flex justify-between items-center p-2">
          <a href="https://github.com/vedant-chautiwar/Weather-App" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Github</a>
          <a href="https://weather-app-ruby-two-89.vercel.app/" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Live Link</a>
        </div>
      </div>

      <div className="flex flex-col border-2 border-purple-500 p-3 gap-3 text-white rounded-2xl shadow-xl">
        <div className='flex flex-col gap-3 text-center'>
          <h1 className='text-2xl font-bold text-yellow-300'>Poetree</h1>
          <p>
            This responsive social media application, Poetree, built with the MERN stack and Tailwind CSS, enables users to securely sign up, log in, create and share poems, discover other writers, and follow profiles. It delivers a smooth single-page experience with real-time data and a adaptive interface across mobile, tablet, and desktop screens.
          </p>
        </div>
        <div className="flex justify-between items-center p-2">
          <a href="https://github.com/vedant-chautiwar/poetree" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Github</a>
          <a href="https://poetree-1.onrender.com" target="_blank" className='border-2 border-white p-2 rounded-4xl'>Live Link</a>
        </div>
      </div>
    </div>
    </>
  )
}
