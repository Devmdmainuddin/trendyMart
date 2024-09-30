import { FaTrashAlt } from "react-icons/fa";
import useCartItems from "../../../hooks/useCartItems";
import Swal from "sweetalert2";
import useAxiosCommon from "../../../hooks/useAxiosCommon";


const Cart = () => {
    const [cartItems, ,refetch,cartTotal] = useCartItems()
    // const totalprice = cart.reduce((total, item) => total + parseInt(item.price), 0)
    const axiosCommon = useAxiosCommon()
    const handleDelet = id => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosCommon.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your items has been delete",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch()
                        }
                    })

            }
        });

    }

    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-3xl">total cart : {cartItems.length}</h2>
                <h2 className="text-3xl">total price : ${cartTotal}</h2>
                {/* {
                    cart.length ? <Link to='/dashboard/payment'><button className="py-2 px-6 bg-[#eba421]">play</button></Link>
                        :
                        <button disabled className="py-2 px-6 bg-[#eba421]">play</button>
                } */}


            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item, idx) =>

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
                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                        onClick={()=>handleDelet(item._id)}
                                            className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                    </th>
                                </tr>

                            )
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Cart;