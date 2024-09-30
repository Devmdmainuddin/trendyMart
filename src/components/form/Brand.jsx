import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useAddBrandMutation } from '../../Featured/ProductAPI/brandApi';
import Swal from 'sweetalert2';

const Brand = () => {
    const { user } = useAuth() || {}
    const [addBrand]=useAddBrandMutation()


    const handleSubmit =async (e) => {
        e.preventDefault();

        const form = e.target;
        const brand = form.brand.value;

        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }

        const info = {
            brand: brand,
            userInfo:userInfo
        }
        try {
            await addBrand(info)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create Brand Item  ",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }catch(error){
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create Brand items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (

        <div className='mt-10'>
            <form onSubmit={handleSubmit} action="">
                <h2 className='text-[#151875] text-[22px] font-josefin font-semibold  capitalize mt-3'>brand add</h2>
                <input name='brand' type='text' placeholder='category name ' className=" w-full py-3 px-[11px] border outline-0 mt-2" />
                <input type="submit" value="submit" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-6" />
            </form>
        </div>
    );
};

export default Brand;