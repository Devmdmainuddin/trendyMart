import React, { useEffect, useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import Image from '../../components/Shared/Image';
import Container from '../../components/Shared/Container';
import { FaFacebook, FaInstagramSquare, FaRegHeart, FaStar, FaTwitter, FaUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import { MdMarkEmailRead, MdOutlineArrowOutward } from 'react-icons/md';
import Heading from '../../components/Shared/Heading'
import ProductCard08 from '../../components/Card/ProductCard08';
import Company from '../../components/Home/Company'
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Featured/CartAPI/cartSlice';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiFillMessage } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';



const ProductDetails = () => {
  const { user } = useAuth() || {}
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperDirection, setSwiperDirection] = useState('horizontal');
  const products = useLoaderData();
  const { data, error, isLoading, } = useGetproductsQuery()
  const [relatedProducts, setRelatedProducts] = useState([]);
// const [discountPrice,setDiscountPrice] = useState(0);




  const discountp = (parseInt(products?.price) * parseInt(products?.discount)) / 100
  const discountPrice = parseInt(products?.price) - discountp
  



  useEffect(() => {
    const newpro = data?.filter(items => items.categorys.category === products.categorys.category);
    setRelatedProducts(newpro);
  }, [data]);




  useEffect(() => {
    const updateSwiperDirection = () => {
      if (window.innerWidth >= 768) {
        setSwiperDirection('vertical');
      } else {
        setSwiperDirection('horizontal');
      }
    };

    updateSwiperDirection();
    window.addEventListener('resize', updateSwiperDirection);

    return () => {
      window.removeEventListener('resize', updateSwiperDirection);
    };
  }, []);


  let [Quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // add to cart
  const handlecard = async i => {
    try {
      dispatch(addToCart({ ...i, qun: Quantity, }))
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your items has been add to cart",
        showConfirmButton: false,
        timer: 1500
      });
    }
    catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: " product  cart not add  ",
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  const handleSubmit =async (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const review = form.review.value
    const rating = form.rating.value
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userImage = user?.photoURL;
    const blogId = blog._id;
    const blogTitle = blog.title;
    const reviewAt = (new Date()).toDateString();
    
    const info={
        name,
        email,
        review,
        rating,
        blogId,
        blogTitle,
        auth:{
            userName,userEmail,userImage
        },
        reviewAt
    }
console.log(info);
    try {
        // await addReviews(info)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: " create review  ",
            showConfirmButton: false,
            timer: 1500
        });
        // form.reset();
        // refetch()
    }
    catch (err) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: " your review not add  ",
            showConfirmButton: false,
            timer: 1500
        });
    }

}



  return (
    <div>
      <Bredcumb />
      <Container>
        <div className='flex flex-col lg:flex-row justify-center items-center  gap-8  my-[121px]'>
          <div className='left w-[350px] md:w-[526px] flex  flex-col-reverse md:flex-row gap-[21px]  '>
            <div>
              <Swiper
                //  direction={'vertical'}
                direction={swiperDirection}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                onSwiper={setThumbsSwiper}
                className="mySwiper md:w-[151px] md:h-[487px]  "
              >

                <SwiperSlide className=' h-[155px]'><Image src={products?.thumbnail?.thumbnail01}></Image></SwiperSlide>
                <SwiperSlide className='  h-[155px]'><Image src={products?.thumbnail?.thumbnail02}></Image></SwiperSlide>
                <SwiperSlide className='  h-[155px]'><Image src={products?.thumbnail?.thumbnail03}></Image></SwiperSlide>
                <SwiperSlide className='  h-[155px]'><Image src={products?.thumbnail?.thumbnail04}></Image></SwiperSlide>

              </Swiper>

            </div>
            <div>
              <Swiper
                direction={'vertical'}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Navigation, Thumbs]}
                className="mySwiper w-[355px] h-[457px] md:w-[375px] md:h-[487px] "
              >
                {/* {products?.map((img,idx)=><SwiperSlide key={idx} className='w-full h-full '><Image src={img.thumbnail}></Image></SwiperSlide>)} */}

                <SwiperSlide className=' w-full h-full  '><Image src={products?.thumbnail?.thumbnail01} alt="Product Thumbnail" /></SwiperSlide>
                <SwiperSlide className=' w-full h-full  '><Image src={products?.thumbnail?.thumbnail02} alt="Product Thumbnail" /></SwiperSlide>
                <SwiperSlide className=' w-full h-full  '><Image src={products?.thumbnail?.thumbnail03} alt="Product Thumbnail" /></SwiperSlide>
                <SwiperSlide className=' w-full h-full  '><Image src={products?.thumbnail?.thumbnail04} alt="Product Thumbnail" /></SwiperSlide>
              </Swiper>

            </div>
          </div>
          <div className="right">
            <h2 className='text-[#0D134E] text-[36px] font-josefin font-semibold capitalize'>{products.title}</h2>
            <div className='flex gap-2 items-center mt-3'>
              <div className='flex gap-1 '>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#FFC416] text-[10px]' /></span>
                <span><FaStar className='text-[#B2B2B2] text-[10px]' /></span>

              </div>
              <span className='text-sm'>22</span>
            </div>
            <div className='text-[13px] font-josefin font-normal flex gap-2 mt-3'>
            <p className='text-[#151875] text-[16px]'> {products.discount &&  <span > ${discountPrice}</span>}</p> 
              <p className={`text-[16px] text-[#FB2E86]  ${products.discount?'line-through':''}`}>$ <span> {products.price}</span></p>
            </div>
            <h4 className='text-[#151875] text-[16px] font-josefin font-semibold mt-4 capitalize'>Color : <span className={`w-10 h-10 rounded-full bg-[${products.color}]`}>{products?.color === "#FF0000" ? 'red' : ''
              || products?.color === "#FFFF00" ? 'Yellow' : ''
              || products?.color === "#0000FF" ? 'Blue' : ''
              || products?.color === "#FFA500" ? 'Orange' : ''
              || products?.color === "#A52A2A" ? 'Brown' : ''
              || products?.color === "#008000" ? 'Green' : ''
              || products?.color === "#800080" ? 'Purple' : ''
              || products?.color === "#87CEEB" ? 'Sky' : ''


            }</span> </h4>
            <p className='max-w-[549px] text-[#A9ACC6] text-[16px] font-josefin font-semibold mt-4'>{products.descaption.slice(0, 150)}</p>
            <div className='flex gap-3 mt-8'>
              <button onClick={() => handlecard(products)} className='flex items-center gap-2 py-2 px-3 border text-[#151875] hover:text-[#FB2E86] hover:border-[#FB2E86] text-[16px] font-josefin font-normal capitalize transition-all duration-500'>Add To cart <IoCartOutline className='text-[16px]' /></button>
              <button className='flex items-center gap-2 py-2 px-3 border text-[#151875] text-[16px] font-josefin font-normal capitalize'> <FaRegHeart className='text-[16px]' /></button>

            </div>
            <h4 className='text-[#151875] text-[16px] font-josefin font-semibold mt-4'>Categories :{products?.categorys?.category} </h4>
            <h4 className='text-[#151875] text-[16px] font-josefin font-semibold mt-2.5'>Tags : {products?.tags?.tag01 ? products?.tags?.tag01 : ''},{products?.tags?.tag02 ? products?.tags?.tag02 : ''},{products?.tags?.tag03 ? products?.tags?.tag03 : ''}</h4>
            <div className='flex items-center gap-3 mt-2.5'>
              <h4 className='text-[#151875] text-[16px] font-josefin font-semibold '>Share :</h4>
              <ul className='flex gap-3 '>
                <li> <Link><FaFacebook className='text-[#151875] text-sm' /></Link></li>
                <li> <Link><FaTwitter className='text-[#151875] text-sm' /></Link></li>
                <li> <Link><FaInstagramSquare className='text-[#151875] text-sm' /></Link></li>
              </ul>
            </div>


          </div>
        </div>

      </Container>
      <div className='bg-[#F9F8FE] py-[109px]'>
        <Container>
          <Tabs>
            <TabList className=" flex gap-16 items-center text-xl py-6 ">
              <Tab className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>Description</Tab>
              <Tab className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>Additional Info</Tab>
              <Tab className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>Reviews</Tab>
              <Tab className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300'>Video</Tab>
            </TabList>

            <TabPanel>
              <h2>   <div>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-4 md:mt-[61px] '>Varius tempor.</h2>
            <p className='text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px] mt-2 md:mt-4'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <h2 className='text-[#151875] text-[22px] font-josefin font-semibold mt-4 md:mt-8'>More details</h2>
            <ul className=' mt-2 md:mt-4'>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className='flex gap-1 md:items-center text-[#A9ACC6] text-[16px] font-josefin font-semibold leading-[29px]'><span><MdOutlineArrowOutward className=' text-[16px] text-[#2F1AC4]' /></span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>

            </ul>
          </div></h2>
            </TabPanel>
            <TabPanel>
              <p>{products.descaption}</p>
            
            </TabPanel>
            <TabPanel>
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
                    <form onSubmit={handleSubmit} className='mt-[46px] md:mt-[135px] max-w-[717px]'>
                        <div className=" flex justify-between gap-6 items-center">
                            <div className=" relative w-full">
                                <FaUser className='text-sm text-[#8A8FB9] absolute left-2 top-1/2 -translate-y-1/2' />
                                <input name="name" className=" w-full   py-[13px] pl-[30px] border outline-0" type="text" placeholder="Your Name*" />
                            </div>
                            <div className=" relative w-full">
                                <MdMarkEmailRead className='text-sm text-[#8A8FB9] absolute left-2 top-1/2 -translate-y-1/2' />
                                <input name="email" className=" w-full  py-[13px] pl-[30px] border outline-0" type="email" placeholder="Write Your Email*" />
                            </div>

                        </div>
                        <div className='mt-[44px] relative '>
                            <AiFillMessage className='text-sm text-[#8A8FB9] absolute left-2 top-5 ' />
                            <textarea name="review" className="inputtext w-full  py-[13px] pl-[30px] border outline-0 resize-none" cols="30" rows="10" placeholder="Write your comment*"></textarea>
                        </div>
                        <div className='mt-[44px] relative '>
                            <AiFillMessage className='text-sm text-[#8A8FB9] absolute left-2 top-5 ' />
                            <input name="rating" id='rating' min={1} max={5} className=" w-full  py-[13px] pl-[30px] border outline-0" type="number" placeholder="Write Your rating*" />
                        </div>

                        <button className="w-full text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px] capitalize">submit comment</button>
                    </form>
                </div>
            </Container>
            </TabPanel>
            <TabPanel>
              
            <h2>{products.descaption}</h2>
            </TabPanel>
          </Tabs>
       
        </Container>
      </div>
      <div className='mt-6 md:mt-16 lg:mt-[126px]'>
        <Container>
          <Heading text='Related Products'></Heading>
          <div className='flex gap-[30px] justify-center flex-wrap mx-auto mt-12'>
            {relatedProducts?.slice(0, 4).map((item, idx) => <ProductCard08 key={idx} item={item}></ProductCard08>)}

          </div>
          <Company></Company>
        </Container>
      </div>




    </div>
  );
};

export default ProductDetails;