import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard02 from '../Card/ProductCard02';

const Leatest = () => {
    return (
        <div>
            <Container>
                <Heading text='Leatest Products' className='text-center mt-6 md:mt-[129px]'></Heading>
                <div className='flex justify-center md:mt-[18px]'>
                    <ul className='flex gap-4 lg:gap-[60px] flex-wrap mt-5 items-center'>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>New Arrival</button></li>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Best Seller</button></li>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Featured</button></li>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Special Offer</button></li>
                       
                    </ul>
                </div>
                <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>

                </div>
            </Container>
        </div>
    );
};

export default Leatest;