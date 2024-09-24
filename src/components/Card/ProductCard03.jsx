import React from 'react';

const ProductCard03 = () => {
    return (
        <div className='w-[270px]   bg-white shadow-customshadow p-3'>
            <div className='w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center items-center p-6'>
                <img src="/Chair1.png" alt="" className='w-full h-full object-contain' />
            </div>
            <div className="content mt-4">
                <h2 className='text-2xl text-[#151875] hover:text-[#FB2E86] text-center font-josefin font-semibold  transition-all duration-500'>Cantilever chair</h2>
                <div className='flex items-center justify-center gap-2 mt-2 mb-5'>
                    <p className='font-bold text-[#151875]'>$ <span>26.00 </span></p>
                    <p className='font-bold text-[#15187587]'>$ <span>42.00</span></p>
                </div>
            </div>

        </div>
    );
};

export default ProductCard03;