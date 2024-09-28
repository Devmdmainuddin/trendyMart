import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='bg-[#EEEFFB] py-[94px] mt-[115px]'>
                    <Container>
                        <div className='flex flex-wrap gap-[70px]'>
                            <div className='md:w-2/5'>
                                <img src="/Hekto.png" alt="" className='w-[110px] h-[38px]' />
                                <div className='mt-8 w-auto md:w-[377px]'>
                                    <input type="email" name="" id="" placeholder='Enter Email Address' className='py-2 px-3 md:py-[14px] text-[#8A8FB9]  md:px-6 border-0 outline-0' />
                                    <button className='capitalize bg-[#FB2E86] text-white text-[17px] font-semibold py-2 px-3 md:py-[14px] md:px-6'>sign up</button>

                                </div>
                                <h4 className='text-[#8A8FB9] mt-6'>Contact Info</h4>
                                <p className='text-[#8A8FB9] mt-2'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            </div>
                            {/* 01 */}
                            <div >
                                <h5 className="text-black font-medium">Catagories</h5>
                                <ul className="flex flex-col mt-[42px] gap-3 ">
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Laptops & Computers</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Cameras & Photography</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Smart Phones & Tablets</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Video Games & Consoles</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Waterproof Headphones</Link></li>

                                </ul>
                            </div>
                            {/* 02 */}
                            <div>
                                <h5 className="text-black font-medium">Customer Care</h5>
                                <ul className="flex flex-col mt-[42px] gap-3 ">
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>My Account</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Discount</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Returns</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Order history</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Order Tracking</Link></li>

                                </ul>
                            </div>
                            {/* 03 */}
                            <div >
                                <h5 className="text-black font-medium">Pages</h5>
                                <ul className="flex flex-col mt-[42px] gap-3 ">
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Blog</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Browse the Shop</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Category</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Pre-Built Pages</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>Visual Composer Elements</Link></li>
                                    <li><Link className='text-[#8A8FB9] hover:text-[#FB2E86] transition-all duration-500 hover:ml-1'>WooCommerce Pages</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='bg-[#E7E4F8] py-4 '>
                    <Container>
                        <div className=' flex justify-between px-[68px]'>
                            <p className='text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>
                            <ul className='flex gap-3 '>
                                <li> <Link><FaFacebook /></Link></li>
                                <li> <Link><FaTwitter /></Link></li>
                                <li> <Link><FaInstagramSquare /></Link></li>
                            </ul>

                        </div>
                    </Container>
                </div>


            </footer>
        </>

    );
};

export default Footer;