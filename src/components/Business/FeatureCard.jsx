import React from "react";

const FeatureCard = ({ title, description, imgurl }) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center'>
      {/* Icon/Image Container */}
      <div className='flex justify-center items-center rounded-full bg-blue-500 h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] lg:h-[180px] lg:w-[180px] xl:h-[220px] xl:w-[220px]'>
        <img
          src={imgurl}
          alt={title}
          className='w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain'
        />
      </div>

      {/* Title */}
      <h3 className='text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] font-light text-[#444444] mt-4'>
        {title}
      </h3>

      {/* Description */}
      <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#4a4d4a] mt-2 sm:mt-3 lg:mt-4'>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
