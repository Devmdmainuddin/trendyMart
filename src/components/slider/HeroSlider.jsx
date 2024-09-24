import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const HeroSlider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}

                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: true,
                //   }}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 24,
                //     },
                //     768: {
                //         slidesPerView: 3,
                //         spaceBetween: 24,
                //     },
                //     1024: {
                //         slidesPerView: 4,
                //         spaceBetween: 24,
                //     },
                // }}

                loop={true}

                className="mySwiper "
            >

                <SwiperSlide className=''>
                    <img src="/hero.jpg" alt="" className='w-full h-full object-cover' />
                </SwiperSlide>



            </Swiper>

        </div>
    );
};

export default HeroSlider;