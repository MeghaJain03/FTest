import React from "react";
import { Link } from "react-router-dom";
import { cardData } from "../../assets/assets";
import "./pricecard.css"

const PriceCard = () => {
  return (
    <div className="flex flex-wrap md:gap-11 lg:gap-7 justify-center bg-gray-100 p-8 lg:px-[20.8rem]">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="md:w-[32rem] md:h-[30rem] lg:w-[28rem] lg:h-[29rem] bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {card.image && (
            <img src={card.image} alt={card.title} className="h-[19.2rem] w-full object-cover" />
          )}
          <div className="text-center p-3 hover:bg-gradient-to-r from-cyan-200 via-gray-100 to-yellow-100 w-full h-full flex flex-col justify-between">
            <h3 className="text-teal-700 font-bold text-[1.8rem]">{card.title}</h3>
            <Link
              to={card.link || "#"}
              className="text-teal-700 font-bold text-[2.4rem] inline-block hover:text-teal-800"
            >
              &#8594;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
