import React from 'react';
// import Heading from '../Shared/Heading';
import AddCategoryForm from './AddCategoryForm';
import Container from '../Shared/Container';
import AddSubCategoryForm from './AddSubCategoryForm';
import Brand from './Brand';
import {imageUpload} from '../../utils/index'
// import { useGetCategoryQuery } from '../../Featured/ProductAPI/categoryApi';
import { useGetSubcategoryQuery } from '../../Featured/ProductAPI/subCategoryApi';
import { useGetBrandQuery } from '../../Featured/ProductAPI/brandApi';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useAddProductMutation } from '../../Featured/ProductAPI/productApi';

const AddProductForm = () => {
    const { user } = useAuth() || {}
    // const { data: category } = useGetCategoryQuery()
    const { data: subcategory } = useGetSubcategoryQuery()
    const { data: brand } = useGetBrandQuery()
    const [addProduct]=useAddProductMutation()

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const form = e.target;

        const thumbnailImage01 = form.thumbnail01.files[0]
        const thumbnailImage02 = form.thumbnail02.files[0]
        const thumbnailImage03 = form.thumbnail03.files[0]
        const thumbnailImage04 = form.thumbnail04.files[0]
        const thumbnail01 = await imageUpload(thumbnailImage01);
        const thumbnail02 = await imageUpload(thumbnailImage02);
        const thumbnail03 = await imageUpload(thumbnailImage03);
        const thumbnail04 = await imageUpload(thumbnailImage04);
        const image_url = form.image.files[0]
        const image = await imageUpload(image_url)
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const descaption = form.descaption.value;
        const dimensions = form.dimensions.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const availability_status = form.availability_status.value;
        const minimum_order_quantity = form.minimum_order_quantity.value;
        const return_policy = form.return_policy.value;
        const weight = form.weight.value;
        const warranty_information = form.warranty_information.value
        const shipping_cost = form.shipping_cost.value;
        const stock_levels = form.stock_levels.value;
        const tag01 = form.tag01.value;
        const tag02 = form.tag02.value;
        const tag03 = form.tag03.value;
        const tag04 = form.tag04.value;
        const createAt = (new Date()).toDateString();
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }

        const info = {
            thumbnail:{
                thumbnail01,
                thumbnail02,
                thumbnail03,
                thumbnail04
            },
            image,
            title,
            brand,
            price,
            descaption,
            category,
            subcategorys: {

            },
            createAt,
            availability_status,
            minimum_order_quantity,
            return_policy,
            shipping_information: {
                weight,
                dimensions,
                shipping_cost
            },
            stock_levels,
            tags: {
                tag01,
                tag02,
                tag03,
                tag04
            },
            warranty_information,
            discount,
            dimensions,
            userInfo
        };
        console.log(info);

        try {
            await addProduct(info)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create product  ",
                showConfirmButton: false,
                timer: 1500
            });
            // form.reset();
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create product items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };

    return (
        <div>

            {/* add category*/}
            <Container>
                <AddCategoryForm></AddCategoryForm>

                <AddSubCategoryForm></AddSubCategoryForm>
                <Brand></Brand>
                {/* add product */}
                <form action="" onSubmit={handleAddProduct} className="pb-10">

                    <div className='mt-10  '>

                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9 capitalize'>add product</h2>
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
                            {/* price */}
                            <div>
                                <label htmlFor="price">price</label>
                                <input name='price' type='number' placeholder=' price ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* discount */}
                            <div>
                                <label htmlFor="discount">discount</label>
                                <input name='discount' type='number' placeholder='discount ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* dimensions */}
                            <div>
                                <label htmlFor="dimensions">dimensions</label>
                                <input name='dimensions' type='text' placeholder=' dimensions ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* weight */}
                            <div>
                                <label htmlFor="weight">weight</label>
                                <input name='weight' type='number' placeholder='weight' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>

                            {/* stock */}
                            <div>
                                <label htmlFor="stock_levels" className='capitalize'>stock</label>
                                <input name='stock_levels' type='number' placeholder='stock levels' className='w-full py-[13px] px-[11px] border outline-0' />
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
                                    <input name='thumbnail03' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                    <input name='thumbnail04' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px]  outline-0' />

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


                            {/* return */}
                            <div>
                                <label htmlFor="return_policy">return</label>
                                <input name='return_policy' type='text' placeholder='return policy ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* warranty */}
                            <div>
                                <label htmlFor="warranty_information">warranty</label>
                                <input name='warranty_information' type='text' placeholder='warranty information' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>


                            {/*availability  */}
                            <div>
                                <label htmlFor="availability_status">availability</label>
                                <select name="availability_status" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out Of Stock">Out Of Stock</option>
                                </select>
                            </div>


                            {/* brand */}
                            <div>
                                <label htmlFor="brand">brand</label>
                                <select name="brand" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    {brand?.map((item, idx) => <option key={idx} value={item.brand}>{item.brand}</option>)}
                                </select>
                            </div>
                            {/* category */}
                            <div >
                                <label htmlFor="category">category </label>
                                <div className='flex mt-2'>
                                    <select name="subcategory" id="" className=' w-[95px] py-[13px] px-[11px] border outline-0'>
                                        {subcategory?.map((items, idx) => <option key={idx} value={items.category}>{items.category}</option>)}
                                    </select>
                                    <input name='category' type='text' placeholder='category ' className='w-full py-[13px] px-[11px] border outline-0' />
                                </div>

                            </div>
                            {/* quantity */}
                            <div>
                                <label htmlFor="minimum_order_quantity">order quantity</label>
                                <input name='minimum_order_quantity' type='number' placeholder='minimum order quantity' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>

                            {/* shipping cost */}
                            <div>
                                <label htmlFor="shipping_cost">shipping cost</label>
                                <input name='shipping_cost' type='number' placeholder='shipping cost' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>





                        </div>
                    </div>
                    <div className=" mt-6">
                        <input type="submit" value="Add product" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px]" />
                    </div>
                </form>

            </Container>
        </div>
    );
};

export default AddProductForm;