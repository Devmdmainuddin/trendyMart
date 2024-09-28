import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import { IoSearch } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {

const [menu,setMenu]= useState(false)
const hendleMenu =()=>{

}
    return (
        <nav>
            <div className='bg-[#7E33E0] py-[14px] hidden md:block'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <div>
                            <ul className='flex gap-12 items-center'>
                                <li className='flex gap-2 items-center text-white text-[16px]  font-josefin font-semibold'><span></span> mhhasanul@gmail.com</li>
                                <li className='flex gap-2 items-center text-white text-[16px]  font-josefin font-semibold'><span></span> (12345)67890</li>
                            </ul>

                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                <li>
                                <select name="" id="" className='bg-transparent text-white'>
                                    <option value="English" className='text-black'>English</option>
                                    <option value="Bangla" className='text-black'>Bangla</option>
                                    </select>
                                </li>
                                <li> <select name="" id="" className='bg-transparent text-white'>
                                    <option value="USD" className='text-black'>USD</option>
                                    <option value="BD" className='text-black'>BD</option>
                                    </select>
                                    </li>
                                <li className=' text-white'> Login <span></span></li>
                                <li  className=' text-white'> wishlist <span></span></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='flex justify-between  items-center py-4'>
                    <div className="logo"><img src="/Hekto.png" alt="logo" /></div>
                    <div>
                        <ul className="lg:flex gap-[35px] text-[#0D0E43] text-[16px] font-normal text-center lg:text-start absolute lg:static duration-300 ease-in-out z-[9999999] hidden top-[-100px] right-0">
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/">Home</NavLink></li>
                            <li  class="text-[#0D0E43] hover:text-[#FB2E86] group transition-all duration-500 relative "><NavLink to='/ShopGridDefault'>Pages</NavLink>
                            <ul className='w-[170px] p-3 mt-[75px] bg-[#d4d3d33c]  absolute -top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 transition-all duration-500'>
                                <li className='text-[#0D0E43] hover:text-[#FB2E86]'><NavLink to='/ShopGridDefault'>Shop Grid Default</NavLink> </li>
                                <li className='text-[#0D0E43] hover:text-[#FB2E86] my-1'> <NavLink to='/shopList'>Shop List</NavLink> </li>
                                <li className='text-[#0D0E43] hover:text-[#FB2E86]'><NavLink to='shop_Left_Sidebar'>Shop Left Sidebar</NavLink> </li>
                                <li className='text-[#0D0E43] hover:text-[#FB2E86] my-1'><NavLink to=''></NavLink> Shop Grid a</li>
                                <li className='text-[#0D0E43] hover:text-[#FB2E86]'><NavLink></NavLink> Shop Grid b</li>
                            </ul>
                            </li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/products">Products</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/blogs">Blog</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/blogs">Shop</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/about">About</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/contact">Contact</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/FAQ">FAQ</NavLink></li>
                          
                        </ul>
                    </div>
                    <div className='flex items-center h-10'>
                        <input type="text" name="" id="" className='bg-[#D9D9D9] border-none outline-none h-full px-3' />
                        <div className='w-[50px] h-full bg-[#FB2E86] flex items-center justify-center text-white'>
                            <IoSearch className=' text-2xl ' />
                        </div>


                    </div>
                    <div className='inline-block lg:hidden'>
                        <p><IoMdMenu className='text-[#0D0E43] text-3xl' /></p>
                    </div>
                </div>


            </Container>

        </nav>
    );
};

export default Navbar;