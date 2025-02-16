import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
     <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1}pagination={{clickable:true}} breakpoints={{
        640:{
            slidesPerView:1,
            spaceBetween:0,
        },
        768:{
            slidesPerView:2,
            spaceBetween:20,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30
        },
     }}
     >
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt=""  />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Aditi Sharma</h4>
                        <div className='flex items-center gap-[2px]'>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>💬&ldquo;Freudia made therapy so easy and affordable for me. I finally found a safe space to talk about my struggles without judgment!– Aditi, 24.&ldquo;</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt=""  />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Priyansh Rawat</h4>
                        <div className='flex items-center gap-[2px]'>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>💬&ldquo;I have taken Online therapy services from them. They treat so well and they are providing the best therapy services. - Priyansh, 32 &ldquo;</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt=""  />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sylvia D&ldquo;souza</h4>
                        <div className='flex items-center gap-[2px]'>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>💬&ldquo; Mental health care should be accessible to all, and Freudia does just that. Their ₹250 therapy for students helped me when I needed it the most. - Sylvia, 26&ldquo;</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt=""  />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muskan Khan</h4>
                        <div className='flex items-center gap-[2px]'>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>💬&ldquo;Living in a small town, finding a therapist was tough. Freudia brought expert help right to my phone. Life-changing experience! -Muskan , 29 &ldquo;</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt=""  />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Meera Patel</h4>
                        <div className='flex items-center gap-[2px]'>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>💬&ldquo; I love that Freudia respects privacy. I feel safe opening up, and the support groups are a bonus! – Meera, 29&ldquo;</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt=""  />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Amit Saini</h4>
                        <div className='flex items-center gap-[2px]'>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                         <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>💬&ldquo;जब मैं सबसे ज्यादा अकेला महसूस कर रहा था, तब फ्रुडिया ने मुझे सपोर्ट दिया। अब मैं पहले से बेहतर महसूस करता हूँ!&ldquo; – अमित, 26</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial