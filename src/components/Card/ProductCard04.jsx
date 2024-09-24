import React from 'react';

const ProductCard04 = () => {
    return (
        <div className='w-[269px] group '>
            <div className='relative w-[269px] h-[269px] bg-[#7a3ad4]   rounded-full'>
            <div className='w-[269px] h-[269px] bg-[#F6F7FB] flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 group-hover:-top-2  rounded-full transition-all duration-500 '>
                <div className="image w-[178px] h-[178px] bg-[#F6F7FB]">
                    <img src="/Chair1.png" alt="" className=' w-full h-full object-cover bg-[#F6F7FB] rounded-full' />
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