import { useState } from "react";
import Bredcumb from "../../components/Shared/Bredcumb";
import Container from "../../components/Shared/Container";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, clearCart, deleteItem } from "../../Featured/CartAPI/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";


const Cart = () => {
    const carts = useSelector((state) => state.cart.cartItem)
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteItem(id));
                // await mutateAsync(id)
                dispatch(clearCart());

            }
        });
    }
    const handleclear = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "clear all Cart items!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(clearCart());
            }
        });
    }
    const handkeMinusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity - 1, }))
    }
    const handkePlusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity + 1, }))
    }
    let { totalprice, totalQuntity } = carts.reduce((acc, item) => {
        acc.totalprice += item.price * item.qun
        acc.totalQuntity += item.qun
        return acc
    }, { totalprice: 0, totalQuntity: 0 })


    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                {carts.length ?<div className="flex flex-col md:flex-row justify-between gap-6 md:gap-[81px] mt-[16] md:mt-[131px]">
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
                                {carts.map((item, key) =>
                                    <tr key={key} className=" border-b border-gray-100 ">
                                    <td className="p-0">
                                        <div className="flex items-center  gap-4 py-4">
                                            <div className="w-[83px] h-[87px]">
                                                <img className="w-full h-full object-cover" src={item.image} alt="image" />
                                            </div>

                                            <div>
                                                <div className="text-sm font-josefin font-normal text-[#000000] capitalize">{item.title}</div>
                                                <div>
                                                    <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">Color: <span>{item?.color === "#FF0000" ? 'red' : ''
                                            || item?.color === "#FFFF00" ? 'Yellow' : ''
                                            || item?.color === "#0000FF" ? 'Blue' : ''
                                            || item?.color === "#FFA500" ? 'Orange' : ''
                                            || item?.color === "#A52A2A" ? 'Brown' : ''
                                            || item?.color === "#008000" ? 'Green' : ''
                                            || item?.color === "#800080" ? 'Purple' : ''
                                            || item?.color === "#87CEEB" ? 'Sky' : ''


                                        }</span> </h5>
                                                    <h5 className="text-[#A1A8C1] text-sm font-josefin font-normal capitalize">size: <span>xl</span> </h5>
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-0">
                                        <span className="text-sm text-[#15245E] font-josefin font-normal">${item.price}</span>

                                    </td>

                                    <td className="p-0">
                                    <div className="w-[139px]   border border-[#F0F0F0] text-[#767676] flex justify-between items-center p-3">
                                                    <span
                                                        className="cursor-pointer inline-block   text-lg font-normal "
                                                        onClick={() => handkeMinusQuantity(item, item.qun)}
                                                    >
                                                        <FaMinus />
                                                    </span>
                                                    <span className="inline-block px-2 text-lg font-normal">{item.qun}</span>
                                                    <span
                                                        className="cursor-pointer inline-block  text-lg "
                                                        onClick={() => handkePlusQuantity(item, item.qun)}
                                                    >
                                                        <FaPlus />
                                                    </span>
                                                </div>
                                    </td>
                                    <td className="p-0">
                                        <span className="text-sm text-[#15245E] font-josefin font-normal">${(parseFloat(item.price)?.toFixed(2) * item.qun)}</span>

                                    </td>
                                    </tr>
                                )}
                               
                            </tbody>
                        </table>

                        <div className="flex justify-between items-center mt-16">
                            <button className="inline-block text-sm font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Update Cart</button>
                            <button onClick={handleclear} className="inline-block text-sm font-josefin font-semibold py-3 px-5  bg-[#FB2E86] text-white rounded-sm capitalize">Clear Cart</button>
                        </div>
                    </div>

                    <div className="sitebar w-[371px]">
                        <h2 className="text-[#1D3178] font-bold text-xl font-josefin text-center capitalize">Cart Totals</h2>
                        <div className="bg-[#F4F4FC] py-8 px-6 mt-10">
                            <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center">Product quantity: <p> <span>{totalQuntity}</span></p> </h4>
                            <h4 className="border-b border-[#E8E6F1] text-[#1D3178] text-lg font-josefin font-semibold flex justify-between items-center mt-8">Totals: <p>$ <span>{totalprice}</span></p> </h4>

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
                </div> :<h2 className='text-2xl my-6 text-center'>Cart is Empty</h2>}
                

            </Container>

        </div>
    );
};

export default Cart;