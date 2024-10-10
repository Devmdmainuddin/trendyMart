import React, { useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Container from '../../components/Shared/Container';
import { useGetUserByEmailQuery } from '../../Featured/auth/authApi';
import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const { user, logOut, setLoading, loading } = useAuth()
    const carts = useSelector((state) => state.cart.cartItem)
    const email = user?.email;
    const { data, error, isLoading } = useGetUserByEmailQuery(email);
    const [isChecked, setIsChecked] = useState(false);

    let { totalprice, totalQuntity } = carts.reduce((acc, item) => {
        acc.totalprice += item.price * item.qun
        acc.totalQuntity += item.qun
        return acc
    }, { totalprice: 0, totalQuntity: 0 })


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handlePayment = () => {
        fetch('http://localhost:5000/create-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 5000,
                currency: 'USD'
            }),
        })
            .then(response => response.text()) // Change to .text() for plain text response
            .then(data => {
                console.log(data); // Will log "result"
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
                                    <Link to='/myAccount/login'> <button className='text-[#1D3178]'>Login</button></Link>
                                </div>

                            </div>
                            <div className="mt-7">
                                <input type="text" name="" id="" defaultValue={data?.email} placeholder="Email or mobile phone number" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
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
                                        <input type="text" defaultValue={data?.firstName} name="firstName" id="" placeholder="First name (optional)" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                        <input type="text" defaultValue={data?.lastName} name="lastName" id="" placeholder="Last name" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                    </div>
                                    <div>
                                        <input type="text" name="address" defaultValue={data?.address} id="" placeholder="Address" className="mt-9 border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                        <input type="text" name="appaetment" id="" placeholder="Appaetnentment,suit,e.t.c (optinal)" className="mt-9 border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                        <input type="text" name="city" defaultValue={data?.city} id="" placeholder="City" className="mt-9 border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />

                                    </div>
                                    <div className='flex gap-[30px] justify-between items-center mt-8'>
                                        <input type="text" name="country" defaultValue={data?.country} id="" placeholder="Bangladesh" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                        <input type="text" name="postcode" defaultValue={data?.postCode} id="" placeholder="Postal Code" className="border-b border-[#E8E6F1] text-[#C5CBE3] text-sm font-josefin font-semibold  bg-transparent w-full outline-0 capitalize  pb-3" />
                                    </div>
                                    <div>
                                        <button className="inline-block mt-9 md:mt-[118px] text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Continue Shipping</button>
                                    </div>

                                </div>
                            </form>


                        </div>





                    </main>
                    <aside className='w-[371px] '>
                        {carts?.slice(0, 4).map(item =>
                            <div className='flex justify-between items-center border-b py-3'>

                                <div className="flex items-center  gap-4 py-4">
                                    <div className="w-[83px] h-[87px]">
                                        <img className="w-full h-full object-cover" src={item.image} alt="image" />
                                    </div>

                                    <div>
                                        <div className="text-sm font-josefin font-normal text-[#000000] capitalize">{item.title}</div>
                                        <div>
                                            <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">Color: <span>{
                                                item?.color === "#FF0000" ? 'red' : ''
                                                    || item?.color === "#FFFF00" ? 'Yellow' : ''
                                                        || item?.color === "#0000FF" ? 'Blue' : ''
                                                            || item?.color === "#FFA500" ? 'Orange' : ''
                                                                || item?.color === "#A52A2A" ? 'Brown' : ''
                                                                    || item?.color === "#008000" ? 'Green' : ''
                                                                        || item?.color === "#800080" ? 'Purple' : ''
                                                                            || item?.color === "#87CEEB" ? 'Sky' : ''}</span> </h5>
                                            <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">Quantity: <span>{item.qun}</span> </h5>
                                        </div>

                                    </div>
                                </div>
                                <p></p>  <span className="text-sm text-[#15245E] font-josefin font-normal">${item.discount ? parseInt(item?.price) - ((parseInt(item?.price) * parseInt(item?.discount)) / 100) : item.price}</span>

                            </div>
                        )}



                        <div className='bg-[#F4F4FC] py-8 px-6 mt-10'>

                            <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center">Subtotals: <p>$ <span>{totalprice}</span></p> </h4>
                            <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center mt-8">shipping cost: <p>$ <span>50</span></p> </h4>
                            <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center mt-8">Totals: <p>$ <span>{totalprice + 50}</span></p> </h4>

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

                            <button onClick={handlePayment} className="text-sm font-josefin font-semibold py-3 w-full bg-[#19D16F] text-white rounded-sm mt-8">Proceed To Checkout</button>


                        </div>

                    </aside>
                </div>

            </Container>
        </div>
    );
};

export default Checkout;