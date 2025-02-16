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
    <div className='max-w-[72rem] mx-auto p-4 relative'>
      {/* Custom Navigation Buttons */}
      <div className='absolute top-1/2 -left-8 transform -translate-y-1/2 z-10'>
        <FaChevronLeft className='text-gray-600 w-8 h-8 cursor-pointer fa-arrow-left' />
      </div>
      <div className='absolute top-1/2 -right-8 transform -translate-y-1/2 z-10'>
        <FaChevronRight className='text-gray-600 w-8 h-8 cursor-pointer fa-arrow-right' />
      </div>

      <Swiper
        className='mb-7 w-full '
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          prevEl: ".fa-arrow-left",
          nextEl: ".fa-arrow-right",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='border rounded-lg p-6 shadow-md bg-gray-100 h-[300px] w-[350px]'>
              <div className='flex items-center mb-4'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className='text-gray-600 mb-4'>{testimonial.text}</p>
              <p className='text-blue-900 font-medium'>{testimonial.person}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination container */}
      <div className='swiper-pagination'></div>
    </div>
  );
};

export default Testimonials;
