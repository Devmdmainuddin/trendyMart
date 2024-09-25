import React from 'react';
import Container from '../Shared/Container';

const Banner03 = () => {
    return (

        <div className='mt-10'>
            <Container>
                <div className='flex flex-wrap justify-center gap-[30px] items-center md:justify-between'>
                    <div className='bg-[#FFF6FB] w-[420px]'>
                        <div className="content pl-6 pt-[34px]">
                            <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>23% off in all products</h2>
                            <button className='text-[#FB2E86] font-josefin font-semibold mt-3 capitalize  inline-block underline' >Shop Now</button>
                        </div>
                        <div className="image w-[312px] h-[173px]  ml-auto ">
                            <img src="/ban01.png" alt="" className='w-full h-full object-contain' />
                        </div>

                    </div>
                    <div className='bg-[#EEEFFB]  w-[420px]'>


                        <div className="content pl-6 pt-[34px]">
                            <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>23% off in all products</h2>
                            <button className='text-[#FB2E86] font-josefin font-semibold mt-3 capitalize  inline-block underline' >Shop Now</button>
                        </div>
                        <div className="image w-[312px] h-[173px]  ml-auto ">
                            <img src="/ban02.png" alt="" className='w-full h-full object-cover' />
                        </div>

                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-3 items-center'>
                            <div className="image w-[107px] h-[74px] bg-[#F5F6F8] p-5">
                                <img src="/Chair1.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="content ">
                                <h2 className='text-[#151875] font-josefin font-semibold text-[16px]'>Executive Seat chair</h2>
                                <p className='text-[#151875] font-josefin font-normal text-[12px]'>$32.0</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <div className="image w-[107px] h-[74px] bg-[#F5F6F8] p-6">
                                <img src="/Chair1.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="content ">
                                <h2 className='text-[#151875] font-josefin font-semibold text-[16px]'>Executive Seat chair</h2>
                                <p className='text-[#151875] font-josefin font-normal text-[12px]'>$32.0</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className="image w-[107px] h-[74px] bg-[#F5F6F8] p-5">
                                <img src="/Chair1.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="content ">
                                <h2 className='text-[#151875] font-josefin font-semibold text-[16px]'>Executive Seat chair</h2>
                                <p className='text-[#151875] font-josefin font-normal text-[12px]'>$32.0</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner03;