import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagramSquare, FaSearch, FaTwitterSquare } from 'react-icons/fa';
import Image from '../../components/Shared/Image';
import { Link, useNavigate } from 'react-router-dom';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import { useGetBlogsQuery } from '../../Featured/BlogAPI/blogApi';

const Sidebar = () => {
    const [sortOrder, setSortOrder] = useState('new');
    let [searchInput, setSearchInput] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);
    const navigate = useNavigate();
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder });
    const { data: blogdata } = useGetBlogsQuery({ sortOrder })
    const [categorey, setCategorey] = useState([])
    const [offer, setOffer] = useState([]);
    const [tags, setTags] = useState([])

    useEffect(() => {
        if (blogdata && blogdata?.length > 0) {
            setCategorey([... new Set(blogdata?.map(item => item.category))])
            setTags([... new Set(blogdata?.map(item => item.tags.tag01))])

        }
    }, [blogdata])
    useEffect(() => {
        if (data && data?.length > 0) {
            const offerData = data?.filter(item => item.discount > 0)
            setOffer(offerData)
        }
    }, [data])

    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setSearchFilter([])
        } else {
            const searchOne = blogdata?.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchOne)
        }
    }
    const handleLink = (id) => {
        navigate(`/blog/${id}`)
        setSearchFilter([])
        setSearchInput("")
    }



    const handleCategoryFilter = (category) => {
        navigate(`/blogs?category=${encodeURIComponent(category)}`);
     };

    const Culture = blogdata?.filter(item => item.category === 'Culture');
    const Careers = blogdata?.filter(item => item.category === 'Careers')
    const Politics = blogdata?.filter(item => item.category === 'Politics')
    const Business = blogdata?.filter(item => item.category === 'Business')
    const Travel = blogdata?.filter(item => item.category === 'Travel')


    return (
        <aside className='w-[270px] pb-6 relative'>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold'>Search</h2>
            <div className='relative mt-4'>
                <input type="text" name="" value={searchInput} onChange={handleInput} id="" placeholder='Search For Blogs Posts' className='py-3 px-2 text-[#BDBDD8] border border-[#BDBDD8] outline-0 w-full' />
                <span className='absolute top-1/2 right-2 -translate-y-1/2'><FaSearch className='text-[#BDBDD8] text-lg' /></span>
            </div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-[52px] mb-6'>Categories</h2>
            <div>
                <ul className='flex gap-3 flex-wrap'>
                    {categorey.map(item =>
                        <li onClick={()=>handleCategoryFilter(item)} className='text-[#3F509E] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500'>{item} <span>({
                            item === 'Culture' ? Culture?.length : 0
                            || item === 'Careers' ? Careers?.length : 0
                            || item === 'Politics' ? Politics?.length : 0
                            || item === 'Business' ? Business?.length : 0
                            || item === 'Travel' ? Travel?.length : 0
                         



                        })</span></li>
                    )}
                </ul>
            </div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9'>Recent Post</h2>
            <div className='flex flex-col gap-[22px] '>
                {blogdata?.slice(0, 5).map(item =>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <div className="image w-[70px] h-[51px]">
                                <Image src={item.image}> </Image>

                            </div>
                        </div>
                        <Link to={`/blog/${item._id}`}>
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
                {data?.slice(1, 5).map(item =>
                    <div className='flex gap-2 items-center'>

                        <div className="image w-[70px] h-[51px]">
                            <Image src={item.image}> </Image>

                        </div>
                        <Link to={`/product/${item._id}`}>
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
                        <Link to={`/product/${item._id}`}>
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
                    {tags?.map(item =>
                        <li className='text-[#151875] text-[16px] hover:text-white hover:bg-[#F939BF] p-1 text-sm font-normal font-josefin transition-all duration-500 underline'>{item} </li>
                    )}


                </ul>
            </div>
            {searchFilter.length > 0 &&
                <div className='absolute max-w-[420px] w-full max-h-[350px] top-[112px] left-0  z-50  overflow-y-scroll' >
                    {searchFilter.map((item, key) =>
                        <div onClick={() => handleLink(item._id)} key={key} className=" cursor-pointer flex w-full  gap-2 bg-[#F5F5F3] p-5 border-b">
                            <img src={item.image} alt="" className="bg-[#979797] w-10 h-10" />
                            <div><h2 className='text-sm'>{item.title.slice(0,22)}</h2>
                            </div>


                        </div>
                    )}
                </div>}
        </aside>
    );
};

export default Sidebar;