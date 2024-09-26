import React from 'react';
import ProductCard06 from '../../components/Card/ProductCard06';
import ProductCard07 from '../../components/Card/ProductCard07';
import ProductCard08 from '../../components/Card/ProductCard08';
import Bredcumb from '../../components/Shared/Bredcumb';
import Sidebar from '../../components/Shared/Sidebar';
import FilterBar from '../../components/Shared/FilterBar';
import Container from '../../components/Shared/Container';
import BlogCard from '../../components/Card/BlogCard';
import { FaSearch } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>
            {/* <FilterBar></FilterBar> */}
            <Container>


                <div className='flex gap-6'>

                    <main className='flex flex-col gap-8'>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>

                    </main>
                    <aside className='w-[270px] py-6'>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold'>Search</h2>
                        <div className='relative mt-4'>
                            <input type="text" name="" id="" placeholder='Search For Posts' className='py-3 px-2 text-[#BDBDD8] border border-[#BDBDD8] outline-0 w-full' />
                            <span className='absolute top-1/2 right-2 -translate-y-1/2'><FaSearch className='text-[#BDBDD8] text-lg'/></span>
                        </div>
                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold'>Categories</h2>
                        <div>
                            <ul>
                                <li className='text-[#3F509E] text-sm font-normal font-josefin'>Hobbies <span>(14)</span></li>
                                <li className='text-[#3F509E] text-sm font-normal font-josefin'>Hobbies <span>(14)</span></li>
                                <li className='text-[#3F509E] text-sm font-normal font-josefin'>Hobbies <span>(14)</span></li>
                                <li className='text-[#3F509E] text-sm font-normal font-josefin'>Hobbies <span>(14)</span></li>
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
            </Container>


        </div>
    );
};

export default Blogs;