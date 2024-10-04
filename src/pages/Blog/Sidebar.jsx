import React from 'react';
import { FaFacebook, FaInstagramSquare, FaSearch, FaTwitterSquare } from 'react-icons/fa';
import Image from '../../components/Shared/Image';
import { Link } from 'react-router-dom';

const Sidebar = ({ categorey, offer, data,tags}) => {

    const fashion = data?.filter(item => item.categorys.category === 'Fashion & Lifestyle');
    const kitchen = data?.filter(item => item.categorys.category === 'Home & Kitchen')
    const babycare = data?.filter(item => item.categorys.category === 'Baby Care')
    const personal = data?.filter(item => item.categorys.category === 'Personal Care')

    return (
        <aside className='w-[270px] pb-6'>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold'>Search</h2>
            <div className='relative mt-4'>
                <input type="text" name="" id="" placeholder='Search For Posts' className='py-3 px-2 text-[#BDBDD8] border border-[#BDBDD8] outline-0 w-full' />
                <span className='absolute top-1/2 right-2 -translate-y-1/2'><FaSearch className='text-[#BDBDD8] text-lg' /></span>
            </div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-[52px] mb-6'>Categories</h2>
            <div>
                <ul className='flex gap-3 flex-wrap'>
                    {categorey.map(item =>
                        <li className='text-[#3F509E] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500'>{item} <span>({
                                item==='Fashion & Lifestyle'? fashion?.length:0 
                            ||  item==='Home & Kitchen'? kitchen?.length:0
                            ||  item==='Baby Care'? babycare?.length:0
                            ||  item==='Personal Care'? personal?.length:0
                           
                            
                            
                            
                            })</span></li>
                    )}
                </ul>
            </div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Recent Post</h2>
            <div className='flex flex-col gap-[22px] '>
            {data?.slice(0,5).map(item => 
                <div className='flex gap-2 items-center'>
                <div className="image w-[70px] h-[51px]">
                    <Image src={item.image}> </Image>

                </div>
                <Link  to={`/product/${item._id}`}>
                <div className="content">
                    <h2 className='text-[#3F509E] text-sm font-normal font-josefin hover:text-[#F939BF] transition-all duration-500'>{item.title}</h2>
                    <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>{item.createAt}</p>
                </div>
                </Link>
                

            </div>
            )}
                
                
            </div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Sale Product</h2>
            <div className='flex flex-col gap-[22px] '>
                {data?.slice(1,5).map(item =>
                    <div className='flex gap-2 items-center'>
                       
                       <div className="image w-[70px] h-[51px]">
                            <Image src={item.image}> </Image>

                        </div>
                        <Link  to={`/product/${item._id}`}>
                        <div className="content">
                            <h2 className='text-[#3F509E] text-sm font-normal font-josefin hover:text-[#F939BF] transition-all duration-500'>{item.title}</h2>
                            <p className='text-[#8A8FB9] text-[11px] font-semibold font-josefin'>{item.createAt}</p>
                        </div>
                       </Link>
                        

                    </div>
                )}

            </div>
            {/* Offer product */}
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Offer product</h2>
            <div className='flex flex-wrap gap-4'>
                {offer.slice(0, 4).map(item =>

                    <div>
                        <Link  to={`/product/${item._id}`}>
                        <div className="image w-[126px] h-[80px]">
                            <Image src={item.image} > </Image>
                        </div>
                        <div className="content">
                            <h2 className='text-[#151875] text-sm font-semibold font-josefin mt-2 hover:text-[#F939BF] transition-all duration-500'>{item.title.slice(0, 15)}.</h2>
                            <p className='text-[#8A8FB9] text-[12px] font-semibold font-josefin mt-1 text-center'>{item.discount && <span > ${parseInt(item?.price) - ((parseInt(item?.price) * parseInt(item?.discount)) / 100)}</span>} - ${item.price}</p>
                        </div>
                        </Link>
                        
                    </div>)}



            </div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Follow</h2>
            <div className='flex gap-2  items-center'>
                <Link><FaFacebook className='text-[#5625DF] text-2xl' /></Link>
                <Link><FaInstagramSquare className='text-[#FF27B7] text-2xl' /></Link>
                <Link><FaTwitterSquare className='text-[#37DAF3] text-2xl' /></Link>
            </div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-[52px] mb-6'>Tags</h2>
            <div>
                <ul className='flex gap-3 flex-wrap'>
                    {tags?.map(item=>
                        <li className='text-[#151875] text-[16px] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500 underline'>{item} </li>
                    )}
                    
                    
                </ul>
            </div>

        </aside>
    );
};

export default Sidebar;