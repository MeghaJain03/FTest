import React from "react";

const Cards = ({ name }) => {
  const backgroundImage =
    name === "Employee"
      ? "url('/employeecard.jpg')"
      : "url('/organizationcard.jpg')";

  return (
    <div
      className='flex justify-center items-center p-4 h-[24rem] sm:h-[38.4rem] md:h-[32rem] lg:h-[40rem] lg:w-[450px] xl:w-[650px] rounded-lg text-white bg-cover bg-center hover:shadow-xl transition-shadow duration-300'
      style={{
        backgroundImage: backgroundImage,
        opacity: 0.9,
      }}
    >
      <h2 className='text-lg sm:text-xs md:text-lg lg:text-xl font-bold bg-black bg-opacity-70 px-6 py-2 rounded'>
        {name}
      </h2>
    </div>
  );
};

export default Cards;
