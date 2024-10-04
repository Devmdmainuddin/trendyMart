import { FaFacebook, FaInstagramSquare, FaLongArrowAltLeft, FaLongArrowAltRight, FaPenNib, FaSearch, FaTwitterSquare, FaUser } from "react-icons/fa";
import Bredcumb from "../../components/Shared/Bredcumb";
import Container from "../../components/Shared/Container";
import { IoCalendarOutline } from "react-icons/io5";
import Image from "../../components/Shared/Image";
import { Link } from "react-router-dom";
import ProductCart09 from "../../components/Card/ProductCart09";
import Company from "../../components/Home/Company";
import { MdMarkEmailRead } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useGetproductsQuery } from "../../Featured/ProductAPI/productApi";


const BlogDetails = () => {

    const [sortOrder, setSortOrder] = useState('new');
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder });
    const [offer,setOffer]=useState([]);
    const [categorey, setCategorey] = useState([])

    useEffect(() => {
        if (data && data?.length > 0) {
            setCategorey([... new Set(data?.map(item => item.categorys.category))])
            const offerData = data?.filter(item => item.discount > 0)
            setOffer(offerData)
        }
    }, [data])

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                <div className='flex gap-6 flex-col md:flex-row mt-16 md:mt-[125px]'>
                    <main className='flex flex-col gap-8'>
                        <div>
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
                                    <p className='max-w-[852px] mt-[63px] text-[#8A8FB9] font-josefin font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                                    <p className='max-w-[852px] text-[#8A8FB9] bg-[#FAFAFB] mt-[43px] pt-9 pb-4 px-5 border-l-2 border-[#FC45A0] font-josefin font-normal text-[16px] '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat

                                        toamk risusu” </p>

                                    <div className="flex gap-8 mt-[43px] flex-col md:flex-row">
                                        <div>
                                            <img src="/blog01.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="blog02.jpg" alt="" />
                                        </div>
                                    </div>
                                    <p className='max-w-[852px] mt-[63px] text-[#8A8FB9] font-josefin font-normal text-[16px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                                </div>

                            </div>
                            <div className='flex gap-3 flex-wrap justify-center mx-auto mt-[58px]'>

                                <ProductCart09></ProductCart09>
                                <ProductCart09></ProductCart09>
                                <ProductCart09></ProductCart09>
                                <ProductCart09></ProductCart09>
                            </div>
                            <p className='max-w-[852px] text-[#8A8FB9] font-josefin font-normal text-[16px] py-12 border-b border-[#e3e4e4]' >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                            </p>
                            <div className="flex justify-center items-center">

                                <div className='flex gap-2  items-center  mt-7'>
                                    <Link><FaFacebook className='text-[#5625DF] text-2xl p-1' /></Link>
                                    <Link><FaInstagramSquare className='text-[#FF27B7] text-2xl p-1' /></Link>
                                    <Link><FaTwitterSquare className='text-[#37DAF3] text-2xl p-1' /></Link>
                                </div>
                            </div>

                            <div className="mt-6 bg-[#F7F8FB] flex justify-between p-3 rounded-[3px]">
                                <p className="text-[#8A8FB9] text-[16px] font-josefin font-medium flex gap-1 items-center"> <FaLongArrowAltLeft /> Previous Post</p>
                                <p className="text-[#8A8FB9] text-[16px] font-josefin font-medium flex gap-1 items-center"> Next Post  <FaLongArrowAltRight /></p>

                            </div>


                        </div>
                    </main>
                    <div>
                        <Sidebar data={data} categorey={categorey} offer={offer}></Sidebar>
                    </div>
                </div>

            </Container>

           
            <Container>
                <div className=" mt-6 md:mt-[111px]">
                    <div className="w-[668px] shadow-commentuserShadow p-[14px] flex gap-[14px] items-center">
                        <div>
                            <div className="image w-[103px] h-[106px]">
                                <img src="/tas.png" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="content">
                            <div className="flex justify-between">
                                <h2 className="text-[#363385] text-lg font-josefin font-semibold">Sapien ac</h2>
                                <span className="text-[#A3A2B6] text-[12px] font-normal">Jan 09 2020</span>
                            </div>
                            <p className="text-[12px] font-normal font-josefin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                            <p className="text-[12px] font-normal font-josefin">consectetur</p>
                        </div>

                    </div>
                    <div className="w-[668px] shadow-commentuserShadow p-[14px] my-[30px] flex gap-[14px] items-center">
                        <div>
                            <div className="image w-[103px] h-[106px]">
                                <img src="/tas.png" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="content">
                            <div className="flex justify-between">
                                <h2 className="text-[#363385] text-lg font-josefin font-semibold">Sapien ac</h2>
                                <span className="text-[#A3A2B6] text-[12px] font-normal">Jan 09 2020</span>
                            </div>
                            <p className="text-[12px] font-normal font-josefin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                            <p className="text-[12px] font-normal font-josefin">consectetur</p>
                        </div>

                    </div>
                    <div className="w-[668px] shadow-commentuserShadow p-[14px] flex gap-[14px] items-center">
                        <div>
                            <div className="image w-[103px] h-[106px]">
                                <img src="/tas.png" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="content">
                            <div className="flex justify-between">
                                <h2 className="text-[#363385] text-lg font-josefin font-semibold">Sapien ac</h2>
                                <span className="text-[#A3A2B6] text-[12px] font-normal">Jan 09 2020</span>
                            </div>
                            <p className="text-[12px] font-normal font-josefin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                            <p className="text-[12px] font-normal font-josefin">consectetur</p>
                        </div>

                    </div>
                </div>
                <div>
                    <form className='mt-[46px] md:mt-[135px] max-w-[717px]'>
                        <div className=" flex justify-between gap-6 items-center">
                            <div className=" relative w-full">
                                <FaUser className='text-sm text-[#8A8FB9] absolute left-2 top-1/2 -translate-y-1/2' />
                                <input className=" w-full   py-[13px] pl-[30px] border outline-0" type="text" placeholder="Your Name*" />
                            </div>
                            <div className=" relative w-full">
                            <MdMarkEmailRead className='text-sm text-[#8A8FB9] absolute left-2 top-1/2 -translate-y-1/2'/>
                                <input className=" w-full  py-[13px] pl-[30px] border outline-0" type="email" placeholder="Write Your Email*" />
                            </div>

                        </div>
                        <div className='mt-[44px] relative '>
                        <AiFillMessage className='text-sm text-[#8A8FB9] absolute left-2 top-5 '/>
                            <textarea className="inputtext w-full  py-[13px] pl-[30px] border outline-0 resize-none" cols="30" rows="10" placeholder="Write your comment*"></textarea>
                        </div>
                        <div>
                        <input
                                        type="checkbox"
                                        id="comment"
                                        className={`w-2 h-2 mr-1 rounded-sm border-2 border-gray-500 cursor-pointer appearance-none 
                    ${isChecked ? 'bg-[#19D16F] border-none' : ''}`}
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor="comment" className='text-[#8A91AB] text-[12px] font-normal'>Save my name, email, and website in this browser for the next time I comment.</label>

                        </div>
                       



                        <button className="w-full text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px] capitalize">submit comment</button>
                    </form>
                </div>
            </Container>


            <Company></Company>
        </div>
    );
};

export default BlogDetails;