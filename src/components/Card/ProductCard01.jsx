import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addToCart } from '../../Featured/CartAPI/cartSlice';

const ProductCard01 = ({item}) => {
    let [Quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    // add to cart
    const handlecard = async i => {
        try {
            dispatch(addToCart({ ...i, qun: Quantity, }))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your items has been add to cart",
                showConfirmButton: false,
                timer: 1500
            });
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " product  cart not add  ",
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    return (
        <div className='w-[270px] group'>
            <div className="image w-[270px] h-[236px] relative overflow-hidden">
                <div className="icons absolute top-[11px] -left-full group-hover:left-[11px] flex gap-2 transition-all duration-500">
                    <button onClick={() => handlecard(item)} className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><IoCartOutline /></button>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><FaRegHeart /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><MdOutlineReviews /></Link>
                </div>
                <div className='w-full h-full bg-[#F6F7FB] flex justify-center items-center p-6'>
                    <img src={item.image} alt="" className='w-full h-full object-contain'/>
                    </div>
                <Link to={`/product/${item._id}`} >
                <button className='absolute -bottom-full group-hover:bottom-[10px] left-1/2 -translate-x-1/2 capitalize text-white bg-[#08D15F] py-2 px-3 transition-all duration-500'>View Details</button>
                </Link>
                
                
            </div>
            <div className="content text-center py-4 group-hover:bg-[#2F1AC4] text-white transition-all duration-500">
                <h2 className='text-lg font-bold leading-[22px] text-[#FB2E86] group-hover:text-white transition-all duration-500'>{item.title}</h2>
                <div className='flex justify-center gap-[5px] my-3'>
                    <span className='w-[14px] h-1 bg-[#05E6B7]'></span>
                    <span className='w-[14px] h-1 bg-[#F701A8]'></span>
                    <span className='w-[14px] h-1 bg-[#00009D] group-hover:bg-white transition-all duration-500'></span>
                </div>
                <p className='text-sm font-josefin font-normal text-[#151875] group-hover:text-white transition-all duration-500'>code <span>Y523201</span></p>
                <p className='text-sm font-normal text-[#151875] group-hover:text-white transition-all duration-500'>$ <span>{item.price}</span></p>

            </div>
        </div>
    //     <div className='w-[270px] group'>
    //     <div className="image w-[270px] h-[236px] relative overflow-hidden">
    //         <div className="icons absolute top-[11px] -left-full group-hover:left-[11px] flex gap-2 transition-all duration-500">
    //             <Link className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center'><IoCartOutline /></Link>
    //             <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center'><FaRegHeart /></Link>
    //             <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center'><MdOutlineReviews /></Link>
    //         </div>
    //         <div className='w-full h-full bg-[#F6F7FB] flex justify-center items-center p-6'>
    //             <img src="/Chair1.png" alt="" className='w-full h-full object-contain'/>
    //             </div>
            
    //         <button className='absolute -bottom-full group-hover:bottom-[10px] left-1/2 -translate-x-1/2 capitalize text-white bg-[#08D15F] py-2 px-3 transition-all duration-500'>View Details</button>
            
    //     </div>
    //     <div className="content text-center py-4 group-hover:bg-[#2F1AC4] text-white transition-all duration-500">
    //         <h2 className='text-lg font-bold leading-[22px] text-[#FB2E86] group-hover:text-white transition-all duration-500'>cantilever chair</h2>
    //         <div className='flex justify-center gap-[5px] my-3'>
    //             <span className='w-[14px] h-1 bg-[#05E6B7]'></span>
    //             <span className='w-[14px] h-1 bg-[#F701A8]'></span>
    //             <span className='w-[14px] h-1 bg-[#00009D] group-hover:bg-white transition-all duration-500'></span>
    //         </div>
    //         <p className='text-sm font-josefin font-normal text-[#151875] group-hover:text-white transition-all duration-500'>code <span>Y523201</span></p>
    //         <p className='text-sm font-normal text-[#151875] group-hover:text-white transition-all duration-500'>$ <span>42</span></p>

    //     </div>
    // </div>
    );
};

export default ProductCard01;