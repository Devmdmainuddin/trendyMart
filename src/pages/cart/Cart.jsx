import { useState } from "react";
import Bredcumb from "../../components/Shared/Bredcumb";
import Container from "../../components/Shared/Container";


const Cart = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-[81px] mt-[16] md:mt-[131px]">
               <div className="main">
               <table className="table-auto  w-[718px]  ">
                    <thead>
                        <tr className="">

                            <td className="p-0">
                                <h3 className="text-xl text-[#1D3178] font-bold font-josefin">Product</h3>
                            </td>
                            <td className="p-0">
                                <h3 className="text-xl text-[#1D3178] font-bold font-josefin">Price</h3>

                            </td>
                            <td className="p-0">

                                <h3 className="text-xl text-[#1D3178] font-bold font-josefin">Quantity</h3>

                            </td>
                            <td className="p-0">
                                <h3 className="text-xl text-[#1D3178] font-bold font-josefin">total</h3>

                            </td>

                        </tr>
                    </thead>
                    <tbody >
                        <tr className=" border-b border-gray-100 ">

                            <td className="p-0">
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
                            </td>
                            <td className="p-0">
                                <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                            </td>

                            <td className="p-0">
                                <p> -<span>0</span>+</p>
                            </td>
                            <td className="p-0">
                                <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                            </td>

                        </tr>
                        <tr className=" border-b border-gray-100 ">

                            <td className="p-0">
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
                            </td>
                            <td className="p-0">
                                <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                            </td>

                            <td className="p-0">
                                <p> -<span>0</span>+</p>
                            </td>
                            <td className="p-0">
                                <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                            </td>

                        </tr>
                        <tr className=" border-b border-gray-100 ">

                            <td className=" ">
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
                            </td>
                            <td className="p-0">
                                <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                            </td>

                            <td className="p-0">
                                <p> -<span>0</span>+</p>
                            </td>
                            <td className="p-0">
                                <span className="text-sm text-[#15245E] font-josefin font-normal">$500</span>

                            </td>

                        </tr>


                    </tbody>
                </table>

                <div className="flex justify-between items-center mt-16">
                <button className="inline-block text-sm font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Update Cart</button>
                <button className= "inline-block text-sm font-josefin font-semibold py-3 px-5  bg-[#FB2E86] text-white rounded-sm capitalize">Clear Cart</button>
                </div>
               </div>
               
                <div className="sitebar w-[371px]">
                    <h2 className="text-[#1D3178] font-bold text-xl font-josefin text-center capitalize">Cart Totals</h2>
                    <div className="bg-[#F4F4FC] py-8 px-6 mt-10">
                        <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center">Subtotals: <p>$ <span>219</span></p> </h4>
                        <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center mt-8">Totals: <p>$ <span>219</span></p> </h4>

                        <div className="mt-4">

                            <input
                                type="checkbox"
                                id="shipping"
                                className={`w-3 h-3 mr-1 rounded-full border-2 border-gray-500 cursor-pointer appearance-none 
                    ${isChecked ? 'bg-[#19D16F] border-none' : ''}`}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="shipping">Shipping & taxes calculated at checkout</label>
                        </div>

                        <button className="text-sm font-josefin font-semibold py-3 w-full bg-[#19D16F] text-white rounded-sm mt-8">Proceed To Checkout</button>
                    </div>
                    {/* ........................ */}
                    <h2 className="text-[#1D3178] font-bold text-xl font-josefin text-center capitalize my-8">Calculate Shopping</h2>
                    <div className="bg-[#F4F4FC] py-8 px-6 mt-10">
                        <input type="text" name="" id="" placeholder="country" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize mt-6" />
                        <input type="text" name="" id="" placeholder="city" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize mt-6" />
                        <input type="text" name="" id="" placeholder="post code" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize mt-6" />



                        <button className="text-sm font-josefin font-semibold py-3 w-full bg-[#FB2E86] text-white rounded-sm mt-8">Proceed To Checkout</button>
                    </div>

                </div>
                </div>
                
            </Container>

        </div>
    );
};

export default Cart;