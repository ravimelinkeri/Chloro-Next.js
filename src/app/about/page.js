import { About01, About12, About13 } from '@/components/extracompo';
import Header, { Footer } from '@/components/header';
import { Hero1 } from '@/components/hero';
import React from 'react'

const About = () => {
  return (
    <>
    <Header/>
    <div className='bg-green-700 h-[300px] w-[100%] flex justify-center items-center'>
        <p className='text-[40px] text-center text-white cormorant'>About Us</p>
        <img className='z-1 h-[50px] w-[150px] ml-[-150px]' src="img01.png" alt="" />
    </div>
    <Hero1/>
    <About12/>
    <About13/>
    <About01/>
    <Footer/>
    </>
    
  )
}

export default About;