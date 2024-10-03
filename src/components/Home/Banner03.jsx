import React from 'react';
import Container from '../Shared/Container';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import { Link } from 'react-router-dom';

const Banner03 = () => {
    const { data, error, isLoading, } = useGetproductsQuery()
    return (

        <div className='mt-10'>
            <Container>
                <div className='flex flex-wrap justify-center gap-[10px] items-center md:justify-between'>
                    <div className='bg-[#FFF6FB] w-[420px]'>
                        <Link to='/shop'>
                            <div className="content pl-6 pt-[34px]">
                                <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>23% off in all products</h2>
                                <button className='text-[#FB2E86] font-josefin font-semibold mt-3 capitalize  inline-block underline' >Shop Now</button>
                            </div>
                            <div className="image w-[312px] h-[173px]  ml-auto ">
                                <img src="/ban01.png" alt="" className='w-full h-full object-contain' />
                            </div>
                        </Link>



                    </div>
                    <div className='bg-[#EEEFFB]  w-[420px]'>

                        <Link to='/shop'>
                            <div className="content pl-6 pt-[34px]">
                                <h2 className='text-[26px] text-[#151875] font-josefin font-semibold leading-[26px] '>23% off in all products</h2>
                                <button className='text-[#FB2E86] font-josefin font-semibold mt-3 capitalize  inline-block underline' >Shop Now</button>
                            </div>
                            <div className="image w-[312px] h-[173px]  ml-auto ">
                                <img src="/ban02.png" alt="" className='w-full h-full object-cover' />
                            </div>
                        </Link>


                    </div>

                    <div className='flex flex-col gap-6'>
                        {data?.slice(2, 5).map((item, idx) => <div key={idx} >
                            <Link to={`/product/${item._id}`} className='flex gap-3 items-center' >
                                <div className="image w-[107px] h-[74px] bg-[#F5F6F8] ">
                                    <img src={item.image} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="content ">
                                    <h2 className='text-[#151875] font-josefin font-semibold text-[16px]'>{item.title.slice(0, 20)}</h2>
                                    <p className='text-[#151875] font-josefin font-normal text-[12px]'>${item.price}</p>
                                </div>
                            </Link>

                        </div>)}

                        {/* <div className='flex gap-3 items-center '>
                            <div className="image w-[107px] h-[74px] bg-[#F5F6F8] p-6">
                                <img src="/Chair1.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="content ">
                                <h2 className='text-[#151875] font-josefin font-semibold text-[16px]'>Executive Seat chair</h2>
                                <p className='text-[#151875] font-josefin font-normal text-[12px]'>$32.0</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className="image w-[107px] h-[74px] bg-[#F5F6F8] p-5">
                                <img src="/Chair1.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="content ">
                                <h2 className='text-[#151875] font-josefin font-semibold text-[16px]'>Executive Seat chair</h2>
                                <p className='text-[#151875] font-josefin font-normal text-[12px]'>$32.0</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner03;