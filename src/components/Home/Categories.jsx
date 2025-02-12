import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard04 from '../Card/ProductCard04';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swipers.css";
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';

const Categories = () => {

  const { data, error, isLoading, } = useGetproductsQuery()
  const [topCategories, setTopCategories] = useState();
  useEffect(() => {
    const products = data?.filter(items => items.categorys.category);
    setTopCategories(products);
  }, [data]);

  return (
    <div>
      <Container>
        <Heading text='Top Categories' className='text-center mt-6 md:mt-[128px]'></Heading>
       {/* flex gap-[30px] flex-wrap justify-center mx-auto mt-12 */}
        {/* <div className='mx-auto mt-12 py-5'> */}
        <div className='mt-12'>
        <Swiper
            modules={[Pagination]}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              680: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              872: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              1145: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
            }}
            spaceBetween={10}
            pagination={{ clickable: true }}
            className="mySwiper top-categories px-2 py-6"
          >
            {topCategories?.slice(0,6).map((product, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard04 product={product}></ProductCard04>
                {/* <TCCards data={product} /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         


          {/* <ProductCard04></ProductCard04>
                    <ProductCard04></ProductCard04>
                    <ProductCard04></ProductCard04>
                    <ProductCard04></ProductCard04> */}
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Categories;