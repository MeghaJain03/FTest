import React from "react";
import { Link } from "react-router-dom";
import RequestDemo from "../RequestDemo";

const CardLayout = ({
  title,
  description,
  imageSrc,
  imagePosition,
  cardSource,
}) => {
  return (
    <div className='flex items-center flex-row justify-evenly gap-5 pr-14 pl-12 mb-3'>
      <div
        className={`rounded-full p-3 ${
          imagePosition === "right"
            ? "bg-transparent"
            : "bg-blue-500 bg-opacity-10"
        }`}
      >
        {imagePosition === "left" && (
          <img
            src={imageSrc}
            alt={title}
            className='h-[250px] w-[250px] object-contain'
          />
        )}
      </div>

      <div className='flex flex-col justify-center text-left gap-7'>
        <h3 className='text-[48px] font-[300] text-[#444444]'>{title}</h3>
        <p className='text-[18px] w-[665px] font-thin text-[#4a4d4a]'>
          {description}
        </p>
        <div>
          <RequestDemo source={cardSource} />
        </div>
      </div>

      <div
        className={`rounded-full p-3 ${
          imagePosition === "left"
            ? "bg-transparent"
            : "bg-blue-500 bg-opacity-10"
        }`}
      >
        {imagePosition === "right" && (
          <img
            src={imageSrc}
            alt={title}
            className='h-[250px] w-[250px] object-contain'
          />
        )}
      </div>
    </div>
  );
};

export default CardLayout;
