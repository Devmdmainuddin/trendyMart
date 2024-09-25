import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductCard07 = () => {
    return (
        <div className='flex flex-col md:flex-row gap-8 group'>
            <div className="image w-[313px] h-[217px] relative overflow-hidden">
                <img src='/sale.svg' className='absolute -top-full group-hover:top-[10px] left-4   py-2 px-3 transition-all duration-500' />
                <div className='bg-[#F6F7FB] w-full h-full flex justify-center items-center p-6'>
                    <img src="/Chair1.png" alt="" className='w-full h-full object-contain' />
                </div>
                


            </div>
            <div className="content flex flex-col gap-4  py-4">
                <div className='flex gap-4 items-center'>
                    <h2 className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 capitalize'>cantilever chair</h2>
                    <div className='color flex gap-2 items-center'>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#DE9034]'></div>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#EC42A2]'></div>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#8568FF]'></div>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='text-sm font-josefin font-normal flex gap-2'>
                        <p>$ <span >42.00</span></p>
                        <p className='text-sm font-josefin font-normal text-[#FB2E86] line-through'>$ <span>65.00</span></p>
                    </div>
                    <div className='flex gap-3 '>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#B2B2B2] text-sm' /></span>

                    </div>
                </div>
                <p className='text-[#9295AA] max-w-[525px] font-normal text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <div className="icons  flex  gap-2 ">
                    <Link className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center'><IoCartOutline /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center'><FaRegHeart /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center'><MdOutlineReviews /></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard07;