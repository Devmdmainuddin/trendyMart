import React, { useEffect, useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import Image from '../../components/Shared/Image';
import Container from '../../components/Shared/Container';
import { FaFacebook, FaInstagramSquare, FaRegHeart, FaStar, FaTwitter } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Heading from '../../components/Shared/Heading'
import ProductCard08 from '../../components/Card/ProductCard08';
import Company from '../../components/Home/Company'

const Faq = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperDirection, setSwiperDirection] = useState('horizontal'); // Default direction is horizontal


  useEffect(() => {
    const updateSwiperDirection = () => {
      if (window.innerWidth >= 768) {
        setSwiperDirection('vertical');
      } else {
        setSwiperDirection('horizontal');
      }
    };

    updateSwiperDirection();
    window.addEventListener('resize', updateSwiperDirection);

    return () => {
      window.removeEventListener('resize', updateSwiperDirection);
    };
  }, []);

  return (
    <div>
      <Bredcumb />
      <Container>
        <div className='flex flex-col md:flex-row justify-center items-center  gap-6  my-[121px]'>
          <div className='left w-[350px] md:w-[526px] flex  flex-col-reverse md:flex-row gap-[21px]  '>
            <div>
              <Swiper
                //  direction={'vertical'}
                direction={swiperDirection}
                spaceBetween={10}
                slidesPerView={3}
                onSwiper={setThumbsSwiper}
                className="mySwiper md:w-[151px] md:h-[487px]  "
              >
                <SwiperSlide className=' h-[155px]'><Image src='/th01.png'></Image></SwiperSlide>
                <SwiperSlide className='  h-[155px]'><Image src='/th02.png'></Image></SwiperSlide>
                <SwiperSlide className='  h-[155px]'><Image src='/th03.png'></Image></SwiperSlide>
                <SwiperSlide className='  h-[155px]'><Image src='/th04.png'></Image></SwiperSlide>

              </Swiper>

            </div>
            <div>
              <Swiper
                direction={'vertical'}
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Navigation, Thumbs]}
                className="mySwiper w-[355px] h-[457px] md:w-[375px] md:h-[487px] "
              >
                <SwiperSlide className='w-full h-full '><Image src='/th01.png'></Image></SwiperSlide>
                <SwiperSlide className=' w-full h-full  '><Image src='/th02.png'></Image></SwiperSlide>
                <SwiperSlide className=' w-full h-full  '><Image src='/th03.png'></Image></SwiperSlide>
                <SwiperSlide className=' w-full h-full  '><Image src='/th04.png'></Image></SwiperSlide>
              </Swiper>

            </div>
          </div>
          <div className="right">
            <h2 className='text-[#0D134E] text-[36px] font-josefin font-semibold capitalize'>Playwood arm chair</h2>
            <div className='flex gap-2 items-center mt-3'>
              <div className='flex gap-1 '>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#B2B2B2] text-[10px]' /></span>

              </div>
              <span className='text-sm'>22</span>
            </div>
            <div className='text-[13px] font-josefin font-normal flex gap-2 mt-3'>
              <p className='text-[#151875] text-[16px]'>$ <span >42.00</span></p>
              <p className='  text-[#FB2E86] line-through'>$ <span>65.00</span></p>
            </div>
            <h4 className='text-[#151875] text-[16px] font-josefin font-semibold mt-4'>Color : </h4>
            <p className='max-w-[549px] text-[#A9ACC6] text-[16px] font-josefin font-semibold mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
            <div className='flex gap-3 mt-8'>
              <button className='flex items-center gap-2 py-2 px-3 border text-[#151875] text-[16px] font-josefin font-normal capitalize '>Add To cart <IoCartOutline className='text-[16px]' /></button>
              <button className='flex items-center gap-2 py-2 px-3 border text-[#151875] text-[16px] font-josefin font-normal capitalize'> <FaRegHeart className='text-[16px]' /></button>

            </div>
            <h4 className='text-[#151875] text-[16px] font-josefin font-semibold mt-4'>Categories :</h4>
            <h4 className='text-[#151875] text-[16px] font-josefin font-semibold mt-2.5'>Tags :</h4>
            <div className='flex items-center gap-3 mt-2.5'>
              <h4 className='text-[#151875] text-[16px] font-josefin font-semibold '>Share :</h4>
              <ul className='flex gap-3 '>
                <li> <Link><FaFacebook className='text-[#151875] text-sm' /></Link></li>
                <li> <Link><FaTwitter className='text-[#151875] text-sm' /></Link></li>
                <li> <Link><FaInstagramSquare className='text-[#151875] text-sm' /></Link></li>
              </ul>
            </div>


          </div>
        </div>

      </Container>
      <div className='bg-[#F9F8FE] py-[109px]'>
        <Container>
          <ul className='flex gap-6 flex-wrap justify-center md:gap-[63px] '>
            <li className='text-[#151875] text-2xl font-josefin font-semibold'>Description </li>
            <li className='text-[#151875] text-2xl font-josefin font-semibold capitalize'>Additional Info </li>
            <li className='text-[#151875] text-2xl font-josefin font-semibold'>Reviews </li>
            <li className='text-[#151875] text-2xl font-josefin font-semibold'>Video </li>
          </ul>
          <div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-4 md:mt-[61px] '>Varius tempor.</h2>
            <p className='text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px] mt-2 md:mt-4'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-4 md:mt-8'>More details</h2>
            <ul className=' mt-2 md:mt-4'>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>

            </ul>
          </div>
        </Container>
      </div>
      <div className='mt-6 md:mt-16 lg:mt-[126px]'>
        <Container>
          <Heading text='Related Products'></Heading>
          <div className='flex gap-[30px] justify-center flex-wrap mx-auto mt-12'>
            <ProductCard08></ProductCard08>
            <ProductCard08></ProductCard08>
            <ProductCard08></ProductCard08>
            <ProductCard08></ProductCard08>
          </div>
          <Company></Company>
        </Container>
      </div>




    </div>
  );
};

export default Faq;
