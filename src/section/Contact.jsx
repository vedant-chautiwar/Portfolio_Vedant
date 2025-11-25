import React from 'react'
import { Navbar } from '../components/Navbar'

export const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-20 min-h-screen flex flex-col items-center gap-3'>
      <span className='text-6xl text-red-600 font-bold'>Contact me!!</span>
      <form action="https://formsubmit.co/chautiwarvedant@gmail.com" method="POST" className='mt-10 flex flex-col gap-4'>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://your-portfolio.com/thankyou" />

        <input type="text" name='Name' placeholder='Name' className='p-2 border-2 rounded-3xl text-white outline-none w-xs text-center' required/>
        <input type="text" name='Mobile' placeholder='Mobile Number' className='p-2 border-2 rounded-3xl text-white outline-none w-xs text-center' required/>
        <input type="email" name='Email' placeholder='E-mail' className='p-2 border-2 rounded-3xl text-white outline-none w-xs text-center' required/>
        <textarea name="work" rows="6" cols="20" className='p-2 border-2 rounded-3xl text-white outline-none text-center' placeholder='Work' required></textarea>

        <button type='submit' className='p-3 rounded-3xl mt-2 bg-blue-500 hover:cursor-pointer hover:bg-linear-to-tr from-blue-600 to to-blue-400 text-white'>Submit</button>

      </form>
      <div className="flex gap-4 text-gray-500">
        <a href="https://github.com/vedant-chautiwar" target="_blank" className='text-2xl transform hover:scale-150 hover:text-red-500 transition-all duration-500'>
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vedant-chautiwar-a68689306/" target="_blank" className='text-2xl transform hover:scale-150 hover:text-blue-400 transition-all duration-500'>
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/chauti06/" target="_blank" className='text-2xl transform hover:scale-150 hover:text-pink-600 transition-all duration-500'>
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:chautiwarvedant@gmail.com" target="_blank" className='text-2xl transform hover:scale-150 hover:text-white transition-all duration-500'>
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
    </>
  )
}
