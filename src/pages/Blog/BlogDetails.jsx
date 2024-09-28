import { FaFacebook, FaInstagramSquare, FaPenNib, FaSearch, FaTwitterSquare } from "react-icons/fa";
import Bredcumb from "../../components/Shared/Bredcumb";
import Container from "../../components/Shared/Container";
import { IoCalendarOutline } from "react-icons/io5";
import Image from "../../components/Shared/Image";
import { Link } from "react-router-dom";


const BlogDetails = () => {
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

                                    <div className="flex gap-8">
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
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
                            <Link><FaFacebook className='text-[#5625DF] text-2xl' /></Link>
                            <Link><FaInstagramSquare className='text-[#FF27B7] text-2xl' /></Link>
                            <Link><FaTwitterSquare className='text-[#37DAF3] text-2xl' /></Link>
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
                </div>

            </Container>

        </div>
    );
};

export default BlogDetails;