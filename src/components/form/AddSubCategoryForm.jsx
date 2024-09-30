import React from 'react';
import Swal from 'sweetalert2';
import { useAddSubcategoryMutation } from '../../Featured/ProductAPI/subCategoryApi';
import useAuth from '../../hooks/useAuth';
import { useGetCategoryQuery } from '../../Featured/ProductAPI/categoryApi';

const AddSubCategoryForm = () => {
    const { user } = useAuth() || {}
    const [addSubCategory] = useAddSubcategoryMutation()
    const {data}=useGetCategoryQuery()
    console.log(data);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const category = form.category.value;
        const subcategory = form.subcategory.value;
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }
        const info = {
            category: category,
            subcategory: subcategory,
            userInfo:userInfo
            
        }
        try {
            await addSubCategory(info)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create subCategory Item  ",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create subCategory items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit} action="">
                <h2 className='text-[#151875] text-[22px] font-josefin font-semibold capitalize'>Subcategory add</h2>
                <div className='flex gap-2'>
                    <select name="category" id="" className='w-full py-[13px] px-[11px] border outline-0 mt-2'>
                       {data?.map((item,idx)=>  <option key={idx} value={item.category}>{item.category}</option>)}
                        
                    </select>
                    <input name='subcategory' type='text' placeholder='category name ' className=" mt-2 w-full py-[13px] px-[11px] border outline-0" />
                </div>

                <input type="submit" value="submit" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-6" />
            </form>
        </div>
    );
};

export default AddSubCategoryForm;