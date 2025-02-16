import React from "react";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";
// import RequestDemo from "../RequestDemo";

const FeatureSection = () => {
  return (
    <div className='flex flex-col gap-12 mb-20 px-4 sm:px-8 lg:px-16 xl:px-24'>
      {/* Image and Text Section */}
      <div className='flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-12'>
        {/* Feature Image */}
        <img
          src='/featurebg.png'
          alt=''
          className='h-[200px] w-[250px] sm:h-[300px] sm:w-[350px] lg:h-[400px] lg:w-[450px] xl:h-[450px] xl:w-[500px]'
        />
        {/* Text Section */}
        <div className='flex flex-col justify-center text-center xl:text-left gap-6'>
          <h1 className='text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-light text-[#444444]'>
            We set the standard for the industry
          </h1>
          <p className='text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] text-[#4a4d4a] font-thin max-w-full sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto xl:mx-0'>
            As the gold standard of the online mental health industry, we
            proudly provide quality and clinically-proven results to our
            members. It is our goal to ensure total privacy, unparalleled
            security, and the highest-quality therapy for your employees.
          </p>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className='flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-10'>
        <FeatureCard
          imgurl='/Privacy.png'
          title='Privacy'
          description='As the gold standard of the online mental health'
        />
        <FeatureCard
          imgurl='/Security.avif'
          title='Security'
          description='health industry, we proudly provide quality and clinically'
        />
        <FeatureCard
          imgurl='/Quality.png'
          title='Quality'
          description='unparalleled security, and the highest-quality therapy'
        />
      </div>

      {/* Request Demo Section */}
      {/* <div className='flex justify-center items-center'>
        <RequestDemo source='FEATURE-SECTION' />
      </div> */}
    </div>
  );
};

export default FeatureSection;
