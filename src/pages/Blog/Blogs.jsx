import React from 'react';
import ProductCard06 from '../../components/Card/ProductCard06';
import ProductCard07 from '../../components/Card/ProductCard07';
import ProductCard08 from '../../components/Card/ProductCard08';
import Bredcumb from '../../components/Shared/Bredcumb';
import Sidebar from '../../components/Shared/Sidebar';
import FilterBar from '../../components/Shared/FilterBar';
import Container from '../../components/Shared/Container';

const Blogs = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>
            <FilterBar></FilterBar>
            <Container>
                <div className='flex gap-6'>
                    <Sidebar></Sidebar>
                    <div><h2>blog page</h2>
                        <ProductCard06></ProductCard06>
                        <ProductCard07></ProductCard07>
                        <ProductCard08></ProductCard08></div>
                </div>
            </Container>


        </div>
    );
};

export default Blogs;