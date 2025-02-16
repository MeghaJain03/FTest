import React from "react";
import { Link } from "react-router-dom";
import PriceCard from "../components/Premium/PriceCard";
import Process from "../components/Premium/Process";
import DiscountPriceTable from "../components/Premium/DiscountPriceTable";
import Header from "../components/Header";
import { assets } from "../assets/assets";
import Footer from "../components/Footer/Footer";

const Premium = () => {
    document.title = "Freudia - Premium";
    return (
        <>
            <Header />
            <div className="text-center py-[4rem] px-8 bg-gray-100 mb-[4rem] pt-48">
                {/* Heading Section */}
                <p className="text-[2.4rem] font-bold text-teal-600 mt-10 mb-5">
                    We offer a wide range of therapists for all your needs.
                </p>
                <PriceCard />
                <Process />

                {/* Matched Therapist Section */}
                <div className="flex justify-start md:justify-evenly items-start md:items-center my-5 p-0 md:p-5">
                    {/* Left Column - Text and Button */}
                    <div>
                        <p className="text-[2.4rem] font-bold text-teal-600 mb-3">
                            Get matched with the right therapist
                        </p>
                        <p className="text-[1.8rem] text-gray-700 mb-5">
                            Book your first therapy session with 50% discount.
                        </p>
                        <DiscountPriceTable />
                        <Link to="/appointment">
                            <button className="bg-teal-600 text-xl text-white px-8 py-[1rem] rounded-lg transition-colors duration-300 hover:bg-teal-700 mt-4">
                                Book an Appointment
                            </button>
                        </Link>
                    </div>

                    {/* Right Column - Image */}
                    <img
                        src={assets.therapist}
                        alt="Therapist"
                        className="w-auto h-[28.8rem] mx-5 rounded-[0.8rem] shadow-md"
                    />
                </div>

                {/* Get in touch Section */}
                {/* <div className="mt-10">
                    <p className="text-[2.4rem] font-bold text-teal-600 mb-3">
                        Not sure which therapy to choose from?
                    </p>
                    <Link to="/contact">
                        <button className="bg-teal-600 text-white text-xl px-8 py-[1rem] rounded-lg transition-colors duration-300 hover:bg-teal-700 mt-4">
                            Get in touch with our team
                        </button>
                    </Link>
                </div> */}
            </div>
            <Footer/>
        </>
    );
}

export default Premium;
