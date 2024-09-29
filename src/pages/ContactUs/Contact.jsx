import React from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Container from '../../components/Shared/Container';

const Contact = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>

            <Container>
                <div className='flex justify-between flex-col lg:flex-row gap-16 lg:gap-6 mt-6 md:mt-16 lg:mt-[124px]'>
                    <div>
                        <h3 className="text-[#151875] font-josefin text-[36px] leading-[48px] font-bold ">Information About Us</h3>
                        <p className="max-w-[550px] mt-[13px] text-[#8A8FB9]  text-[16px] font-semibold leading-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className='flex gap-[14px] mt-8 md:mt-[70px]'>
                            <span className='bg-[#5625DF] w-6 h-6 rounded-full'></span>
                            <span className='bg-[#FF27B7] w-6 h-6 rounded-full'></span>
                            <span className='bg-[#37DAF3] w-6 h-6 rounded-full'></span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#151875] font-josefin text-[36px] leading-[48px] font-bold ">Contact Way</h3>
                        <div className='grid grid-cols-2 gap-9 mt-6'>
                            <div className='flex gap-[15px] items-center'>
                                <div className=' w-[45px] h-[45px] '>
                                    <p className='bg-[#5625DF] w-[45px] h-[45px] rounded-full'></p>
                                </div>


                                <div>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>Tel: 877-67-88-99</p>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>E-Mail: shop@store.com</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>

                                <div className='w-[45px] h-[45px]'>
                                    <p className='bg-[#FF27B7] w-[45px] h-[45px] rounded-full'></p>
                                </div>


                                <div>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>Support Forum</p>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>For over 24hr</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <div className='w-[45px] h-[45px]'>
                                    <p className='bg-[#FFB265] w-[45px] h-[45px] rounded-full'></p>
                                </div>


                                <div>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>20 Margaret st, London</p>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>Great britain, 3NM98-LK</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <div className='w-[45px] h-[45px]'>
                                <p className='bg-[#1BE982] w-[45px] h-[45px] rounded-full'></p>
                                </div>
                               

                                <div>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>Free standard shipping</p>
                                    <p className='text-[#8A8FB9] font-josefin font-extrabold'>on all orders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
                <div className='mt-6 md:mt-16 lg:mt-[120px]'>

                    <div className='flex justify-between gap-[56px] flex-col md:flex-row'>
                        <div>
                            <h3 className="text-[#151875] font-josefin text-[36px] font-bold ">Get In Touch</h3>
                            <p className="max-w-[550px]text-[#8A8FB9] text-[16px] font-semibold font-josefin leading-[20px] mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                            </p>
                            <form  className='mt-[46px]'>
                                <div className=" flex justify-between gap-6 items-center">
                                    <input className=" w-full   py-[13px] px-[11px] border outline-0" type="text" placeholder="Your Name*" />
                                    <input className=" w-full  py-[13px] px-[11px] border outline-0" type="email" placeholder="Your E-mail" />
                                </div>
                                <div className='mt-8'>
                                    <input className=" w-full py-[13px] px-[11px] border outline-0" type="text" placeholder="Subject*" />
                                </div>
                                <div className='mt-[47px]'>
                                    <textarea className="inputtext w-full  py-[13px] px-[11px] border outline-0 resize-none" cols="30" rows="10" placeholder="Type Your Message*"></textarea>
                                </div>
                                <button className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px]">Send Mail</button>
                            </form>
                        </div>
                        <div className=" lg:w-[683px] ">
                            <img src="/contact.jpg" alt="" className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>

            </Container>




        </div>
    );
};

export default Contact;