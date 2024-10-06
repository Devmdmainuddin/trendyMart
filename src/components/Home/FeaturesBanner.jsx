import React from 'react';
import Container from '../Shared/Container';

const FeaturesBanner = () => {
    return (
        <div className='bg-[#F1F0FF] mt-[135px]'>

            <Container>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 '>
                    <div>
                        <div className="image  lg:w-[500px] lg:h-[500px]">
                            <img src="/fuban.png" alt="" className='w-full h-full object-cover inline-block' />
                        </div>
                    </div>

                    <div className="content">
                        <h2 className='max-w-[507px] text-xl md:text-[35px] text-[#151875] font-josefin font-bold leading-relaxed'>Unique Features Of leatest &
                            Trending Poducts</h2>
                        <ul className='max-w-[461px] mt-[32px]'>
                            <li className='flex gap-4 items-center '><span className='bg-[#F52B70] w-[11px] h-[11px] rounded-full'></span>All frames constructed with hardwood solids and laminates</li>

                            <li className='flex gap-4 items-start mt-[13px]'><span className='bg-[#2B2BF5] block w-[11px] h-[11px] rounded-full'></span>Reinforced with double wood dowels, glue, screw - nails corner
                            </li>
                            <li className='flex gap-4 items-center mt-[13px]'><span className='bg-[#2BF5CC] w-[11px] h-[11px] rounded-full'></span> Arms, backs and seats are structurally reinforced</li>
                        </ul>
                        <div className='flex gap-5 items-center mt-[38px]'>
                            <button className='capitalize bg-[#FB2E86] text-white text-[17px] font-semibold md:py-[14px] p-2 md:px-6'>add to cart</button>
                            <div>
                                <h3 className='text-[#151875] text-sm font-josefin font-semibold'>B&B Italian Sofa </h3>
                                <p className='text-[#151875] text-sm font-josefin font-normal'>$ <span>32.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
         
        </div>

    );
};

export default FeaturesBanner;