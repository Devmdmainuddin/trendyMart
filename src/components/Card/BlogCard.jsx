import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div>
            <div className="image">
                <img src="/blogs.jpg" alt="" />
            </div>
            <div className="content mt-7">
                <div className='flex gap-6'>
                    <div className='flex gap-2 items-center'>
                        <span><FaPenNib className='text-[#FB2E86]' /></span>
                        <p className='text-sm font-josefin font-normal #151875 bg-[#FFE7F9] px-3'>Surf Auxion </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span> <IoCalendarOutline className='text-[#f8bb9a]' /></span>
                        <p className='text-sm font-josefin font-normal #151875 bg-[#FFECE2] px-3'>Aug 09 2020 </p>
                    </div>


                </div>
                <h2 className='mt-7 text-[#151875] text-[30px] font-josefin font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h2>
                <p className='max-w-[852px] text-[#8A8FB9] font-josefin font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              <Link to='/blogDetails'>
              
              <button className='mt-7 text-[#151875] text-ld font-josefin capitalize font-semibold underline'> Read More </button>
              </Link>  
            </div>

        </div>                                    
    );
};

export default BlogCard;