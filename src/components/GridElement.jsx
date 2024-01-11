import React from 'react';

export const GridElement = ({imgURL,projectTitle,projURL}) => {
  return (
    <div className="hover:scale-110 hover:shadow-lg hover:cursor-pointer ">
          <img src={imgURL} alt="img" className="w-full h-full object-fill"/>
          <a href={projURL}>
          <div className="relative bottom-[100%] z-10 w-full h-full bg-pink-100 opacity-0 hover:opacity-80 flex flex-col justify-center items-center">
            <h1 className="text-pink-600  font-montserrat font-black text-2xl text-center">{projectTitle}</h1>
          </div>
          </a>
        </div>
  )
}
