import React from "react";
import { Link } from "react-router-dom";
// import RequestDemo from "../RequestDemo";

const Banner = ({ title, content, bgurl, bannerSource }) => {
  return (
    <div
      className={`${bgurl} imagediv flex flex-col justify-center items-start gap-7 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-white`}
    >
      <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-normal'>
        {title}
      </h1>
      <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] w-full sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[750px] font-thin'>
        {content}
      </p>
      {/* <RequestDemo source={bannerSource} /> */}
    </div>
  );
};

export default Banner;
