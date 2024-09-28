import React from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import FilterBar from '../../components/Shared/FilterBar';
import Sidebar from '../../components/Shared/Sidebar';
import ProductCard06 from '../../components/Card/ProductCard06';
import ProductCard07 from '../../components/Card/ProductCard07';
import ProductCard08 from '../../components/Card/ProductCard08';
import Container from '../../components/Shared/Container';

const ShopLeftSidebar = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>
            <FilterBar></FilterBar>
            <Container>
            <div className='flex gap-[18px] justify-between flex-col md:flex-row  mt-16 md:mt-[125px]'>
                <div className=''>
                    <Sidebar></Sidebar>
                </div>
                <div className='flex flex-col gap-8 w-full'>
                   
                    <ProductCard07></ProductCard07>
                    <ProductCard07></ProductCard07>
                    <ProductCard07></ProductCard07>
                    <ProductCard07></ProductCard07>
                    <ProductCard07></ProductCard07>
                    <ProductCard07></ProductCard07>
                   
                </div>

            </div>
            </Container>
            

        </div>
    );
};

export default ShopLeftSidebar;