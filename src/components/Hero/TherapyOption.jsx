import React from "react";
import { assets, therapyOptions } from "../../assets/assets";
import { GoArrowRight } from "react-icons/go";
import "./Hero.css"

const TherapyOption = () => {
  return (
    <div
     className="therapyOption relative w-[85%] md:w-[72%] lg:w-[58%] bg-[#1A5A9D] h-[54vh] grid grid-cols-1 place-items-center lg:grid-cols-3 gap-[2.5rem] lg:gap-2"
     style={{
      backgroundImage: `url(${assets.homepage2})`,
      backgroundSize: 'cover', 
      backgroundPosition: '-7vw 50%', 
      backgroundRepeat: 'no-repeat' 
    }} 
     >
         <p className="absolute top-[2rem] right-6 text-center text-white text-[2.5rem] font-mono tracking-tighter">
       We understand you. <br /> The challenges you <br /> faced.
     </p>
    </div>
  );
};

export default TherapyOption;
