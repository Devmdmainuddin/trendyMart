
import React from 'react';
import Container from './Container';
import { IoGrid } from 'react-icons/io5';
import { FaThList } from 'react-icons/fa';

const FilterBar = () => {
    return (
        <div>
            <Container>
                <div className='flex flex-col md:flex-row
                 justify-between items-center mt-6 md:16 lg:my-[124px] gap-6'>
                    <div className="category">
                        <div>
                            <h2 className='text-[#151875] capitalize text-[22px] font-josefin font-bold'>Ecommerce Acceories & Fashion item </h2>

                            <p className='text-[#8A8FB9] capitalize text-[12px] font-josefin font-normal'>About 9,620 results (0.62 seconds)</p>
                        </div>
                    </div>
                    <div className="filter flex gap-6">
                        <div className='flex gap-1 items-center'>
                            <p className='text-[#3F509E] text-[16px] font-normal capitalize'>per page</p>
                            <select        
                              name="" id="" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8]  px-5 outline-none'>
                                <option value="3">3</option>
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="15">15</option>
                                <option value="18">18</option>
                                <option value="21">21</option>

                            </select>

                        </div>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[#3F509E] text-[16px] font-normal capitalize'>sort by:</p>
                            <select
                                onChange={(e) => {
                                    // Log the selected value to check if the event is firing
                                    if (e.target.value === "new") {
                                        handleByNew();
                                    } else if (e.target.value === "old") {
                                        handleByOld();
                                    }
                                }}
                                name="sort"
                                id="sort"
                                className="text-[#737373] text-[16px] font-normal border border-[#e8e8e8]  px-5"
                            >
                                <option value="new" className="text-black bg-white">New</option>
                                <option value="old" className="text-black bg-white">Old</option>
                            </select>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='text-[#3F509E] text-[16px] font-normal capitalize'>view:</p>
                            <div className="icon flex gap-1">
                                <div className={`  text-[#737373] border-[#F0F0F0] w-6   h-6 border  flex justify-center items-center  `}>
                                    <IoGrid className='text-[16px]' />
                                </div>
                                <div className={`   w-6   h-6  border border-[#F0F0F0] flex justify-center items-center text-[#737373] `}>
                                    <FaThList className='text-[16px]' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FilterBar;