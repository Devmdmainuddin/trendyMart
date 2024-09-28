import React from 'react';
import ProductCard06 from '../../components/Card/ProductCard06';
import ProductCard07 from '../../components/Card/ProductCard07';
import ProductCard08 from '../../components/Card/ProductCard08';
import Bredcumb from '../../components/Shared/Bredcumb';
import Sidebar from '../../components/Shared/Sidebar';
import FilterBar from '../../components/Shared/FilterBar';
import Container from '../../components/Shared/Container';
import BlogCard from '../../components/Card/BlogCard';
import { FaFacebook, FaInstagramSquare, FaSearch, FaTwitterSquare } from 'react-icons/fa';
import Image from '../../components/Shared/Image';
import { Link } from 'react-router-dom';
import Company from '../../components/Home/Company';

const Blogs = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>
            {/* <FilterBar></FilterBar> */}
            <Container>


                <div className='flex gap-6 flex-col md:flex-row mt-16 md:mt-[125px]'>
                    <main className='flex flex-col gap-8'>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>

                    </main>
                    <aside className='w-[270px] pb-6'>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold'>Search</h2>
                        <div className='relative mt-4'>
                            <input type="text" name="" id="" placeholder='Search For Posts' className='py-3 px-2 text-[#BDBDD8] border border-[#BDBDD8] outline-0 w-full' />
                            <span className='absolute top-1/2 right-2 -translate-y-1/2'><FaSearch className='text-[#BDBDD8] text-lg' /></span>
                        </div>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-[52px] mb-6'>Categories</h2>
                        <div>
                            <ul className='flex gap-3 flex-wrap'>
                                <li className='text-[#3F509E] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500'>Hobbies <span>(14)</span></li>
                                <li className='text-[#3F509E] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500'>Hobbies <span>(14)</span></li>
                                <li className='text-[#3F509E] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500'>Hobbies <span>(14)</span></li>
                                <li className='text-[#3F509E] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500'>Hobbies <span>(14)</span></li>
                            </ul>
                        </div>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Recent Post</h2>
                        <div className='flex flex-col gap-[22px] '>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                        </div>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Sale Product</h2>
                        <div className='flex flex-col gap-[22px] '>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className="image w-[70px] h-[51px]">
                                    <Image src='/blog03.png'> </Image>

                                </div>
                                <div className="content">
                                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin'>It is a long established fact</h2>
                                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>Aug 09 2020</p>
                                </div>

                            </div>
                        </div>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Offer product</h2>
                        <div className='flex flex-wrap gap-4'>
                            <div>
                                <div className="image w-[126px] h-[80px]">
                                    <Image src='/blog03.png'> </Image>
                                </div>
                                <div className="content">
                                    <h2 className='text-[#151875] text-sm font-semibold font-josefin mt-2'>Duis lectus est.</h2>
                                    <p className='text-[#8A8FB9] text-[12px] font-semibold font-josefin mt-1'>$12.00 - $15.00</p>
                                </div>
                            </div>
                            <div>
                                <div className="image w-[126px] h-[80px]">
                                    <Image src='/blog03.png'> </Image>
                                </div>
                                <div className="content">
                                    <h2 className='text-[#151875] text-sm font-semibold font-josefin mt-2'>Duis lectus est.</h2>
                                    <p className='text-[#8A8FB9] text-[12px] font-semibold font-josefin mt-1'>$12.00 - $15.00</p>
                                </div>
                            </div>
                            <div>
                                <div className="image w-[126px] h-[80px]">
                                    <Image src='/blog03.png'> </Image>
                                </div>
                                <div className="content">
                                    <h2 className='text-[#151875] text-sm font-semibold font-josefin mt-2'>Duis lectus est.</h2>
                                    <p className='text-[#8A8FB9] text-[12px] font-semibold font-josefin mt-1'>$12.00 - $15.00</p>
                                </div>
                            </div>
                            <div>
                                <div className="image w-[126px] h-[80px]">
                                    <Image src='/blog03.png'> </Image>
                                </div>
                                <div className="content">
                                    <h2 className='text-[#151875] text-sm font-semibold font-josefin mt-2'>Duis lectus est.</h2>
                                    <p className='text-[#8A8FB9] text-[12px] font-semibold font-josefin mt-1'>$12.00 - $15.00</p>
                                </div>
                            </div>
                          
                        </div>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Follow</h2>
                        <div className='flex gap-2  items-center'>
                            <Link><FaFacebook className='text-[#5625DF] text-2xl'/></Link>
                            <Link><FaInstagramSquare className='text-[#FF27B7] text-2xl'/></Link>
                            <Link><FaTwitterSquare className='text-[#37DAF3] text-2xl'/></Link>
                        </div>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-[52px] mb-6'>Tags</h2>
                        <div>
                            <ul className='flex gap-3 flex-wrap'>
                                <li className='text-[#151875] text-[16px] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500 underline'>General </li>
                                <li className='text-[#151875] text-[16px] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500 underline'>Atsanil </li>
                                <li className='text-[#151875] text-[16px] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500 underline'>Insas. </li>
                                <li className='text-[#151875] text-[16px] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500 underline'>Bibsaas </li>
                                <li className='text-[#151875] text-[16px] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500 underline'>Nulla. </li>
                            </ul>
                        </div>

                    </aside>
                    {/* <Sidebar></Sidebar>
                    <div>
                        <h2>blog page</h2>
                        <ProductCard06></ProductCard06>
                        <ProductCard07></ProductCard07>
                        <ProductCard08></ProductCard08>
                    </div> */}

                </div>
                <Company></Company>
            </Container>


        </div>
    );
};

export default Blogs;