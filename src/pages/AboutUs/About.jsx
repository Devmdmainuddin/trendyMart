import React, { useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Container from '../../components/Shared/Container';
import Image from '../../components/Shared/Image';
import Heading from '../../components/Shared/Heading';
import Company from '../../components/Home/Company';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swipers.css";
import client1 from "/tas.png";
import client2 from "/tas01.png";
import client3 from "/tas02.png";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const About = () => {
    const [commentSlide, setCommentSlide] = useState(1);
    // const [activeSlide, setActiveSlide] = useState(0);

    // const settings = {
    //     centerMode: true,
    //     centerPadding: "60px",
    //     dots: true,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 6000,
    //     slidesToShow: 3,
    //     swipeToSlide: true,
    //     focusOnSelect: true,

    //     afterChange: (current) => setActiveSlide(current),

    //     customPaging: (i) => (
    //         <div
    //             style={
    //                 i == activeSlide
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
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };

    const slides = [
        {
            img: "/tas.png",
            title: "md.mainuddin",
            subtitle: "Ceo At Webecy Digital",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
        },
        {
            img: "/tas01.png",
            title: "Selina Gomez",
            subtitle: "Ceo At Webecy Digital",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
        },
        {
            img: "/tas02.png",
            title: "md.mainuddin",
            subtitle: "Ceo At Webecy Digital",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
        },
       
    ];

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     variableWidth: true,
    //     adaptiveHeight: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // };
    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                <div className='mt-16 md:mt-[125px] flex gap-[30px] flex-col lg:flex-row items-center justify-between  '>
                    <div className="image relative sm:w-[427px] lg:w-[555px] w-full">
                        <div className='w-full sm:w-[427px] lg:w-[555px] h-[409px] bg-[#2B3CAB] rounded-lg'>

                        </div>
                        <div className='w-full sm:w-[427px] lg:w-[555px] h-[390px] z-30 absolute top-0 left-4'>
                            {/* <Image scr='/ab.jpg'></Image> */}
                            <Image src='/ab.jpg'> </Image>
                        </div>


                    </div>
                    <div className="content max-w-[550px]">
                        <h2 className='text-[#151875] text-xl md:text-4xl font-josefin font-bold'>Know About Our Ecomerce
                            Business, History</h2>
                        <p className='text-[#8A8FB9] text-[16px] font-josefin font-semibold mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <p className='text-[#8A8FB9] text-[16px] font-josefin font-semibold mt-2'>consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, </p>
                        <button className="block mt-6  text-[16px] font-josefin font-semibold py-[10px] px-[30px] bg-[#FB2E86] text-white rounded-sm  capitalize">Contact us</button>
                    </div>
                </div>
                <div className='my-6 md:my-[128px]'>
                    <Heading text='Our Features' className='text-center'></Heading>

                    <div className='flex gap-[30px] justify-center flex-wrap mx-auto mt-8 md:mt-[66px]'>
                        <div className='w-[270px] shadow-customshadow p-7  group  transition-all duration-500 border-b-2 border-white hover:border-[#FF9100] '>
                            <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px]">
                                <img src="/sup.png" alt="" className='w-full h-full object-contain  transition-all duration-500' />
                            </div>
                            <div className="content">
                                <h2 className='text-2xl text-[#151875] text-center font-josefin font-semibold  transition-all duration-500'>Free Delivery</h2>
                                <p className='font-bold text-[#15187587] text-center mt-5  transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                            </div>

                        </div>
                        <div className='w-[270px] shadow-customshadow p-7  group  transition-all duration-500 border-b-2 border-white hover:border-[#FF9100] '>
                            <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px]">
                                <img src="/sup01.png" alt="" className='w-full h-full object-contain  transition-all duration-500' />
                            </div>
                            <div className="content">
                                <h2 className='text-2xl text-[#151875] text-center font-josefin font-semibold  transition-all duration-500'>100% Cash Back</h2>
                                <p className='font-bold text-[#15187587] text-center mt-5  transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                            </div>

                        </div>
                        <div className='w-[270px] shadow-customshadow p-7  group  transition-all duration-500 border-b-2 border-white hover:border-[#FF9100] '>
                            <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px]">
                                <img src="/sup02.png" alt="" className='w-full h-full object-contain  transition-all duration-500' />
                            </div>
                            <div className="content">
                                <h2 className='text-2xl text-[#151875] text-center font-josefin font-semibold  transition-all duration-500'>Quality Product</h2>
                                <p className='font-bold text-[#15187587] text-center mt-5  transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                            </div>

                        </div>
                        <div className='w-[270px] shadow-customshadow p-7  group  transition-all duration-500 border-b-2 border-white hover:border-[#FF9100] '>
                            <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px]">
                                <img src="/sup03.svg" alt="" className='w-full h-full object-contain  transition-all duration-500' />
                            </div>
                            <div className="content">
                                <h2 className='text-2xl text-[#151875] text-center font-josefin font-semibold  transition-all duration-500'>24/7 Support</h2>
                                <p className='font-bold text-[#15187587] text-center mt-5  transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                            </div>

                        </div>
                    </div>
                </div>



            </Container>

            <Container>
                <div className='bg-[#FBFBFF] py-9 md:py-[72px]'>
                    <Heading text='Our Client Say!' className='text-center'></Heading>
                    <div className='mt-16'>
                        <div className="slider-container ">

                            {/* .............................. */}

                            <div className="flex items-center justify-center w-full mb-7 r">
                                <img
                                    src={client1}
                                    className={`w-[55px] h-[55px] duration-150 ease-in-out ${commentSlide === 0 && "-mt-5"
                                        }`}
                                    alt="Sam Bankman-Fried"
                                />
                                <img
                                    src={client2}
                                    className={`w-[55px] h-[55px] duration-150 ease-in-out mx-7 ${commentSlide === 1 && "-mt-5"
                                        }`}
                                    alt="Selina Gomez"
                                />
                                <img
                                    src={client3}
                                    className={`w-[55px] h-[55px] duration-150 ease-in-out ${commentSlide === 2 && "-mt-5"
                                        }`}
                                    alt="Guy Gershon"
                                />


                            </div>

                            <Swiper
                                modules={[Pagination]}
                                initialSlide={commentSlide}
                                slidesPerView={1}
                                slidesPerGroup={1}
                                // loop={true}
                                onRealIndexChange={(element) =>
                                    setCommentSlide(element.activeIndex)
                                }
                                pagination={{ clickable: true }}
                                className="mySwiper about-us"
                            >
                                {slides.map((client, idx) => (
                                    <SwiperSlide
                                        className="flex flex-col items-center text-center"
                                        key={idx}
                                    >
                                        <h4 className="font-Lato text-2xl font-semibold text-black mb-1">
                                            {client.title}
                                        </h4>
                                        <h5 className="text-[#8A8FB9] font-Lato text-[14px] mb-5">
                                            {client.subtitle}
                                        </h5>
                                        <p className="text-[#8A8FB9] font-base font-bold text-base font-Lato leading-6 w-7/12">
                                            {client.description}
                                        </p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>


                            {/* .............................. */}

                            {/* <Slider {...settings} className=''>
                                {slides.map((slide, index) => (
                                    <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className={` flex flex-col justify-center items-center`}>


                                        <div className="  flex flex-col justify-center items-center ">
                                            <img
                                                src={slide.img}
                                                alt={slide.title}

                                                className={`w-[55px] h-[55px] border text-center object-cover transition-opacity duration-500 ${activeSlide === index ? 'w-[60px] h-[70px]' : 'w-[55px] h-[55px]'}`}
                                            />
                                        </div>

                                        {activeSlide === index && (<>
                                            <div className="slider-content p-4 block max-w-[689px]">
                                                <h3 className="text-2xl text-[#151875] text-center font-semibold font-josefin">{slide.title}</h3>
                                                <h4 className="text-[10px] text-[#8A8FB9] text-center font-josefin font-semibold">{slide.subtitle}</h4>
                                                <p className='text-[#8A8FB9] text-[16px] text-center font-josefin font-bold mt-6'>{slide.description}</p>
                                            </div>
                                        </>

                                        )}
                                    </div>
                                ))}
                            </Slider> */}
                        </div>
                        {/* <div className="max-w-5xl mx-auto mt-10">
                            <Slider {...settings}>

                                <div className="slider-item ">
                                    <img
                                        src=''
                                        alt='{slide.title}'
                                        className="w-[55px] h-[55px]  object-cover transition-opacity duration-500"
                                    />
                                    <div className="slider-content  p-4  hidden group-hover:block max-w-[689px]">
                                        <h3 className="text-2xl text-[#151875] text-center  font-semibold font-josefin">Selina Gomez</h3>
                                        <h4 className="text-[10px] text-[#8A8FB9] text-center font-josefin font-semibold">Ceo At Webecy Digital</h4>
                                        <p className='text-[#8A8FB9] text-[16px] text-center font-josefin font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                                    </div>
                                </div>

                            </Slider>
                        </div> */}


                    </div>
                </div >
                <Company></Company>
            </Container>



        </div >
    );
};

export default About;