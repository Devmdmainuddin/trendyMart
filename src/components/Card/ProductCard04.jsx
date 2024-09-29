import React from 'react';

const ProductCard04 = ({product}) => {
    return (
        
        <div className='w-[269px] group '>
            {/* <div className='relative w-[269px] h-[269px] bg-[#9877E7]   rounded-full'>
            <div className='w-[269px] h-[269px] z-50 bg-[#F6F7FB] flex justify-center items-center absolute  group-hover:-top-2 group-hover:-right-2  rounded-full transition-all duration-500 '>
                <div className="image w-[178px] h-[178px] bg-[#F6F7FB]">
                    <img src="/Chair1.png" alt="" className=' w-full h-full object-cover bg-[#F6F7FB] rounded-full' />
                </div>
            </div>
            </div> */}
            
            {/* <div className='relative w-[269px] h-[269px] bg-[#9877E7] rounded-full group'>
                <div className='w-[269px] h-[269px] z-50 bg-[#F6F7FB] flex justify-center items-center absolute top-0 right-0 group-hover:-top-2 group-hover:-right-2 rounded-full transition-all duration-500'>
                    <div className="image w-[178px] h-[178px] bg-[#F6F7FB]">
                        <img src="/Chair1.png" alt="" className='w-full h-full object-cover bg-[#F6F7FB] rounded-full' />
                    </div>
                </div>
            </div> */}
            {/* shadow-[rgba(149,117,230,1)_-5px_5px_1px_2px] */}
            <div className=' group'>
                <div className='w-[269px] h-[269px]  bg-[#F6F7FB] flex justify-center items-center  group-hover:shadow-[-5px_5px_1px_2px_rgba(149,117,230,1)] rounded-full transition-all duration-500'>
                    <div className="image w-[178px] h-[178px] bg-[#F6F7FB]">
                        <img src="/Chair1.png" alt="" className='w-full h-full object-cover bg-[#F6F7FB] rounded-full' />
                    </div>
                </div>
            </div>



            <div className="content mt-6">
                <h2 className='text-xl text-[#151875] hover:text-[#FB2E86] text-center font-josefin font-semibold  transition-all duration-500'>Cantilever chair</h2>
                <p className='font-bold text-[#151875] text-center mt-2'>$ <span>26.00 </span></p>
            </div>

        </div>
    );
};

export default ProductCard04;