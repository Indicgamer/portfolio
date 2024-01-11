import React from "react";
import { Button } from "./Button";
import hamburg from "../img/hamburger.png";
import { useState ,useEffect} from "react";


export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="w-full  bg-pink-600 ">
      <nav className="w-full  flex items-center justify-between px-8 py-6  gap-10">
      <div className="md:hidden">
          <img src={hamburg} alt="hamburger menu" className="cursor-pointer" onClick={handleClick} width={40} height={40} />
        </div>
        <h1 className="text-xl font-palanquin text-white hover:scale-110"> <a href="#home">My Portfolio</a></h1>
        <ul
          className={`${click? ` bg-pink-600 flex flex-col justify-start gap-8 absolute top-[76px]   py-5 px-8 w-full  mx-[-32px]  `:`max-md:hidden justify-center items-center`} flex  gap-5 text-lg font-palanquin leading-none text-pink-100 `}
        >
          {/* hovering effect: hover:text-pink-200 hover:shadow-md hover:font-semibold */}
          <a href="#about-me" className="text-lg hover:scale-110 font-palanquin leading-none text-pink-100" onClick={handleClick}>
            <li>About me</li>
          </a>
          <a href="#projects" className="text-lg hover:scale-110 font-palaquin leading-none text-pink-100 " onClick={handleClick}>
            <li>My Work</li>
          </a>
          <a href="#contact-me" className="text-lg hover:scale-110  font-palaquin leading-none text-pink-100 " onClick={handleClick}>
            <li>Contact me</li>
          </a>
        </ul>

        


       



      
      </nav>
    </header>
  );
};
