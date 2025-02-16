import React from "react";
import { Link } from "react-router-dom";

const StepCard = ({ title, description, image, link }) => (
  <div className="flex items-center gap-8 bg-white border border-gray-300 rounded-xl shadow-lg p-[3.2rem] w-full max-w-[76.8rem] mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-cyan-200 via-gray-100 to-yellow-100">
    <div className="flex-shrink-0">
      <img src={image} alt={title} className="h-24 w-24 rounded-xl object-cover" />
    </div>
    <div className="text-left flex-1">
      <h3 className="text-[2rem] font-semibold text-teal-600 mb-2">
        <Link to={link} className="hover:text-teal-800">
          {title}
        </Link>
      </h3>
      <p className="text-[1.4rem] text-gray-600">{description}</p>
    </div>
  </div>
);

export default StepCard;
