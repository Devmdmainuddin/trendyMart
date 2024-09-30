
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useUpdateProductMutation } from "../../../services/productApi";

const EdditProductCard = () => {

    const product = useLoaderData();
    const [updateProduct] = useUpdateProductMutation()


    const handleEdditProduct = async (e) => {
        e.preventDefault();
        // console.log('ok')
        const form = e.target;

        // const thumbnailImage = form.thumbnail.files[0]
        // const thumbnail = await imageUpload(thumbnailImage)
        // const image_url = form.image.files[0]
        // const image = await imageUpload(image_url)
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
        const shipping_cost = form.shipping_cost.value;
        const stock_levels = form.stock_levels.value;
        const tag01 = form.tag01.value;
        const tag02 = form.tag02.value;
        const tag03 = form.tag03.value;
        const tag04 = form.tag04.value;
        const update = (new Date()).toDateString();
        const productid = product?._id
        const info = {
            title,
            brand,
            price,
            descaption,
            category,
            update,
            availability_status,
            minimum_order_quantity,
            return_policy,
            stock_levels,
            discount,
            dimensions,
        };


        try {
            await updateProduct({id:product?._id, updateProduct:info})
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " update product  ",
                showConfirmButton: false,
                timer: 1500
            });

        }
        catch (err) {
            // console.log(err)
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
            <form action="" onSubmit={handleEdditProduct} className="px-8">

                <div className='mt-10 border-b pb-10'>
                    <h2 className='text-3xl font-bold mb-10 uppercase'>edit product</h2>

                    <div className='flex flex-wrap gap-x-10 gap-y-6'>
                        {/* title */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='title'>title</label>

                            <input
                                name='title'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.title}
                                placeholder='title ' />
                        </div>
                        {/* brand */}
                        <div className="border-b w-full md:w-[408px] border-[#73dcf9]">
                            <label htmlFor="brand" className='font-bold uppercase'>brand</label>
                            <select name="brand" id="" className='block w-full mt-4  outline-none bg-transparent '>

                                <option value="FlexFit">FlexFit</option>
                                <option value="h&m">h&m</option>
                                <option value="ChefMaster">ChefMaster</option>
                                <option value="WristTech">WristTech</option>
                                <option value="ComfyChair">ComfyChair</option>

                            </select>
                        </div>
                        {/* category */}
                        <div className="border-b w-full md:w-[408px] border-[#73dcf9]">
                            <label htmlFor="category" className='font-bold uppercase'>category</label>
                            <select name="category" id="" className='block w-full mt-4  outline-none bg-transparent '>
                                <option value="Health & Beauty">Health & Beauty</option>
                                <option value="furniture">furniture</option>
                                <option value="groceries">groceries</option>
                                <option value="Women's & Girls' Fashion">Women{`'`}s & Girls{`'`} Fashion</option>
                                <option value="Men's & Boys' Fashion">Men{`'`}s & Boys{`'`} Fashion</option>
                                <option value="Electronic Accessories">Electronic Accessories</option>
                                <option value="Home & Lifestyle">Home & Lifestyle</option>
                                <option value="Watches, Bags, Jewellery">Watches, Bags, Jewellery</option>
                                <option value="TV & Home Appliances">TV & Home Appliances</option>
                                <option value="Mother & Baby">Mother & Baby</option>
                                <option value="Sports & Outdoors">Sports & Outdoors</option>
                            </select>
                        </div>
                        {/* thumbnail */}
                        {/* <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='thumbnail'>thumbnail</label>

                            <input
                                name='thumbnail'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='file'
                                multiple

                                placeholder='product thumbnail' />
                        </div> */}
                        {/* images */}
                        {/* <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='image'>images</label>

                            <input
                                name='image'
                                id=''

                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='file'
                                multiple
                                placeholder='image ' />
                        </div> */}
                        {/* description */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='descaption'>description</label>

                            <input
                                name='descaption'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.descaption}
                                placeholder='description ' />
                        </div>
                        {/* dimensions */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='dimensions'>dimensions</label>

                            <input
                                name='dimensions'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.dimensions}
                                placeholder='product dimensions ' />
                        </div>
                        {/* price */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='price'>price</label>

                            <input
                                name='price'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                defaultValue={product.price}
                                placeholder='product price ' />
                        </div>
                        {/* discount */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='discount'>discount</label>

                            <input
                                name='discount'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                defaultValue={product.discount}
                                placeholder='product discount  ' />
                        </div>
                        {/* availability status */}
                        <div className="border-b w-full md:w-[408px] border-[#73dcf9]">
                            <label htmlFor="availability_status" className='font-bold uppercase'>availability status</label>
                            <select name="availability_status" defaultValue={product.availability_status} id="" className='block w-full mt-4  outline-none bg-transparent '>

                                <option value="In Stock">In Stock</option>
                                <option value="Out Of Stock">Out Of Stock</option>


                            </select>
                        </div>
                        {/* minimum order quantity */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='minimum_order_quantity'>minimum order quantity</label>

                            <input
                                name='minimum_order_quantity'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                defaultValue={product.minimum_order_quantity}
                                placeholder='minimum order quantity' />
                        </div>
                        {/* return policy */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='return_policy'>return policy</label>

                            <input
                                name='return_policy'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.return_policy}
                                placeholder='return policy ' />
                        </div>
                        {/* stock levels */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='stock_levels'>stock levels</label>

                            <input
                                name='stock_levels'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                defaultValue={product.stock_levels}
                                placeholder='stock levels' />
                        </div>
                        {/* warranty information */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='warranty_information'>warranty information</label>

                            <input
                                name='warranty_information'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.warranty_information}
                                placeholder='warranty information' />
                        </div>
                        {/* weight */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='weight'>weight</label>

                            <input
                                name='weight'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                defaultValue={product.shipping_information.weight}
                                placeholder='weight' />
                        </div>
                        {/* shipping cost */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='shipping_cost'>shipping cost</label>

                            <input
                                name='shipping_cost'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                defaultValue={product.shipping_information.shipping_cost}
                                placeholder='shipping cost' />
                        </div>
                        {/* tags */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='tag01'>tags</label>
                            <input
                                name='tag01'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.tags.tag01}
                                placeholder='tag01' />
                            <input
                                name='tag02'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.tags.tag02}
                                placeholder='tag02' />
                            <input
                                name='tag03'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.tags.tag03}
                                placeholder='tag03' />
                            <input
                                name='tag04'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                defaultValue={product.tags.tag04}
                                placeholder='tag04' />
                        </div>
                    </div>
                    <div className=" mt-6">
                        <input
                            className=" py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out"
                            type="submit"
                            value="Edit product"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EdditProductCard;