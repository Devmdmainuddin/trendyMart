import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard04 = ({product}) => {
    return (
        
        <div className='w-[269px] group '>
           
            
            {/* <div className='relative w-[269px] h-[269px] bg-[#9877E7] rounded-full group'>
                <div className='w-[269px] h-[269px] z-50 bg-[#F6F7FB] flex justify-center items-center absolute top-0 right-0 group-hover:-top-2 group-hover:-right-2 rounded-full transition-all duration-500'>
                    <div className="image w-[178px] h-[178px] bg-[#F6F7FB]">
                        <img src="/Chair1.png" alt="" className='w-full h-full object-cover bg-[#F6F7FB] rounded-full' />
                    </div>
                </div>
            </div> */}
            {/* shadow-[rgba(149,117,230,1)_-5px_5px_1px_2px] */}
            {/* box-shadow: 0px 12px 40px 0px rgba(49, 32, 138, 0.1) */}
            <div className=' group'>
                <div className='w-[269px] h-[269px]  bg-[#F6F7FB] flex justify-center items-center  group-hover:shadow-[-5px_5px_1px_2px_rgba(149,117,230,1)] rounded-full transition-all duration-500'>
                    <div className="image w-[269px] h-[269px] bg-[#F6F7FB] rounded-full shadow-[0px_12px_40px_0px_rgba(49,32,138,.1)] p-[52px]">
                        <img src={product.image} alt="" className='w-full h-full object-cover bg-[#F6F7FB] rounded-full' />
                    </div>
                </div>
            </div>



            <div className="content mt-6">
              <Link to={`/product/${product._id}`}><h2 className='text-xl text-[#151875] hover:text-[#FB2E86] text-center font-josefin font-semibold  transition-all duration-500 cursor-pointer'>{product.title}</h2></Link>  
                <p className='font-bold text-[#151875] text-center mt-2'>$ <span>{product.price}</span></p>
            </div>

        </div>
    );
};

export default ProductCard04;