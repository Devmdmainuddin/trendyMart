
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useGetCategoryQuery } from "../../../Featured/ProductAPI/categoryApi";
import { useGetSubcategoryQuery } from "../../../Featured/ProductAPI/subCategoryApi";
import { useGetBrandQuery } from "../../../Featured/ProductAPI/brandApi";
import { useUpdateProductMutation } from "../../../Featured/ProductAPI/productApi";

const EdditProductCard = () => {
    const { user } = useAuth() || {}
    const product = useLoaderData();
    const [updateProduct] = useUpdateProductMutation()

    const handleEdditProduct = async (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const descaption = form.descaption.value;
        const dimensions = form.dimensions.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const color = form.color.value;
        const availability_status = form.availability_status.value;
        const minimum_order_quantity = form.minimum_order_quantity.value;
        const return_policy = form.return_policy.value;
        const weight = form.weight.value;
        const warranty_information = form.warranty_information.value
        const shipping_cost = form.shipping_cost.value;
        const stock_levels = form.stock_levels.value;
        const updateAt = (new Date()).toDateString();
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }

        const info = {
          
            title,
            price,
            color,
            descaption,
            updateAt,
            availability_status,
            minimum_order_quantity,
            return_policy,
            shipping_information: {
                weight,
                dimensions,
                shipping_cost
            },
            stock_levels,
            warranty_information,
            discount,
            dimensions,
            userInfo
        };


        try {
            await updateProduct({ id: product?._id, updateProduct: info })

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " update product  ",
                showConfirmButton: false,
                timer: 1500
            });

        }
        catch (err) {
 
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " update product items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };

    return (
        <div className="">
            <form action="" onSubmit={handleEdditProduct} className="pb-10">

                <div className='mt-10  '>

                    <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9 capitalize'>update product</h2>
                    <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label htmlFor="title">title</label>
                            <input name='title' defaultValue={product.title} type='text' placeholder='title ' className="mt-2 w-full py-[13px] px-[11px] border outline-0" />
                        </div>
                        {/* descaption */}
                        <div>
                            <label htmlFor="descaption">descaption</label>
                            <input name='descaption' defaultValue={product.descaption} type='text' placeholder='description ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>
                        {/* price */}
                        <div>
                            <label htmlFor="price">price</label>
                            <input name='price' defaultValue={product.price} type='number' placeholder=' price ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>
                        {/* discount */}
                        <div>
                            <label htmlFor="discount">discount</label>
                            <input name='discount' defaultValue={product.discount} type='number' placeholder='discount ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>
                        {/* dimensions */}
                        <div>
                            <label htmlFor="dimensions">dimensions</label>
                            <input name='dimensions' defaultValue={product.dimensions} type='text' placeholder=' dimensions ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>
                        {/* weight */}
                        <div>
                            <label htmlFor="weight">weight</label>
                            <input name='weight' defaultValue={product.shipping_information.weight} type='text' placeholder='weight' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>

                        {/* stock */}
                        <div>
                            <label htmlFor="stock_levels" className='capitalize'>stock</label>
                            <input name='stock_levels' defaultValue={product.stock_levels} type='number' placeholder='stock levels' className='w-full py-[13px] px-[11px] border outline-0' />
                        </div>

                        {/* color */}
                        <div>
                            <label htmlFor="color">color</label>
                            <select name="color" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                <option value='#FF0000'>Red</option>
                                <option value='#FFFF00'>Yellow</option>
                                <option value='#0000FF'>Blue</option>
                                <option value='#FFA500'>Orange</option>
                                <option value='#A52A2A'>Brown</option>
                                <option value='#008000'>Green</option>
                                <option value='#800080'>Purple</option>
                                <option value='#87CEEB'>Sky</option>
                            </select>
                        </div>
                    

                        {/* return */}
                        <div>
                            <label htmlFor="return_policy">return</label>
                            <input name='return_policy' defaultValue={product.return_policy} type='text' placeholder='return policy ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>
                        {/* warranty */}
                        <div>
                            <label htmlFor="warranty_information">warranty</label>
                            <input name='warranty_information' defaultValue={product.warranty_information} type='text' placeholder='warranty information' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>


                        {/*availability  */}
                        <div>
                            <label htmlFor="availability_status">availability</label>
                            <select name="availability_status" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                <option value="In Stock">In Stock</option>
                                <option value="Out Of Stock">Out Of Stock</option>
                            </select>
                        </div>
                        {/* quantity */}
                        <div>
                            <label htmlFor="minimum_order_quantity">minimum order quantity</label>
                            <input name='minimum_order_quantity' defaultValue={product.minimum_order_quantity} type='number' placeholder='minimum order quantity' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>

                        {/* shipping cost */}
                        <div>
                            <label htmlFor="shipping_cost">shipping cost</label>
                            <input name='shipping_cost' defaultValue={product.shipping_information
                                .shipping_cost} type='number' placeholder='shipping cost' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                        </div>
                    </div>
                </div>
                <div className=" mt-6">
                    <input type="submit" value="update product" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px]" />
                </div>
            </form>
        </div>
    );
};

export default EdditProductCard;