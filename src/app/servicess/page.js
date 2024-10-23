import { About14, Service1 } from '@/components/extracompo';
import Header, { Footer } from '@/components/header';
import { Hero4, Hero5, Hero7 } from '@/components/hero';
import React from 'react'

const About = () => {
  return (
    <>
    <Header/>
    <div className='bg-green-700 h-[300px] w-[100%] flex justify-center items-center'>
        <p className='text-[40px] text-center text-white cormorant'>Our Service</p>
        <img className='z-1 h-[50px] w-[150px] ml-[-150px]' src="img01.png" alt="" />
    </div>
    <About14/>
    <Hero4/>
    <Hero7/>
    <Service1/>
    <Hero5/>
    <Footer/>
    </>
  )
}

export default About;