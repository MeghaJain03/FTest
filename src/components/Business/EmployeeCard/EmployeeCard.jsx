import React from "react";

const EmployeeCard = ({ title, description, imgurl }) => {
  return (
    <div className='p-4 sm:p-6 flex flex-col items-center text-center'>
      {/* Image Section */}
      <div className='flex justify-center items-center rounded-full bg-blue-500 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:h-[220px] lg:w-[220px] xl:h-[240px] xl:w-[240px]'>
        <img
          src={imgurl}
          alt={title}
          className='w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain'
        />
      </div>

      {/* Title Section */}
      <h3 className='text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-thin text-[#444444] mt-4'>
        {title}
      </h3>

      {/* Description Section */}
      <p className='text-sm sm:text-base md:text-lg text-[#4a4d4a] mt-2 w-full sm:w-[450px] md:w-[500px] xl:w-[600px]'>
        {description}
      </p>
    </div>
  );
};

export default EmployeeCard;
