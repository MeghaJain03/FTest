import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaHeart } from "react-icons/fa";
import { ngoData } from "./ngoData";

const NgoSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='max-w-7xl  mx-auto p-4 '>
      <h2 className='text-2xl font-semibold text-center mb-4'>
        Organizations we have
      </h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        {ngoData.map((ngo, index) => (
          <SwiperSlide key={index}>
            <div className=' rounded-lg shadow-xl p-6 bg-white h-[27rem] flex flex-col justify-between'>
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-medium'>{ngo.title}</h3>
                  <FaHeart className='text-red-500' />
                </div>
                <p className='mt-2 text-lg text-gray-600 line-clamp-3'>
                  {ngo.description}
                </p>
              </div>

              <div className='mt-4 w-full h-60 rounded-lg overflow-hidden '>
                <img
                  src={ngo.image}
                  alt={ngo.title}
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className='custom-pagination flex justify-center space-x-2 mt-6'></div>
    </div>
  );
};

export default NgoSwiper;
