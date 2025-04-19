import React from 'react'
import HeroImage from '../assets/photo_6298818119862436034_y.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
        <span className="text-transparent bg-clip-text bg-[#e36414]">
          Heng Visal
        </span>



            , Frontend Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
      <div className='mt-8 space-x-4'>
        <a href="https://t.me/notvalsy" target="_blank" rel="noopener noreferrer">
          
            <button
          className='bg-white text-black font-semibold 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        </a>
        <a
          href="/cv-heng_visal.pdf"
          download
          className='bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-black   
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-semibold inline-block'
        >
          Download CV
        </a>

        </div>

    </div>
  )
}

export default Hero