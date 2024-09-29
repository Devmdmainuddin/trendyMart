import React from 'react';

const AddProductForm = () => {

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const form = e.target;

        const thumbnailImage = form.thumbnail.files[0]
        const thumbnail = await imageUpload(thumbnailImage)
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
            thumbnail,
            image,
            title,
            brand,
            price,
            descaption,
            category,
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
            form.reset();
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
            <form action="" onSubmit={handleAddProduct} className="px-8">

                <div className='mt-10 border-b pb-10'>
                    <h2 className='text-3xl font-bold mb-10 uppercase'>add product</h2>

                    <div className=" flex justify-between gap-6 items-center">
                        <input name='title' type='text' placeholder='title ' className=" w-full py-[13px] px-[11px] border outline-0" />
                        <input name='descaption' type='text' placeholder='description ' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='shipping_cost' type='number' placeholder='shipping cost' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='price' type='number' placeholder='product price ' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='dimensions' type='text' placeholder='product dimensions ' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='minimum_order_quantity' type='number' placeholder='minimum order quantity' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='discount' type='number' placeholder='product discount  ' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='image' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='thumbnail' type='file' multiple placeholder='image ' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='return_policy' type='text' placeholder='return policy ' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='stock_levels' type='number' placeholder='stock levels' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='warranty_information' type='text' placeholder='warranty information' className='w-full py-[13px] px-[11px] border outline-0' />
                        <input name='weight' type='number' placeholder='weight' className='block w-full pb-4 mt-4 outline-none bg-transparent' />
                        <input name='tag01' type='text' placeholder='tag01' className='block w-full pb-4 mt-4 outline-none bg-transparent' />
                        <input name='tag02' type='text' placeholder='tag02' className='block w-full pb-4 mt-4 outline-none bg-transparent' />
                        <input name='tag03' type='text' placeholder='tag03' className='block w-full pb-4 mt-4 outline-none bg-transparent' />
                        <input name='tag04' type='text' placeholder='tag04' className='block w-full pb-4 mt-4 outline-none bg-transparent' />
                        <select name="availability_status" id="" className='block w-full pb-4 mt-4 outline-none bg-transparent'>
                            <option value="In Stock">In Stock</option>
                            <option value="Out Of Stock">Out Of Stock</option>
                        </select>
                        <select name="brand" id="" className='block w-full pb-4 mt-4 outline-none bg-transparent'>
                            <option value="FlexFit">FlexFit</option>
                            <option value="h&m">h&m</option>
                            <option value="ChefMaster">ChefMaster</option>
                            <option value="WristTech">WristTech</option>
                            <option value="ComfyChair">ComfyChair</option>
                        </select>
                        <select name="category" id="" className='block w-full pb-4 mt-4 outline-none bg-transparent'>
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

                    <div className=" mt-6">
                        <input type="submit"  value="Add product" className=" py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out" />
                    </div>


                </div>
            </form>
        </div>
    );
};

export default AddProductForm;