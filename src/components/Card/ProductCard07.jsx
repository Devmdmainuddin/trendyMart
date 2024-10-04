import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addToCart } from '../../Featured/CartAPI/cartSlice';

const ProductCard07 = ({item}) => {
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
        <div className='w-full flex flex-col items-center lg:items-start  p-4 lg:flex-row gap-8 group shadow-cusboxhadow'>
            <div>
            <div className="image w-full md:w-[287px] h-[194px] relative overflow-hidden">
                <img src='/sale.svg' className='absolute -top-full group-hover:top-[10px] left-4   py-2 px-3 transition-all duration-500' />
                <div className='bg-[#F6F7FB] w-full h-full flex justify-center items-center p-6'>
                    <img src={item.image} alt="" className='w-full h-full object-contain' />
                </div>
            </div>
            </div>
           
            <div className="w-full content flex flex-col gap-4  py-4">
                <div className='flex gap-4 items-center lg:justify-start justify-between'>
                <Link  to={`/product/${item._id}`}> <h2 className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 capitalize cursor-pointer'>{item.title}</h2> </Link>  
                    <div className='color flex gap-2 items-center'>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#DE9034]'></div>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#EC42A2]'></div>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#8568FF]'></div>
                    </div>
                </div>

                <div className='flex items-center justify-between lg:justify-start gap-4'>
                    <div className='text-sm font-josefin font-normal flex gap-2'>
                        <p>$ <span >{item.price}</span></p>
                        <p className='text-sm font-josefin font-normal text-[#FB2E86] line-through'>$ <span>{item.price}</span></p>
                    </div>
                    <div className='flex gap-3 '>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#FFC416] text-sm' /></span>
                        <span><FaStar className='text-[#B2B2B2] text-sm' /></span>

                    </div>
                </div>
                <p className='text-[#9295AA] max-w-[478px] font-normal text-center lg:text-start text-[17px]'>{item.descaption.slice(0,150)}</p>
                <div className="icons  flex items-center justify-center lg:items-start lg:justify-start  gap-2 ">
                    <Link onClick={() => handlecard(item)} className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><IoCartOutline /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><FaRegHeart /></Link>
                    <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><MdOutlineReviews /></Link>
                </div>
            </div>
        </div>
    //     <div className='flex flex-col items-center lg:items-start  p-4 lg:flex-row gap-8 group shadow-cusboxhadow'>
    //     <div>
    //     <div className="image w-[287px] h-[194px] relative overflow-hidden">
    //         <img src='/sale.svg' className='absolute -top-full group-hover:top-[10px] left-4   py-2 px-3 transition-all duration-500' />
    //         <div className='bg-[#F6F7FB] w-full h-full flex justify-center items-center p-6'>
    //             <img src="/Chair1.png" alt="" className='w-full h-full object-contain' />
    //         </div>
    //     </div>
    //     </div>
       
    //     <div className="content flex flex-col gap-4  py-4">
    //         <div className='flex gap-4 items-center lg:justify-start justify-between'>
    //             <h2 className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 capitalize'>cantilever chair</h2>
    //             <div className='color flex gap-2 items-center'>
    //                 <div className='w-[10px] h-[10px] rounded-full bg-[#DE9034]'></div>
    //                 <div className='w-[10px] h-[10px] rounded-full bg-[#EC42A2]'></div>
    //                 <div className='w-[10px] h-[10px] rounded-full bg-[#8568FF]'></div>
    //             </div>
    //         </div>

    //         <div className='flex items-center justify-between lg:justify-start gap-4'>
    //             <div className='text-sm font-josefin font-normal flex gap-2'>
    //                 <p>$ <span >42.00</span></p>
    //                 <p className='text-sm font-josefin font-normal text-[#FB2E86] line-through'>$ <span>65.00</span></p>
    //             </div>
    //             <div className='flex gap-3 '>
    //                 <span><FaStar className='text-[#FFC416] text-sm' /></span>
    //                 <span><FaStar className='text-[#FFC416] text-sm' /></span>
    //                 <span><FaStar className='text-[#FFC416] text-sm' /></span>
    //                 <span><FaStar className='text-[#FFC416] text-sm' /></span>
    //                 <span><FaStar className='text-[#B2B2B2] text-sm' /></span>

    //             </div>
    //         </div>
    //         <p className='text-[#9295AA] max-w-[478px] font-normal text-center lg:text-start text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
    //         <div className="icons  flex items-center justify-center lg:items-start lg:justify-start  gap-2 ">
    //             <Link className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center'><IoCartOutline /></Link>
    //             <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center'><FaRegHeart /></Link>
    //             <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center'><MdOutlineReviews /></Link>
    //         </div>
    //     </div>
    // </div>
    );
};

export default ProductCard07;