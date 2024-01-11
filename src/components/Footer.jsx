import React from 'react';
import {links} from "../constants/footer"

export const Footer = () => {
  return (
    <footer className='w-full max-containner '>
        <div className='bg-pink-600 px-10 py-8 flex justify-center gap-5'>
            {
                links.map((link)=>(
                    <a href={link.link} key={link.alt} className='hover:scale-110 hover:shadow-lg '>
                        <img src={link.imgURL} alt={link.alt}  />
                    </a>
                ))
            }
            
        </div>
    </footer>
  )
}
