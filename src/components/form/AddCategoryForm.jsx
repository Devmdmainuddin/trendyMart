import React from 'react';
import Heading from '../Shared/Heading';
import { useAddCategoryMutation } from '../../Featured/ProductAPI/categoryApi';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddCategoryForm = () => {
    const { user } = useAuth() || {}
    const [addCategory] = useAddCategoryMutation()

    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const category = form.category.value;
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }

        const info = {
            category: category,
            userInfo:userInfo
        }
        try {
          await addCategory(info)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create Category Item  ",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }catch(error){
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create Category items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit} action="">
                <h2 className='text-[#151875] text-[22px] font-josefin font-semibold  capitalize'>category add</h2>
                <input name='category' type='text' placeholder='category name ' className=" w-full py-[13px] px-[11px] border outline-0 mt-2" />
                <button type='submit'  className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-6" >submit</button>
            </form>
        </div>
    );
};

export default AddCategoryForm;