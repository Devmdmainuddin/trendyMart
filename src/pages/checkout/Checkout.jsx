import React, { useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Container from '../../components/Shared/Container';

const Checkout = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                <div className='flex flex-wrap gap-[30px] justify-between mt-16'>
                    <main className='bg-[#F8F8FD] lg:w-[770px] py-8 md:py-16 px-4 md:px-[30px]'>
                        <div>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-[#1D3178] text-lg font-josefin font-bold'>Contact Information</h3>
                                <div className='flex gap-2 text-sm text-[#C1C8E1] font-josefin font-medium '>
                                    <p>Already have an account?</p>
                                    <button className='text-[#1D3178]'>Login</button>
                                </div>

                            </div>
                            <div className="mt-7">
                                <input type="text" name="" id="" placeholder="Email or mobile phone number" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                <div className="mt-4">

                                    <input
                                        type="checkbox"
                                        id="shipping"
                                        className={`w-2 h-2 mr-1 rounded-sm border-2 border-gray-500 cursor-pointer appearance-none 
                    ${isChecked ? 'bg-[#19D16F] border-none' : ''}`}
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor="shipping" className='text-[#8A91AB] text-[12px] font-normal'>Shipping & taxes calculated at checkout</label>
                                </div>
                            </div>
                        </div>

                        <div className='mt-[106px]'>
                            <h3 className='text-[#1D3178] text-lg font-josefin font-bold'>Shipping address</h3>
                            <form action="">

                            <div>
                                <div className='flex gap-[30px] justify-between items-center mt-8'>
                                    <input type="text" name="firstName" id="" placeholder="First name (optional)" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                    <input type="text" name="lastName" id="" placeholder="Last name" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                </div>
                                <div>
                                    <input type="text" name="address" id="" placeholder="Address" className="mt-9 border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                    <input type="text" name="appaetment" id="" placeholder="Appaetnentment,suit,e.t.c (optinal)" className="mt-9 border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                    <input type="text" name="city" id="" placeholder="City" className="mt-9 border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />

                                </div>
                                <div className='flex gap-[30px] justify-between items-center mt-8'>
                                    <input type="text" name="country" id="" placeholder="Bangladesh" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                    <input type="text" name="postcode" id="" placeholder="Postal Code" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                </div>
                                <div>
                                <button className="inline-block mt-9 md:mt-[118px] text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Continue Shipping</button>
                                </div>

                            </div>
                            </form>

                            
                        </div>





                    </main>
                    <aside className='w-[371px] '>
                        <div className='flex justify-between items-center border-b py-3'>

                            <div className="flex items-center  gap-4 py-4">
                                <div className="w-[83px] h-[87px]">
                                    <img className="w-full h-full object-cover" src="/cart.png" alt="image" />
                                </div>

                                <div>
                                    <div className="text-sm font-josefin font-normal text-[#000000] capitalize">Ut diam consequat</div>
                                    <div>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">Color: <span>Brown</span> </h5>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">size: <span>xl</span> </h5>
                                    </div>

                                </div>
                            </div>
                            <p></p>  <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                        </div>
                        <div className='flex justify-between items-center border-b py-3'>

                            <div className="flex items-center  gap-4 py-4">
                                <div className="w-[83px] h-[87px]">
                                    <img className="w-full h-full object-cover" src="/cart.png" alt="image" />
                                </div>

                                <div>
                                    <div className="text-sm font-josefin font-normal text-[#000000] capitalize">Ut diam consequat</div>
                                    <div>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">Color: <span>Brown</span> </h5>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">size: <span>xl</span> </h5>
                                    </div>

                                </div>
                            </div>
                            <p></p>  <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                        </div>
                        <div className='flex justify-between items-center border-b py-3'>

                            <div className="flex items-center  gap-4 py-4">
                                <div className="w-[83px] h-[87px]">
                                    <img className="w-full h-full object-cover" src="/cart.png" alt="image" />
                                </div>

                                <div>
                                    <div className="text-sm font-josefin font-normal text-[#000000] capitalize">Ut diam consequat</div>
                                    <div>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">Color: <span>Brown</span> </h5>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">size: <span>xl</span> </h5>
                                    </div>

                                </div>
                            </div>
                            <p></p>  <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                        </div>
                        <div className='flex justify-between items-center border-b py-3'>

                            <div className="flex items-center  gap-4 py-4">
                                <div className="w-[83px] h-[87px]">
                                    <img className="w-full h-full object-cover" src="/cart.png" alt="image" />
                                </div>

                                <div>
                                    <div className="text-sm font-josefin font-normal text-[#000000] capitalize">Ut diam consequat</div>
                                    <div>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">Color: <span>Brown</span> </h5>
                                        <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">size: <span>xl</span> </h5>
                                    </div>

                                </div>
                            </div>
                            <p></p>  <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                        </div>

                        <div className='bg-[#F4F4FC] py-8 px-6 mt-10'>

                            <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center">Subtotals: <p>$ <span>219</span></p> </h4>
                            <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center mt-8">Totals: <p>$ <span>219</span></p> </h4>

                            <div className="mt-4">

                                <input
                                    type="checkbox"
                                    id="shipping"
                                    className={`w-2 h-2 mr-1 rounded-full border-2 border-gray-500 cursor-pointer appearance-none 
                    ${isChecked ? 'bg-[#19D16F] border-none' : ''}`}
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="shipping" className='text-[#8A91AB] text-[12px] font-normal'>Shipping & taxes calculated at checkout</label>
                            </div>

                            <button className="text-sm font-josefin font-semibold py-3 w-full bg-[#19D16F] text-white rounded-sm mt-8">Proceed To Checkout</button>


                        </div>

                    </aside>
                </div>

            </Container>
        </div>
    );
};

export default Checkout;