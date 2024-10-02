import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import ProductCard02 from '../Card/ProductCard02';
// import useProducts from '../../hooks/useProducts';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';

const Leatest = () => {
    const { data, error, isLoading, } = useGetproductsQuery()
    const [newArrival, setNewArrival] = useState([])
   
    const [specialOffer, setSpecialOffer] = useState()
    const [item, setItem] = useState(data)
    // const [newArrival,setNewArrival]=useState()
    // console.log(data);
    console.log('new', newArrival);
    useEffect(() => {
        if (data && data?.length > 0) {
            const Newdata = [...data].sort((a, b) => {
                const dateA = new Date(Date.parse(a.createAt));
                const dateB = new Date(Date.parse(b.createAt));
                // dateA - dateB;
                return  dateB - dateA
            });
            setNewArrival(Newdata);
          
           setItem(data)

            const offer= data?.filter(item=> item.discount> 8 )
            setSpecialOffer(offer)

        }
    }, [data])

    


    // const handlefilter = filter => {
    //     const filterItem = data?.filter(items => items.category === filter);
    //     setItem(filterItem);
    // }
    // const handlebrandfilter = filter => {
    //     const filterItem = data?.filter(items => items.brand === filter);
    //     setItem(filterItem);
    // }


    return (
        <div>
            <Container>
                <Heading text='Leatest Products' className='text-center mt-16 md:mt-[71px]'></Heading>
                <div className='flex justify-center md:mt-[18px]'>
                    <ul className='flex gap-4 lg:gap-[60px] flex-wrap mt-5 items-center'>
                        <li onClick={()=>setItem(newArrival)} className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>New Arrival</button></li>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Best Seller</button></li>
                        <li className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Featured</button></li>
                        <li onClick={()=>setItem(specialOffer)} className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500'> <button>Special Offer</button></li>

                    </ul>
                </div>
                <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                   
                   {item?.slice(0,4).map((item,idx)=> <ProductCard02 key={idx} item={item}></ProductCard02>)}
                   
                    {/* <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02>
                    <ProductCard02></ProductCard02> */}

                </div>
            </Container>
        </div>
    );
};

export default Leatest;