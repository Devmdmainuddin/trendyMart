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
    const [number, setNumber] = useState(3)
    const [sortOrder, setSortOrder] = useState('new');
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder })
    const [item, setItem] = useState([])
    const [cetegorey, setCategorey] = useState([])
    const [brand, setBrand] = useState([])
    const [colors, setColors] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [activeMulti, setActiveMulti] = useState(true)

    // console.log(data);


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

   // Handle price range selection
   const handlePriceChange = (range) => {
    setSelectedRanges((prevSelectedRanges) => {
        const isSelected = prevSelectedRanges.some(
            (r) => r[0] === range[0] && r[1] === range[1]
        );
        if (isSelected) {
            return prevSelectedRanges.filter(
                (r) => r[0] !== range[0] || r[1] !== range[1]
            );
        } else {
            return [...prevSelectedRanges, range];
        }
    });
};


 const filteredItems = useMemo(() => {
        if (!data) return [];

        return data.filter((item) => {
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.categorys.category);
            const matchesBrand = selectedBrand.length === 0 || selectedBrand.includes(item.brand);
            const matchesPrice = selectedRanges.length === 0 || selectedRanges.some( (range) => item.price >= range[0] && item.price <= range[1]);
            return matchesCategory && matchesBrand && matchesPrice;
        });
    }, [data, selectedCategories, selectedBrand,selectedRanges]);

    useEffect(() => {
        if (data) {
            setCategorey([... new Set(data?.map(item => item.categorys.category))])
            setBrand([... new Set(data?.map(item => item.brand))])
            setColors([... new Set(data?.map(item => item.color))])
            setItem(data)
        }

    }, [data])
    useEffect(() => {
        setItem(filteredItems);
    }, [filteredItems]);


    const handlebrandfilter = filter => {
        const filterItem = data?.filter(items => items.color === filter);
        setItem(filterItem);
    }




    
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
    if (!isLoading && !error && data.length === 0 ) {
        content = <h1>NO POSTS FOUND</h1>
    }
    if (!isLoading && !error && data.length > 0  ) {
            content = <PaginatedItem item={item} itemsPerPage={number} activeMulti={activeMulti}></PaginatedItem>
  



    }
    return (
        <div>
            <Bredcumb></Bredcumb>
            <FilterBar setActiveMulti={setActiveMulti} handleByNew={handleByNew} handleByOld={handleByOld} selectNumber={selectNumber}     ></FilterBar>
            <Container>
                <div className='flex gap-[18px] justify-between flex-col md:flex-row  mt-16 md:mt-[125px]'>
                    <div className=''>
                        <Sidebar handlebrandfilter={handlebrandfilter} colors={colors}  handlePriceChange={handlePriceChange} selectedRanges={selectedRanges} cetegorey={cetegorey} handleCategoriesChange={handleCategoriesChange} selectedCategories={selectedCategories} brand={brand} handleBrandChange={handleBrandChange} selectedBrand={selectedBrand}></Sidebar>
                    </div>
                    <div className='flex flex-wrap gap-8 w-full'>
                        {data ? content : <p>no product</p>}
                        {/*  <ProductCard07></ProductCard07> */}

                    </div>

                </div>
            </Container>
            <Company></Company>


        </div>
    );
};

export default Shop;