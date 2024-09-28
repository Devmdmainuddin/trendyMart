import React from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import FilterBar from '../../components/Shared/FilterBar';
import ProductCard06 from '../../components/Card/ProductCard06';
import Container from '../../components/Shared/Container';
import Company from '../../components/Home/Company'
import ProductCard07 from '../../components/Card/ProductCard07';
import ProductCard08 from '../../components/Card/ProductCard08';

const ShopList = () => {
    return (
        <div>
        <Bredcumb></Bredcumb>
        <FilterBar></FilterBar>
        <Container>
        <div className=' flex gap-[15px] flex-wrap justify-center md:justify-between  mt-[58px]'>
            
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
            <ProductCard07></ProductCard07>
        </div>
        <Company></Company>
        </Container>
        
    </div>
    );
};

export default ShopList;