import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LogoCarousel = () => {
  const logos = [
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
    "https://assets.betterhelp.com/bhorg/national.png?v=bbf53129b530",
  ];

  return (
    <div className='logo-carousel-container flex flex-col items-center justify-center w-full py-8 relative '>
      <div className='flex items-center'>
        <FaChevronLeft className='swiper-button-prev ml-24' />
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination", // Use custom pagination container
          }}
          className=' w-[57rem] h-16'
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className='flex items-center justify-center'
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className='h-fit w-fit object-cover bg-no-repeat'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <FaChevronRight className='swiper-button-next mr-24' />
      </div>
      {/* Custom Pagination */}
      <div className='custom-swiper-pagination mt-6'></div>
    </div>
  );
};

export default LogoCarousel;
