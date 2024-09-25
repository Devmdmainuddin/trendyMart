import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard03 from '../Card/ProductCard03';

const Trending = () => {
    return (
        <div>
            <Container>
                <Heading text='trending products' className='text-center mt-[128px]'></Heading>
                <div className='flex gap-[30px] justify-center flex-wrap mx-auto mt-10'>
                <ProductCard03></ProductCard03>
                <ProductCard03></ProductCard03>
                <ProductCard03></ProductCard03>
                <ProductCard03></ProductCard03>
                </div>
            </Container>
        </div>
    );
};

export default Trending;