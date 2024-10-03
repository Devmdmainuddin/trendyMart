import React, { useEffect, useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
// import Container from '../../components/Shared/Container';
import FilterBar from '../../components/Shared/FilterBar';
import ProductCard06 from '../../components/Card/ProductCard06';
import Container from '../../components/Shared/Container';
import Company from '../../components/Home/Company'
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import PaginatedItems from '../../components/Shared/PaginatedItems';

const Products = () => {
    const [number, setNumber] = useState(12)
    const [sortOrder, setSortOrder] = useState('new');
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder })
    const [item, setItem] = useState(data)
    const [activeMulti, setActiveMulti] = useState(true)

    useEffect(() => {
        setItem(data)
    }, [data])


    const handleByNew = () => {
        setSortOrder('new')
    }
    const handleByOld = () => {
        setSortOrder('old')
    }
    const selectNumber = (element) => {
        let numberConverter = Number(element.target.value)
        setNumber(numberConverter)

    }


    let content;
    if (isLoading) {
        content = <h1>loading............</h1>
    }
    if (!isLoading && error) {
        content = <p>Error fetching products</p>
    }
    if (!isLoading && !error && data.length === 0) {
        content = <h1>NO POSTS FOUND</h1>
    }
    if (!isLoading && !error && data.length > 0) {
        content = <PaginatedItems item={item} itemsPerPage={number} activeMulti={activeMulti}></PaginatedItems>
    }



    return (
        <div>
            <Bredcumb></Bredcumb>
            <FilterBar setActiveMulti={setActiveMulti} handleByNew={handleByNew} handleByOld={handleByOld} selectNumber={selectNumber}></FilterBar>
            <Container>
                <div className='flex gap-[15px] flex-wrap justify-center md:justify-between  mt-[58px]'>
                    {data ? content : <p>no product</p>}
                    {/* {item?.slice(0, 6).map((items, idx) => <ProductCard06 key={idx} items={items}></ProductCard06>)} */}


                </div>
                <Company></Company>
            </Container>

        </div>
    );
};

export default Products;