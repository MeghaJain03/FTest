import React from "react";

const ProgressCard = ({ percentage, description, color }) => {
  const circumference = 126; // The circumference of the circle (2 * π * r)
  const progress = (percentage / 100) * circumference;

  return (
    <div className='relative flex flex-col items-center justify-center w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] p-4 bg-white shadow-lg rounded-lg'>
      {/* Circular Progress Bar */}
      <svg
        width='100'
        height='100'
        className='transform -rotate-90'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* Background Circle */}
        <circle
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
          stroke='#E5E7EB'
          strokeWidth='8'
        />
        {/* Foreground Progress Circle */}
        <circle
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
          stroke={color}
          strokeWidth='8'
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>

      {/* Percentage Text */}
      <h1
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold mt-4`}
        style={{ color: color }}
      >
        {percentage}%
      </h1>

      {/* Description */}
      <p className='text-center text-gray-600 text-sm sm:text-base lg:text-lg mt-2'>
        {description}
      </p>
    </div>
  );
};

export default ProgressCard;
