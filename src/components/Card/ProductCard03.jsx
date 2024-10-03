import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductCard03 = ({item}) => {
    return (
        <div className='w-[270px] group  bg-white shadow-customshadow p-3 overflow-hidden'>
            <div className='relative w-[247px] h-[244px]  flex justify-center items-center '>
                <img src={item.image} alt="" className='w-full h-full object-contain' />
                <div className="icons absolute bottom-6 -left-full group-hover:left-4 flex flex-col gap-2 transition-all duration-500">
                    <Link onClick={() => handlecard(item)} className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center'><IoCartOutline /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center'><FaRegHeart /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center'><MdOutlineReviews /></Link>
                </div>
            </div>
            <div className="content mt-4">
            <Link  to={`/product/${item._id}`}> <h2 className='text-2xl text-[#151875] hover:text-[#FB2E86] text-center font-josefin font-semibold  transition-all duration-500'>{item.title}</h2></Link>  
                <div className='flex items-center justify-center gap-2 mt-2 mb-5'>
                    <p className='font-bold text-[#151875]'>$ <span>{item.price} </span></p>
                    <p className='font-bold text-[#15187587]'>$ <span>{item.price}</span></p>
                </div>
            </div>

        </div>
    );
};

export default ProductCard03;