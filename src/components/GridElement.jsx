import React, { useEffect } from 'react';

export const GridElement = ({imgURL,projectTitle,projURL}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const mouseEnterHandler = () => {
    setIsHovered(true);
  }
  const mouseLeaveHandler = () => {
    setIsHovered(false);
  }
  return (
    <div  className="hover:scale-110 hover:shadow-2xl hover:cursor-pointer" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
      <a href={projURL}>
        <img src={imgURL} alt="img"   />
      </a>
      <div className={`'z-10 relative bottom-[106px] h-full bg-pink-200 flex-col justify-center items-center  ${isHovered?'flex':'hidden'} '`}>
        <h1 className="text-lg font-montserrat font-bold text-pink-600">{projectTitle}</h1>
      </div>
        
      
         
    </div>
  )
}
