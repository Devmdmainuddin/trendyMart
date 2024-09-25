import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard04 from '../Card/ProductCard04';
const Categories = () => {
    return (
        <div>
            <Container>
                <Heading text='Top Categories' className='text-center mt-6 md:mt-[128px]'></Heading>
                <div className='flex gap-[30px] flex-wrap justify-center mx-auto mt-12'>
                    <ProductCard04></ProductCard04>
                    <ProductCard04></ProductCard04>
                    <ProductCard04></ProductCard04>
                    <ProductCard04></ProductCard04>
                </div>
            </Container>
        </div>
    );
};

export default Categories;