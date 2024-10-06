import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import { FaCheck } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import { Link } from 'react-router-dom';

const DiscountItem = () => {
    const { data, error, isLoading, } = useGetproductsQuery()
    const [discountItem,setDiscountItem] = useState()

useEffect(()=>{
    const dis= data?.filter(item=>item.discount)
    setDiscountItem(dis)
},[data])
    return (
        <div>
            <Container>
                <Heading text='Discount Item' className='text-center mt-6 md:mt-[129px]'></Heading>
                <div className='flex justify-center md:mt-[18px]'>
                    <ul className='flex gap-6 md:mt-5 items-center'>
                        <Tabs>
                            <TabList className=" flex gap-6 md:gap-16 items-center justify-center text-xl py-6 ">
                               {discountItem?.slice(0,3).map((item,idx)=><Tab key={idx} className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 outline-0'>{item.categorys.subcategory}</Tab>)} 
                                {/* <Tab className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 outline-0'>Plastic Chair</Tab>
                                <Tab className='text-lg font-bold leading-[22px]  text-[#151875] hover:text-[#FB2E86] transition-all duration-500 outline-0'>Sofa Colletion</Tab> */}

                            </TabList>
                            {discountItem?.slice(0,3).map(item=>
                                <TabPanel >
                                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between'>
                                    <div className="content">
                                        <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>{item.discount}% off in all products</h2>
                                        <h3 className='text-[#FB2E86] text-[21px] font-josefin font-normal mt-4'>{item.title}</h3>
                                        <p className=' max-w-[526px] text-[#B7BACB] font-josefin font-normal text-[17px] mt-5'>{item.descaption}</p>
                                        <ul className='grid grid-cols-2 mt-7'>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'><FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Material expose like metals</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Clear lines and geomatric figures</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> {item.return_policy }</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Material expose like metals</li>
                                        </ul>

                                        <Link to={`/product/${item._id}`}><button className='text-[#FB2E86] font-josefin font-semibold mt-[36px] capitalize  inline-block underline' >Shop Now</button></Link>    
                                    </div>
                                    <div className="image md:w-[506px] justify-self-center">
                                        <img src={item.image} alt="" className='w-full h-full object-cover' />
                                    </div>
                                </div>
                            </TabPanel>
                            )}
                            

                            {/* <TabPanel >
                                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between'>
                                    <div className="content">
                                        <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>23% off in all products</h2>
                                        <h3 className='text-[#FB2E86] text-[21px] font-josefin font-normal mt-4'>Eams Sofa Compact</h3>
                                        <p className=' max-w-[526px] text-[#B7BACB] font-josefin font-normal text-[17px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                        <ul className='grid grid-cols-2 mt-7'>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'><FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Material expose like metals</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Clear lines and geomatric figures</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Simple neutral colours.</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Material expose like metals</li>
                                        </ul>

                                        <button className='text-[#FB2E86] font-josefin font-semibold mt-[36px] capitalize  inline-block underline' >Shop Now</button>
                                    </div>
                                    <div className="image md:w-[506px] justify-self-center">
                                        <img src="/chair2.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel >
                                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between'>
                                    <div className="content">
                                        <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>23% off in all products</h2>
                                        <h3 className='text-[#FB2E86] text-[21px] font-josefin font-normal mt-4'>Eams Sofa Compact</h3>
                                        <p className=' max-w-[526px] text-[#B7BACB] font-josefin font-normal text-[17px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                        <ul className='grid grid-cols-2 mt-7'>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'><FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Material expose like metals</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Clear lines and geomatric figures</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Simple neutral colours.</li>
                                            <li className='text-[#B8B8DC] font-josefin font-medium flex gap-2 items-center'> <FaCheck className='hover:text-[#2c7726] transition-all duration-500' /> Material expose like metals</li>
                                        </ul>

                                        <button className='text-[#FB2E86] font-josefin font-semibold mt-[36px] capitalize  inline-block underline' >Shop Now</button>
                                    </div>
                                    <div className="image md:w-[506px] justify-self-center">
                                        <img src="/banner03.png" alt="" className='w-full h-full object-cover' />
                                    </div>
                                </div>
                            </TabPanel> */}

                        </Tabs>


                    </ul>
                </div>


            </Container>

        </div>
    );
};

export default DiscountItem;