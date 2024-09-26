import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import { IoSearch } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
    return (
        <nav>
            <Container>
                <div className='flex justify-between  items-center py-4'>
                <div className="logo"><img src="/Hekto.png" alt="logo" /></div>
                <div>
                    <ul className="lg:flex gap-[35px] text-[#0D0E43] text-[16px] font-normal text-center lg:text-start absolute lg:static duration-300 ease-in-out z-[9999999] hidden top-[-100px] right-0">
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/">Home</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/products">Products</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/blogs">Blog</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/blogs">Shop</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/about">About</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/contact">Contact</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/FAQ">FAQ</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/cart">cart</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/orderComplete">orderComplete</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/checkout">checkout</NavLink></li>
                        <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/myAccount/login">My Account</NavLink></li>
                    </ul>
                </div>
                <div className='flex items-center h-10'>
                    <input type="text" name="" id=""  className='bg-[#D9D9D9] border-none outline-none h-full px-3'/>
                    <div className='w-[50px] h-full bg-[#FB2E86] flex items-center justify-center text-white'>
                    <IoSearch  className=' text-2xl '/>
                    </div>

            
                </div>
                <div className='inline-block lg:hidden'>
                    <p><IoMdMenu  className='text-[#0D0E43] text-3xl'/></p>
                </div>
                </div>
                

            </Container>

        </nav>
    );
};

export default Navbar;