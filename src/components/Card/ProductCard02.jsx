import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductCard02 = ({item}) => {
    return (
        <div className='w-[360px] group'>
            <div className="image w-[360px] h-[270px] relative overflow-hidden">
                <img src='/sale.svg' className='absolute -top-full group-hover:top-[10px] left-4   py-2 px-3 transition-all duration-500' />
                <div className='bg-[#F6F7FB] w-full h-full flex justify-center items-center p-6'>
                    <img src={item.image} alt=""  className='w-full h-full object-contain'/>
                </div>
                <div className="icons absolute bottom-6 -left-full group-hover:left-4 flex flex-col gap-2 transition-all duration-500">
                    <Link className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center'><IoCartOutline /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center'><FaRegHeart /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center'><MdOutlineReviews /></Link>
                </div>


            </div>
            <div className="content flex justify-between items-baseline py-4">
                <h2 className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 capitalize'>{item.title}</h2>
                <div className='text-sm font-josefin font-normal flex gap-2'><p>$ <span >42.00</span></p>
                <p className='text-sm font-josefin font-normal text-[#FB2E86] line-through'>$ <span>65.00</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard02;