import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard01 from '../Card/ProductCard01';

const Featured = () => {
    return (
        <div>
            <Container>
                <Heading text='Featured Products' className='text-center'></Heading>
                <div className='flex gap-[30px] flex-wrap mx-auto'>
                    <ProductCard01></ProductCard01>
                    <ProductCard01></ProductCard01>
                    <ProductCard01></ProductCard01>
                    <ProductCard01></ProductCard01>
                </div>
            </Container>
        </div>
    );
};

export default Featured;