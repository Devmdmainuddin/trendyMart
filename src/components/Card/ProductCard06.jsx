import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineReviews } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addToCart } from '../../Featured/CartAPI/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCard06 = ({item}) => {
    let [Quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const discountp = (parseInt(item?.price) * parseInt(item?.discount)) / 100
    const discountPrice = parseInt(item?.price) - discountp
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
        <div className="image w-[270px] h-[280px] relative overflow-hidden shadow-cusshadow">
        {item?.discount &&  <p className='absolute -top-full group-hover:top-[10px] left-4  py-2 px-3  bg-[#FB2E86] text-white  transition-all duration-500 rounded-md' > {item?.discount} %</p>}  
            <div className='  w-[270px] h-[280px] flex justify-center items-center '>
                <img src={item?.image} alt=""  className='w-full h-full object-cover'/>
            </div>
            <div className="icons absolute bottom-6 -left-full group-hover:left-4 flex flex-col gap-2 transition-all duration-500">
                <Link onClick={() => handlecard(item)} className='w-[30px] h-[30px] rounded-full text-[#2F1AC4] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><IoCartOutline /></Link>
                <Link className='w-[30px] h-[30px] rounded-full text-[#1389FF] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><FaRegHeart /></Link>
                <Link className='w-[30px] h-[30px] rounded-full text-[#1DB4E7] bg-[#EEEFFB] flex justify-center items-center hover:text-[#FB2E86]  transition-all duration-500'><MdOutlineReviews /></Link>
            </div>
        </div>
        <div className="content flex flex-col gap-4 items-center py-4">
         <Link  to={`/product/${item._id}`}> <h2 className='cursor-pointer text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 capitalize'>{item?.title}</h2> </Link>  
           <div className='flex gap-2 items-center'>
            <div className='w-[10px] h-[10px] rounded-full bg-[#DE9034]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-[#EC42A2]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-[#8568FF]'></div>
           </div>
            <div className='text-sm font-josefin font-normal flex gap-2'><p>{item.discount && <span > ${discountPrice}</span>}</p>
            <p className={`text-[#FB2E86]  ${item.discount ? 'line-through' : ''}`}>$ <span>{item.price}</span></p>
            </div>
        </div>
    </div>
    );
};

export default ProductCard06;