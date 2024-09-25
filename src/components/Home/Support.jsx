import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';

const Support = () => {
    return (
        <section>
            <Container>
                <Heading text='What Shopex Offer!' className='text-center my-[58px]'></Heading>
                <div className='flex gap-[30px] justify-center flex-wrap mx-auto '>
                    {/* card-01 */}
                    <div className='w-[270px] shadow-customshadow p-7 hover:bg-[#5699f0] group  transition-all duration-500'>
                        <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px]">
                            <img src="/sup.png" alt="" className='w-full h-full object-contain group-hover:text-white transition-all duration-500' />
                        </div>
                        <div className="content">
                            <h2 className='text-2xl text-[#151875] text-center font-josefin font-semibold group-hover:text-white transition-all duration-500'>24/7 Support</h2>
                            <p className='font-bold text-[#15187587] text-center mt-5 group-hover:text-white transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                        </div>

                    </div>
                    {/* card-02 */}
                    <div className='w-[270px] shadow-customshadow p-7 hover:bg-[#5699f0] group  transition-all duration-500'>
                        <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px]">
                            <img src="/sup01.png" alt="" className='w-full h-full object-contain group-hover:text-white transition-all duration-500' />
                        </div>
                        <div className="content">
                            <h2 className='text-2xl text-[#151875] text-center font-josefin font-semibold group-hover:text-white transition-all duration-500'>24/7 Support</h2>
                            <p className='font-bold text-[#15187587] text-center mt-5 group-hover:text-white transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                        </div>

                    </div>
                    {/* card-03 */}
                    <div className='w-[270px] shadow-customshadow p-7 hover:bg-[#5699f0] group  transition-all duration-500'>
                        <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px]">
                            <img src="/sup02.png" alt="" className='w-full h-full object-contain group-hover:text-white transition-all duration-500' />
                        </div>
                        <div className="content">
                            <h2 className='text-2xl text-[#151875] text-center font-josefin font-semibold group-hover:text-white transition-all duration-500'>24/7 Support</h2>
                            <p className='font-bold text-[#15187587] text-center mt-5 group-hover:text-white transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                        </div>

                    </div>
                    {/* card-04 */}
                    <div className='w-[270px] shadow-customshadow hover:bg-[#5699f0] group p-7 transition-all duration-500'>
                        <div className="image w-[65px] h-[65px] mx-auto flex justify-center items-center mt-[61px] mb-[22px] ">
                            <img src="/sup03.svg" alt="" className='w-full h-full object-contain group-hover:text-white transition-all duration-500' />
                        </div>
                        <div className="content">
                            <h2 className='text-2xl text-[#151875] group-hover:text-white text-center font-josefin font-semibold transition-all duration-500'>24/7 Support</h2>
                            <p className='font-bold text-[#15187587] group-hover:text-white text-center mt-5 transition-all duration-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Support;