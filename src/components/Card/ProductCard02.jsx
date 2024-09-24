import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductCard02 = () => {
    return (
        <div className='w-[270px] group'>
            <div className="image relative overflow-hidden">
                <img src='/sale.svg' className='absolute -top-full group-hover:top-[10px] left-4   py-2 px-3 transition-all duration-500' />
                <div className='bg-[#F6F7FB] flex justify-center items-center p-6'>
                    <img src="/Chair1.png" alt="" />
                </div>
                <div className="icons absolute bottom-6 -left-full group-hover:left-4 flex flex-col gap-2 transition-all duration-500">
                    <Link className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center'><IoCartOutline /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center'><FaRegHeart /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center'><MdOutlineReviews /></Link>
                </div>


            </div>
            <div className="content">
                <h2 className='text-lg font-bold leading-[22px] text-[#FB2E86] group-hover:text-white transition-all duration-500'>cantilever chair</h2>
                <div><p>$ <span></span></p>
                <p>$ <span></span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard02;