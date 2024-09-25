import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import { FaCheck } from 'react-icons/fa';

const DiscountItem = () => {
    return (
        <div>
            <Container>
                <Heading text='Discount Item' className='text-center mt-6 md:mt-[129px]'></Heading>
                <div className='flex justify-center md:mt-[18px]'>
                    <ul className='flex gap-6 md:mt-5 items-center'>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Wood Chair</button></li>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Plastic Chair</button></li>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Sofa Colletion</button></li>


                    </ul>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between'>
                    <div className="content">
                        <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>23% off in all products</h2>
                        <h3 className='text-[#FB2E86] text-[21px] font-josefin font-normal mt-4'>Eams Sofa Compact</h3>
                        <p className=' max-w-[526px] text-[#B7BACB] font-josefin font-normal text-[17px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='grid grid-cols-2 mt-7'>
                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'><FaCheck className='hover:text-[#2c7726] transition-all duration-500'/> Material expose like metals</li>
                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500'/> Clear lines and geomatric figures</li>
                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500'/> Simple neutral colours.</li>
                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500'/> Material expose like metals</li>
                        </ul>
                        
                        <button className='text-[#FB2E86] font-josefin font-semibold mt-[36px] capitalize  inline-block underline' >Shop Now</button>
                    </div>
                    <div className="image md:w-[506px] justify-self-center">
                        <img src="/banner03.png" alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

            </Container>

        </div>
    );
};

export default DiscountItem;