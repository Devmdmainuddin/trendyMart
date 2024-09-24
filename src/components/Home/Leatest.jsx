import React from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard02 from '../Card/ProductCard02';

const Leatest = () => {
    return (
        <div>
            <Container>
                <Heading text='Leatest Products' className='text-center'></Heading>
                <div className='flex gap-[30px] flex-wrap mx-auto'>
                    <ProductCard02></ProductCard02>

                </div>
            </Container>
        </div>
    );
};

export default Leatest;