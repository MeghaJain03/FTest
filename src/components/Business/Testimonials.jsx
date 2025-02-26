import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { testimonialData } from "./testimonialData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 relative">
      {/* Custom Navigation Buttons */}
      <button className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">
        <FaChevronLeft className="text-gray-600 w-6 h-6 cursor-pointer fa-arrow-left" />
      </button>
      <button className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full">
        <FaChevronRight className="text-gray-600 w-6 h-6 cursor-pointer fa-arrow-right" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".fa-arrow-left",
          nextEl: ".fa-arrow-right",
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-lg p-6 shadow-md bg-gray-50 flex flex-col items-center text-center h-[280px]">
              {/* Star Ratings */}
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-600 mb-3">{testimonial.text}</p>
              {/* Person Name */}
              <p className="text-blue-900 font-medium">{testimonial.person}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination */}
      <div className="swiper-pagination mt-4"></div>
    </div>
  );
};

export default Testimonials;
