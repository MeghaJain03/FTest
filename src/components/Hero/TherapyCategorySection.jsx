import React from "react";
import TherapyOption from "./TherapyOption";

const TherapyCategorySection = () => {
  return (
    <section className="heroWrapper md:w-full h-screen m-auto  flex flex-col items-center justify-center gap-[2.7rem]">
      <h1 className="w-[85%] text-center lg:w-full text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] font-overpass font-light leading-[3.5rem] tracking-tight">
        You must have peace in your mind.
      </h1>
      <h3 className="w-[78%]  text-[1.8rem] text-center lg:w-full md:text-[2rem] font-inter font-normal">
        India's Affordable Mental Health App
      </h3>

      <TherapyOption />
    </section>
  );
};

export default TherapyCategorySection;
