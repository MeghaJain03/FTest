import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { cardData } from '../assets/assets';

const Services = () => {
    document.title = 'freudia - Services';
    return (
        <>
            <Header />
            <div className="flex flex-wrap px-[24rem] gap-[2.4rem] p-[2.4rem] bg-gray-50 pt-[11rem]">
                {/* Loop over each service card */}
                {cardData.map((card) => (
                    <div key={card.id} className="w-[32rem] bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-r from-cyan-200 via-gray-100 to-yellow-100 pb-12 relative">
                        {/* Display image for each service */}
                        {card.image && <img src={card.image} alt={card.title} className="w-full h-[19.2rem] object-cover rounded-t-lg" />}

                        <div className="p-[1.6rem] flex flex-col h-full">
                            {/* Card Title */}
                            <h3 className="text-[2rem] font-bold text-teal-700 mb-4 text-center">{card.title}</h3>

                            {/* Card Description (List or Paragraph) */}
                            {Array.isArray(card.description) ? (
                                <ul className="list-disc pl-[2rem] space-y-2 text-gray-700 text-[1.6rem]">
                                    {card.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700 text-[1.6rem] mb-4">{card.description}</p>
                            )}

                            {/* Button linking to service page */}
                            <div className=" w-[15rem]  absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <Link to={`/services/${card.id}`} className="mx-auto text-[1.4rem] px-[2rem] inline-block py-[0.8rem]  bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors ">
                                    Learn More &#8594;
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Services;
