import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import '../../styles/swipers.css'

const HeroSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="mySwiper header"
                loop= {true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >

                <SwiperSlide className=''>
                    <img src="/hero.jpg" alt="" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src="https://firebasestorage.googleapis.com/v0/b/hekto-a75a2.appspot.com/o/first-banner.png?alt=media&token=375bdc40-e2eb-44ae-926b-db8aaabf2232" alt="" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src="https://firebasestorage.googleapis.com/v0/b/hekto-a75a2.appspot.com/o/third-banner.png?alt=media&token=f1479f3a-b3dc-48f2-bb44-2def0904debc" alt="" className='w-full h-full object-cover' />
                </SwiperSlide>



            </Swiper>

        </div>
    );
};

export default HeroSlider;