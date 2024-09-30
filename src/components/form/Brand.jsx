import React from 'react';

const Brand = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const category = form.category.value;
    }

    return (

        <div className='mt-10'>
            <form onClick={handleSubmit} action="">
                <h2 className='text-[#151875] text-[22px] font-josefin font-semibold  capitalize mt-3'>brand add</h2>
                <input name='category' type='text' placeholder='category name ' className=" w-full py-3 px-[11px] border outline-0 mt-2" />
                <input type="submit" value="submit" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-6" />
            </form>
        </div>
    );
};

export default Brand;