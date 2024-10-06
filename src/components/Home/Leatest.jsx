import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard02 from '../Card/ProductCard02';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';

const Leatest = () => {
    const [activeTab, setActiveTab] = useState('featured');
    const [sortOrder, setSortOrder] = useState('new');
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder })
    const [specialOffer, setSpecialOffer] = useState()

    const [item, setItem] = useState(data)

    const handleByNew = () => {
        setSortOrder('new')
        setItem(data)
        setActiveTab('new');
    }
    const handleFeatured = () => {
        setSortOrder('old');
        setItem(data);
        setActiveTab('featured');
    };
    const handleBestSeller = () => {
        setSortOrder('best-seller');
        setItem(data);
        setActiveTab('best-seller');
    };
    useEffect(() => {
        if (data && data?.length > 0) {
            setItem(data)
            const offer = data?.filter(item => item.discount > 8)
            setSpecialOffer(offer)
            setActiveTab('specialOffer');
        }
    }, [data])






    return (
        <div>
            <Container>
                <Heading text='Leatest Products' className='text-center mt-16 md:mt-[71px]'></Heading>
                <div className='flex justify-center md:mt-[18px]'>
                    <Tabs>
                        <TabList className=" flex gap-6 md:gap-16 items-center justify-center flex-wrap text-xl py-6 ">
                            <Tab onClick={handleByNew} className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>New Arrival</Tab>
                            <Tab className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>Best Seller</Tab>
                            <Tab onClick={handleFeatured} className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>Featured</Tab>
                            <Tab onClick={() => setItem(specialOffer)} className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>Special Offer</Tab>
                        </TabList>

                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                                {item?.slice(0, 3).map((item, idx) => <ProductCard02 key={idx} item={item}></ProductCard02>)}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                               <p className='text-2xl my-6 text-center capitalize'>no product </p>
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                                {item?.slice(0, 3).map((item, idx) => <ProductCard02 key={idx} item={item}></ProductCard02>)}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                                {item?.slice(0, 3).map((item, idx) => <ProductCard02 key={idx} item={item}></ProductCard02>)}
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>

            </Container>
        </div>
    );
};

export default Leatest;