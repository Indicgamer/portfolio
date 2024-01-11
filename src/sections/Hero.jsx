import React from 'react'
import { useState,useEffect } from 'react';
import Bg from "../img/meProj.jpeg"

export const Hero = () => {
   

    
    return (
        <>
        <section className='w-full px-5 sm:px-10 sm:py-10 py-5 max-container lg:flex-row flex-col flex gap-5 sm:gap-10 items-center'>
            <div className='max-lg:py-5 flex-1'>
                <h1 className='text-5xl sm:text-6xl md:text-[60px] lg:text-5xl xl:text-6xl font-montserrat text-pink-600'>Hi, I'm<br /><span className='text-5xl sm:text-7xl md:text-[80px] lg:text-6xl xl:text-7xl text-pink-800'>Sachidanand </span></h1>

                <h1 className='text-2xl sm:text-4xl md:text-[42px] lg:text-3xl xl:text-4xl sm:pt-8 pt-5 font-palanquin text-pink-600'>a Frontend Web-Developer</h1>
            </div>
            <div className='max-lg:py-5  flex-1' >
                <img src={Bg} alt="img" width={958} height={1278}/>
            </div>            
        </section>
       
        </>
        
    )
}
