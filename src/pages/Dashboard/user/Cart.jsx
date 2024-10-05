import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, clearCart, deleteItem } from "../../../Featured/CartAPI/cartSlice";


const Cart = () => {
    const carts = useSelector((state) => state.cart.cartItem)
    const dispatch = useDispatch();

    let { totalprice, totalQuntity } = carts.reduce((acc, item) => {
        acc.totalprice += item.price * item.qun
        acc.totalQuntity += item.qun
        return acc
    }, { totalprice: 0, totalQuntity: 0 })

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

    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((item, idx) =>

                                <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
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
                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                    </th>
                                </tr>

                            )
                        }


                    </tbody>


                </table>
            </div>
            <div className="flex justify-evenly mt-8 pt-3 border-t">
                <h2 className="text-xl capitalize font-josefin font-semibold">total cart : {carts.length}</h2>
                <h2 className="text-xl capitalize font-josefin font-semibold">total price : ${totalprice}</h2>
            </div>
            <div>
                <div className="flex justify-end items-center gap-2 mt-16">
                    
                    <button onClick={handleclear} className="inline-block text-sm font-josefin font-semibold py-3 px-5  bg-[#FB2E86] text-white hover:text-[#FB2E86] border border-[#FB2E86] hover:bg-white rounded-sm capitalize transition-all duration-300">Clear Cart</button>
                    <button className="inline-block text-sm font-josefin font-semibold py-3 px-5 text-[#FB2E86] border border-[#FB2E86] hover:text-white hover:bg-[#FB2E86]  rounded-sm  capitalize transition-all duration-300">checkOut</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;