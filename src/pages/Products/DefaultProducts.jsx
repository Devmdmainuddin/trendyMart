import React from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import FilterBar from '../../components/Shared/FilterBar';
import ProductCard06 from '../../components/Card/ProductCard06';
import Container from '../../components/Shared/Container';
import Company from '../../components/Home/Company'

const DefaultProducts = () => {
    return (
        <div>
        <Bredcumb></Bredcumb>
        <FilterBar></FilterBar>
        <Container>
        <div className='flex gap-[15px] flex-wrap justify-center md:justify-between  mt-[58px]'>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
            <ProductCard06></ProductCard06>
        </div>
        <Company></Company>
        </Container>
        
    </div>
    );
};

export default DefaultProducts;