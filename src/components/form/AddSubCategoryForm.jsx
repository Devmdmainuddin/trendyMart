import React from 'react';

const AddSubCategoryForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const category = form.category.value;
    }
    return (
        <div className='mt-10'>
            <form onClick={handleSubmit} action="">
                <h2 className='text-[#151875] text-[22px] font-josefin font-semibold capitalize'>Subcategory add</h2>
                <div className='flex gap-2'>
                <select name="category" id="" className='w-full py-[13px] px-[11px] border outline-0 mt-2'>
                    <option value="Health & Beauty">Health & Beauty</option>
                    <option value="furniture">furniture</option>
                    <option value="groceries">groceries</option>
                </select>
                <input name='category' type='text' placeholder='category name ' className=" mt-2 w-full py-[13px] px-[11px] border outline-0" />
                </div>
               
                <input type="submit" value="submit" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-6" />
            </form>
        </div>
    );
};

export default AddSubCategoryForm;