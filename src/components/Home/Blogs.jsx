import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard05 from '../Card/ProductCard05';

const Blogs = () => {
    return (
        <div className='mt-6 md:mt-16 lg:mt-[96px]'>
            <Container>
                <Heading text='Leatest Blog' className='text-center'></Heading>
                <div className='flex gap-[40px] justify-center flex-wrap mx-auto mt-9 md:mt-[80px] md:justify-between'>
                    <ProductCard05></ProductCard05>
                    <ProductCard05></ProductCard05>
                    <ProductCard05></ProductCard05>

                </div>

            </Container>
            
        </div>
    );
};

export default Blogs;