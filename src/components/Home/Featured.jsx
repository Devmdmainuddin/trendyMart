import React, { useState } from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard01 from '../Card/ProductCard01';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swipers.css";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
    const { data, error, isLoading, } = useGetproductsQuery()
    // let [active, setActive] = useState(0)

    // var settings = {
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     // autoplay: true,
    //     // speed: 2000,
    //     // autoplaySpeed: 6000,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,



    //     beforeChange: (prev, next) => {
    //         setActive(next);
    //     },

    //     appendDots: dots => (
    //         <div
    //             style={{
    //                 position: "absolute",
    //                 // left: "50%",
    //                 bottom: "-53px",
    //                 // transform:"translateX(-50%)",
    //             }}
    //         >
    //             {/* display:"flex", flexDirection:"column" */}
    //             <ul style={{ margin: "0px", display: "flex", flexDirection: "row", justifyContent: "center" }}> {dots} </ul>
    //         </div>
    //     ),
    //     customPaging: i => (
    //         <div
    //             style={

    //                 i == active
    //                     ? {
    //                         background: "#FB2E86",
    //                         width: '27px',
    //                         height: '3px',

    //                     } : {
    //                         background: "#FF75B0",
    //                         width: '27px',
    //                         height: '3px',
    //                     }

    //             }
    //         >

    //         </div>
    //     ),

    //     responsive: [

    //         {
    //             breakpoint: 1162,
    //             settings: {
    //               slidesToShow: 3,
    //               slidesToScroll: 1,

    //             }
    //           },
    //           {
    //             breakpoint: 878,
    //             settings: {
    //               slidesToShow: 2,
    //               slidesToScroll: 1,

    //             }
    //           },
    //           {
    //             breakpoint: 602,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1
    //             }
    //           }

    //     ],
    // };



    if (isLoading) { <LoadingSpinner></LoadingSpinner> }

    return (
        <div>
            <Container>
                <Heading text='Featured Products ' className='text-center mt-6 md:mt-[129px]'></Heading>
                {/* <div className=' flex gap-[30px] justify-center flex-wrap mx-auto mt-12'> */}
                {/* <div className='mt-12 '>
                        <Slider {...settings} className='m-3'>
                            {data?.map((item, idx) => <ProductCard01 key={idx} item={item}></ProductCard01>)}
                        </Slider>
                        
                        </div> */}


                {/* {data?.slice(0,4).map((item,idx)=> <ProductCard01 key={idx} item={item}></ProductCard01>)}
                    */}

                {/* </div> */}
                <div className='mt-12 '>
                    <Swiper
                        modules={[Pagination]}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            615: {
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
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        className="mySwiper featured-products "
                    >
                        {data?.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <ProductCard01 item={item}></ProductCard01>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </Container>
        </div>
    );
};

export default Featured;