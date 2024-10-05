import React from 'react';
import Swal from 'sweetalert2';
import { imageUpload } from '../../../utils';
import useAuth from '../../../hooks/useAuth';
import Container from '../../../components/Shared/Container';
import { useAddBlogMutation } from '../../../Featured/BlogAPI/blogApi';

const AddBlog = () => {
    const { user } = useAuth() || {}
    const[AddBlog]=useAddBlogMutation()

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const form = e.target;

        const thumbnailImage01 = form.thumbnail01.files[0]
        const thumbnailImage02 = form.thumbnail02.files[0]
        const image_url = form.image.files[0]
        const thumbnail01 = await imageUpload(thumbnailImage01);
        const thumbnail02 = await imageUpload(thumbnailImage02);
        const image = await imageUpload(image_url)

        const title = form.title.value;
        // const brand = form.brand.value;
        const category = form.category.value;
        const descaption = form.descaption.value;
        const tag01 = form.tag01.value;
        const tag02 = form.tag02.value;
        const tag03 = form.tag03.value;
        const tag04 = form.tag04.value;
        const publishDate = (new Date()).toDateString();
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const author = { name, email, userImage }

        const info = {
            thumbnail: {
                thumbnail01,
                thumbnail02,
            },
            image,
            title,
           
            descaption,
            tags: {
                tag01,
                tag02,
                tag03,
                tag04
            },
            category,
            publishDate,
            author
        };
        try {
            await AddBlog(info)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create Blog  ",
                showConfirmButton: false,
                timer: 1500
            });
            // form.reset();
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create Blog items failed",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };


    return (
        <div>
            <Container>
                <form action="" onSubmit={handleAddProduct} className="pb-10">

                    <div className='mt-10  '>

                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9 capitalize'>add Blog</h2>
                        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label htmlFor="title">title</label>
                                <input name='title' type='text' placeholder='title ' className="mt-2 w-full py-[13px] px-[11px] border outline-0" />
                            </div>
                            {/* descaption */}
                            <div>
                                <label htmlFor="descaption">descaption</label>
                                <input name='descaption' type='text' placeholder='description ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* category */}
                            <div >
                                <label htmlFor="category">category </label>
                                
                                <select name="category" id="" className='w-full py-[13px] px-[11px] border outline-0'>
                                    <option value="Business">Business</option>
                                    <option value="Politics">Politics</option>
                                    <option value="Culture">Culture</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Careers">Careers</option>
                                   

                                </select>

                            </div>
                            
                            {/* image */}
                            <div>
                                <label htmlFor="image" className='capitalize'>image</label>
                                <input name='image' type='file' multiple placeholder='image ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* thumbnail */}
                            <div>
                                <label htmlFor="thumbnail01" className='capitalize'>thumbnail</label>
                                <div className='mt-2 border'>
                                    <input name='thumbnail01' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='thumbnail02' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                </div>
                            </div>
                            {/* tags */}
                            <div>
                                <label htmlFor="tag01" className='capitalize'>tags</label>
                                <div className='mt-2 border'>
                                    <input name='tag01' type='text' placeholder='tag01' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='tag02' type='text' placeholder='tag02' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='tag03' type='text' placeholder='tag03' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='tag04' type='text' placeholder='tag04' className='w-full py-[13px] px-[11px]  outline-0' />
                                </div>

                            </div>
                            {/* brand */}
                            {/* <div>
                                <label htmlFor="brand">brand</label>
                                <select name="brand" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    {brand?.map((item, idx) => <option key={idx} value={item.brand}>{item.brand}</option>)}
                                </select>
                            </div> */}
                            
                           





                        </div>
                    </div>
                    <div className=" mt-6">
                        <input type="submit" value="Add Blog" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px]" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddBlog;