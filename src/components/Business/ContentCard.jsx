import React from "react";
import { Link } from "react-router-dom";
import ProgressCard from "./ProgressCard";
// import RequestDemo from "../RequestDemo";

const ContentCard = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-evenly px-4 sm:px-8 lg:pr-16 xl:pr-24 lg:pl-6 xl:pl-8 gap-12 lg:gap-16'>
      {/* Text Section */}
      <div className='flex flex-col justify-center items-start gap-6 lg:gap-8'>
        <h1 className='text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-light text-[#444444]'>
          A clinical approach that works
        </h1>
        <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full sm:w-[450px] lg:w-[500px] font-thin text-[#4a4d4a]'>
        Freudia&apos;s clinical approach is rooted in the principles of personalization, technology integration, and evidence-based practices. By combining professional expertise with innovative tools, it bridges the gap between traditional mental health care and modern accessibility, ensuring users see measurable improvements in their well-being.
        Freudia&apos;s focus on practical, scalable, and culturally relevant mental health solutions makes its clinical approach both effective and transformative.
        </p>
        {/* <RequestDemo source='CONTENT-CARD' /> */}
      </div>

      {/* Cards Section */}
      <div className='w-full lg:w-[50%] flex flex-col gap-8 justify-center items-center relative mt-8 lg:mt-0'>
        <div className='relative'>
          <ProgressCard
            percentage={69}
            description='report improved anxiety symptoms'
            color='violet'
          />
        </div>
        <div className='relative lg:absolute lg:-right-8 xl:-right-16 lg:-top-10 xl:-top-14'>
          <ProgressCard
            percentage={73}
            description='report improved depression symptoms'
            color='maroon'
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
