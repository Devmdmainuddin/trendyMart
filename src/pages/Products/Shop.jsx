import React, { useEffect, useMemo, useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import FilterBar from '../../components/Shared/FilterBar';
import Sidebar from '../../components/Shared/Sidebar';
import ProductCard07 from '../../components/Card/ProductCard07';
import Container from '../../components/Shared/Container';
import Company from '../../components/Home/Company';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import PaginatedItems from '../../components/Shared/PaginatedItems';
import PaginatedItem from '../../components/Shared/PaginatedItem';

const Shop = () => {
    const [number, setNumber] = useState(12)
    const [sortOrder, setSortOrder] = useState('new');
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder })
    const [item, setItem] = useState(data)
    const [cetegorey, setCategorey] = useState([])
    const [brand, setBrand] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);

// Handle category change
const handleCategoriesChange = (event) => {
    const value = event.target.value;
    setSelectedCategories((prevSelected) =>
        prevSelected.includes(value)
            ? prevSelected.filter((item) => item !== value)
            : [...prevSelected, value]
    );
};

// Handle brand change
const handleBrandChange = (event) => {
    const value = event.target.value;
    setSelectedBrand((prevSelected) =>
        prevSelected.includes(value)
            ? prevSelected.filter((item) => item !== value)
            : [...prevSelected, value]
    );
};


    
// Memoize filtered data based on selected categories and brands
const filteredItems = useMemo(() => {
    if (!data) return [];

    return data.filter((item) => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.categorys.category);
        const matchesBrand = selectedBrand.length === 0 || selectedBrand.includes(item.brand);
        return matchesCategory && matchesBrand;
    });
}, [data, selectedCategories, selectedBrand]);

 
    useEffect(() => {
        if(data){
            setCategorey([... new Set(data?.map(item => item.categorys.category))])
            setBrand([... new Set(data?.map(item => item.brand))])
            setItem(data)
        }
        
    }, [data])
    useEffect(() => {
        setItem(filteredItems);
    }, [filteredItems]);

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
        content =  <PaginatedItem item={item} itemsPerPage={number}></PaginatedItem>
    }
    return (
        <div>
        <Bredcumb></Bredcumb>
        <FilterBar handleByNew={handleByNew} handleByOld={handleByOld} selectNumber={selectNumber}     ></FilterBar>
        <Container>
        <div className='flex gap-[18px] justify-between flex-col md:flex-row  mt-16 md:mt-[125px]'>
            <div className=''>
                <Sidebar cetegorey={cetegorey} handleCategoriesChange={handleCategoriesChange} selectedCategories={selectedCategories} brand={brand}  handleBrandChange={handleBrandChange} selectedBrand={selectedBrand}></Sidebar>
            </div>
            <div className='flex flex-col gap-8 w-full'>
            {data ? content : <p>no product</p>}
                {/* <ProductCard07></ProductCard07>
                <ProductCard07></ProductCard07>
                <ProductCard07></ProductCard07>
                <ProductCard07></ProductCard07>
                <ProductCard07></ProductCard07>
                <ProductCard07></ProductCard07> */}

            </div>

        </div>
        </Container>
        <Company></Company>
        

    </div>
    );
};

export default Shop;