import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const BlogCard = ({item}) => {
    return (
        <div>
            <div className="image">
                <img src={item.image} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className="content mt-7">
                <div className='flex gap-6'>
                    <div className='flex gap-2 items-center'>
                        <span><FaPenNib className='text-[#FB2E86]' /></span>
                        <p className='text-sm font-josefin font-normal #151875 bg-[#FFE7F9] px-3'>{item.author.name} </p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span> <IoCalendarOutline className='text-[#f8bb9a]' /></span>
                        <p className='text-sm font-josefin font-normal #151875 bg-[#FFECE2] px-3'>{item.publishDate} </p>
                    </div>


                </div>
                <h2 className='mt-7 text-[#151875] text-[30px] font-josefin font-bold'>{item.title}</h2>
                <p className='max-w-[852px] text-[#8A8FB9] font-josefin font-normal text-[16px]'>{item.descaption.slice(0,175)}</p>
              <Link  to={`/blog/${item._id}`}>
              
              <button className='mt-7 text-[#151875] text-ld font-josefin capitalize font-semibold underline'> Read More </button>
              </Link>  
            </div>

        </div>                                    
    );
};

export default BlogCard;