import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Container from './Container';
import useAuth from '../../hooks/useAuth'
import { IoSearch } from 'react-icons/io5';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { FaCartPlus, FaMinus, FaPlus, FaRegHeart, FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, deleteItem } from '../../Featured/CartAPI/cartSlice';
import Swal from 'sweetalert2';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';

const Navbar = () => {
    const carts = useSelector((state) => state.cart.cartItem)
    const { user, logOut } = useAuth()
    const [menu, setMenu] = useState(false)
    const [cartOpen, setCartOpen] = useState(false);
    let [searchInput, setSearchInput] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);
    const [sortOrder, setSortOrder] = useState('old');
    const [proOpen, setProOpen] = useState(false);
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder })
    const cartRef = useRef();
    const navigate = useNavigate()

    let [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

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


            }
        });
    }

    const handkeMinusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity - 1, }))
    }
    const handkePlusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity + 1, }))
    }
    useEffect(() => {
        const cartTotal = carts.reduce((acc, items) => acc + parseInt(items.price * items.qun), 0)
        setTotalPrice(cartTotal)
    }, [carts,])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (cartRef.current.contains(e.target)) {
                setCartOpen(!cartOpen);
            } else {
                setCartOpen(false);
            }

        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [cartOpen]);

    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setSearchFilter([])
        } else {
            const searchOne = data?.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchOne)
        }
    }
    const handleLink = (id) => {
        navigate(`/product/${id}`)
        setSearchFilter([])
        setSearchInput("")
    }
    return (
        <nav>
            <div className='bg-[#7E33E0] py-[14px] hidden md:block'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <div>
                            <ul className='flex gap-12 items-center'>
                                <li className='flex gap-2 items-center text-white text-[16px]  font-josefin font-semibold'><span></span> mhhasanul@gmail.com</li>
                                <li className='flex gap-2 items-center text-white text-[16px]  font-josefin font-semibold'><span></span> (12345)67890</li>
                            </ul>

                        </div>
                        <div>
                            <ul className='flex items-center gap-4 relative'>
                                <li>
                                    <select name="" id="" className='bg-transparent text-white'>
                                        <option value="English" className='text-black'>English</option>
                                        <option value="Bangla" className='text-black'>Bangla</option>
                                    </select>
                                </li>
                                <li> <select name="" id="" className='bg-transparent text-white'>
                                    <option value="USD" className='text-black'>USD</option>
                                    <option value="BD" className='text-black'>BD</option>
                                </select>
                                </li>
                                <li onClick={() => setProOpen(!proOpen)} className=' text-white'>   <span className='flex gap-1 items-center'> Login <FaRegUser /> </span> </li>
                                {proOpen && (
                                    <div className=" absolute z-50 top-full right-12 translate-y-6">
                                        <div className="w-[263px] block  bg-[#ffffff] ">
                                            <div className="button flex flex-col  w-full">
                                                {user ? (
                                                    <>
                                                        <Link onClick={() => setProOpen(!proOpen)} to='/dashboard' className="py-4  px-3 lg:px-10 text-white bg-[#FB2E86] text-center w-full  ">My Account</Link>
                                                        <button onClick={logOut} className="py-4 px-3 lg:px-10 bg-white text-[#FB2E86]  w-full mt-0  border text-center">logOut</button>
                                                    </>
                                                )
                                                    :
                                                    (
                                                        <Link onClick={() => setProOpen(!proOpen)} to='/myAccount/login' className="py-4 px-3 lg:px-6 bg-white  w-full mt-0 text-center border  uppercase">login</Link>)}



                                            </div>
                                        </div>
                                    </div>
                                )}
                                <li className=' text-white '> <button className='flex gap-1 items-center'> wishlist <FaRegHeart className='text-white' /><span></span></button></li>
                                <li className=' text-white '><button ref={cartRef} className='flex gap-1 items-center relative'><FaCartPlus className='text-white text-lg ' /> {carts?.length > 0 ? <span className="text-red-500 bg-white w-5 h-5 border p-1 rounded-full text-center absolute -top-3 -right-3 flex justify-center items-center">{carts?.length}</span> : ''}</button></li>
                                {cartOpen && (
                                    <div className="block w-[360px]  absolute z-50 top-full right-0 bg-slate-50 border translate-y-6">
                                        <div className={`w-full  overflow-y-scroll ${carts.length > 0 ? 'h-[320px]' : ''}`}>
                                            {carts.length ? <>
                                                {carts.slice(0, 4).map(item =>
                                                    <div key={item._id} className="flex   gap-2 bg-[#F5F5F3] py-2 px-5">
                                                        <img src={item.image} alt="" className="bg-[#979797] w-20 h-20" />

                                                        <div className="my-2">
                                                            {/* <h2>Black Smart Watch</h2> */}
                                                            <h2>{item.title}</h2>
                                                            <div className="flex justify-between items-center">
                                                                <div className="w-[100px]   border border-[#353535] text-[#767676] flex justify-between items-center p-1">
                                                                    <span
                                                                        className="cursor-pointer inline-block   text-sm font-normal "
                                                                        onClick={() => handkeMinusQuantity(item, item.qun)}
                                                                    >
                                                                        <FaMinus />
                                                                    </span>
                                                                    <span className="inline-block px-2 text-sm font-normal">{item.qun}</span>
                                                                    <span
                                                                        className="cursor-pointer inline-block  text-sm "
                                                                        onClick={() => handkePlusQuantity(item, item.qun)}
                                                                    >
                                                                        <FaPlus />
                                                                    </span>
                                                                </div>
                                                                <button onClick={() => handleDelete(item._id)}><IoMdClose /></button>
                                                            </div>

                                                            <p>$ {item.price * item.qun}</p>
                                                        </div>

                                                    </div>)}
                                            </> :
                                                <h2 className='my-6 text-center'>Cart is Empty</h2>}
                                        </div>

                                        <div className="p-5">
                                            <p >Subtotal: <span className="text-[#262626] font-bold">${totalPrice}</span></p>
                                            <div className="flex  lg:gap-x-5 gap gap-x-1 mt-3">
                                                <Link to='/cart' onClick={() => setCartOpen(!cartOpen)} className="w-full block lg:py-4 py-2 lg:px-8 px-3 text-[#FB2E86] border border-[#FB2E86]">View Cart </Link>
                                                <Link to='/checkout' onClick={() => setCartOpen(!cartOpen)} className="w-full block lg:py-4 py-2 lg:px-10 px-3 bg-[#FB2E86] text-white">Checkout</Link>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className=' flex justify-between  items-center py-4 relative gap-3'>
                    <div className="logo md:w-[98px] h-[34px]"><img src="/Hekto.png" alt="logo" className='w-full h-full object-contain' /></div>
                    <div>
                        {/* <ul className={`lg:flex gap-[35px] bg-slate-300 lg:bg-transparent p-6 lg:p-0 text-[#0D0E43] text-[16px] font-normal text-center lg:text-start absolute lg:static transition-all duration-300 ease-in-out z-[9999999]  top-full -left-full ${menu?'left-1/2 -translate-x-1/2':'top-0 '}`}> */}
                        <ul className={`flex flex-col lg:flex-row lg:justify-center lg:items-center gap-y-3 lg:gap-x-10 lg:bg-transparent bg-[#ebeaeae9] text-center  transition-all duration-500  lg:static p-6 lg:p-0  absolute top-full -left-8 w-full z-50 -translate-x-full lg:translate-x-0 ${menu ? "translate-x-8" : "  "} `}>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/">Home</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] group transition-all duration-500 relative "><NavLink to='/ShopGridDefault'>Pages</NavLink>
                                <ul className='w-[170px] p-3 mt-[25px] md:mt-[75px] bg-[#d4d3d33c]  absolute -top-full right-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 transition-all duration-500'>
                                    <li className='text-[#0D0E43] hover:text-[#FB2E86]'><NavLink to='/ShopGridDefault'>Shop Grid Default</NavLink> </li>
                                    <li className='text-[#0D0E43] hover:text-[#FB2E86] my-1'> <NavLink to='/shopList'>Shop List</NavLink> </li>
                                    <li className='text-[#0D0E43] hover:text-[#FB2E86]'><NavLink to='shop_Left_Sidebar'>Shop Left Sidebar</NavLink> </li>
                                </ul>
                            </li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/products">Products</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/blogs">Blog</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/shop">Shop</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/about">About</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/contact">Contact</NavLink></li>
                            <li class="text-[#0D0E43] hover:text-[#FB2E86] transition-all duration-500"><NavLink to="/FAQ">FAQ</NavLink></li>

                        </ul>
                    </div>
                    <div className='relative flex items-center h-10'>
                        <input type="text" name="" value={searchInput} onChange={handleInput} placeholder='Search Products' id="" className='sm:w-[386px] lg:w-auto bg-[#D9D9D9] border-none outline-none h-full px-3' />
                        <div className='w-[50px] h-full bg-[#FB2E86] flex items-center justify-center text-white'>
                            <IoSearch className=' text-2xl absolute right-1 lg:right-5 top-1/2 translate-y-[-50%]' />


                        </div>


                    </div>
                    <div onClick={() => setMenu(!menu)} className='inline-block lg:hidden'>
                        <p><IoMdMenu className='text-[#0D0E43] text-3xl' /></p>
                    </div>
                    {searchFilter.length > 0 &&
                        <div className='absolute max-w-[420px] max-h-[350px] top-full left-1/2 -translate-x-1/2 z-50  overflow-y-scroll' >
                            {searchFilter.map((item, key) =>
                                <div onClick={() => handleLink(item._id)} key={key} className=" cursor-pointer flex   gap-2 bg-[#F5F5F3] p-5 border-b">
                                    <img src={item.image} alt="" className="bg-[#979797] w-20 h-20" />
                                    <div><h2>{item.title}</h2>
                                    </div>


                                </div>
                            )}
                        </div>}

                </div>


            </Container>

        </nav>
    );
};

export default Navbar;