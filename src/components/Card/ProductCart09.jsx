import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';
const ProductCart09 = () => {
    return (
        <div className='w-[209px] group'>
            <div className="image w-[209px] h-[254px] relative overflow-hidden">
                <img src='/sale.svg' className='absolute -top-full group-hover:top-[10px] left-4   py-2 px-3 transition-all duration-500' />
                <div className='bg-[#F6F7FB] w-full h-full flex justify-center items-center p-6'>
                    <img src="/Chair1.png" alt="" className='w-full h-full object-contain' />
                </div>



            </div>
            <div className="content flex flex-col gap-4  py-4">
                <div className='flex gap-4 justify-between items-center'>
                    <h2 className='text-[19px] font-semibold   text-black hover:text-[#FB2E86] transition-all duration-500 capitalize'>cantilever chair</h2>
                    
                </div>

                <div className='flex items-center justify-between gap-4'>
                    <div className='text-[14px] font-josefin font-normal flex gap-2'>
                        <p className='text-[#151875]'>$ <span >42.00</span></p>
                        <p className='  text-[#FB2E86] line-through'>$ <span>65.00</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <span><FaStar className='text-[#FFC416] text-[12px]' /></span>
                        <span><FaStar className='text-[#FFC416] text-[12px]' /></span>
                        <span><FaStar className='text-[#FFC416] text-[12px]' /></span>
                        <span><FaStar className='text-[#FFC416] text-[12px]' /></span>
                        <span><FaStar className='text-[#B2B2B2] text-[12px]' /></span>

                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ProductCart09;