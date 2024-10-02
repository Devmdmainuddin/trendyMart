import { useState } from "react";
// import { CiMenuFries } from "react-icons/ci";
// import { IoMdSettings } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

import AdminMenu from './Menu/AdminMenu'
import GuestMenu from './Menu/GuestMenu'
import SellerMenu from './Menu/SellerMenu'
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Navbar from "../../components/Shared/Navbar";
import Container from "../../components/Shared/Container";
import { ImProfile } from "react-icons/im";
import { GrDocumentUpdate } from "react-icons/gr";
import { TbPasswordUser } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";

// import Sidebar from "./Sidebar";




const Dashboard = () => {
    const { user, logOut } = useAuth()
    const [show, setShow] = useState(false)
    const [role, isloading] = useRole()
    if (isloading) return <LoadingSpinner />

    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <div className="flex flex-col md:flex-row gap-6">
                    <div>
                        <aside className='w-[270px] p-6  min-h-screen shadow-commentuserShadow'>


                            <div className="text-center py-6 bg-slate-100 relative mt-5">
                                <img alt="" className=" w-12 h-12  object-cover rounded-full bg-slate-300 absolute -top-[30px] left-1/2 -translate-x-1/2" src={user?.photoURL ? user?.photoURL : '/user.png'} />
                                <div className="">
                                    <p className="text-xl font-semibold leading-snug"> {user?.displayName}</p>
                                    <p>{role}</p>
                                </div>
                            </div>
                            <ul className="mt-4 bg-slate-100 p-3">
                                <li><NavLink to='/' className="capitalize  flex items-center gap-2 "> <ImProfile /> view profile</NavLink></li>
                                <li className="my-2"><NavLink to='/' className="capitalize flex items-center gap-2 "> <GrDocumentUpdate /> update profile</NavLink></li>
                                <li><NavLink to='/' className="capitalize  flex items-center gap-2"><TbPasswordUser /> password change</NavLink></li>

                                {role === 'user' && <GuestMenu />}
                                {role === 'Seller' && <SellerMenu />}
                                {role === 'admin' && <AdminMenu />}
                                <li className="my-2"><NavLink to='/'><button onClick={logOut} className="capitalize flex items-center gap-2"><BiLogOut /> logOut</button></NavLink></li>
                            </ul>




                        </aside>
                    </div>

                    <main>
                        <Outlet></Outlet>
                    </main>
                </div>
            </Container>
            <div>

            </div>
        </div>
        // <div className="max-w-[1600px] overflow-hidden">
        //     <div className={`sidebar-menu overflow-hidden fixed left-0 top-0  ${show ? 'w-12' : 'md:w-64 w-[128px]'} h-full text-gray-600 bg-gray-100  z-50 transition-all duration-500 `}>
        //         <Link to={'/'} className="flex items-center py-4 px-3 border-b ">
        //             <div className="logo">
        //                 <img src='/logo.png' alt="" className="max-w-[40px] max-h-[40px] rounded object-contain" />
        //             </div>
        //         </Link>
        //         <ul className="mt-4">
        //             <SitebarLi to='/dashboard/profile' icon={<IoMdSettings />} text='profile'></SitebarLi>
        //             {role === 'user' && <GuestMenu />}
        //             {role === 'Seller' && <SellerMenu />}
        //             {role === 'admin' && <AdminMenu />}
        //             <button onClick={logOut} className="py-2 px-4 text-gray-600 hover:text-gray-700  rounded-md group-[.active]:bg-gray-700 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">logOut</button>
        //             {/* <SitebarLi to='' icon={<RiLockPasswordFill />} text='logOut'></SitebarLi> */}   
        //         </ul>
        //     </div>

        //     <main className={`main    z-40   ${show ? 'ml-12 md:max-w-full]' : 'md:ml-64 md:max-w-[calc(100%-256px)] ml-[128px] '}  bg-gray-200 min-h-screen transition-all  duration-500 z-30`}>
        //         <div className="py-2  text-gray-600 bg-gray-100   hover:text-gray-700 flex items-center  shadow-black/5 sticky top-0 left-0 z-30">
        //             <button onClick={() => setShow(!show)} type="button" className="text-lg text-gray-600 sidebar-toggle">
        //                 <CiMenuFries />
        //             </button>

        //             <ul className="flex items-center text-lg ml-4">
        //                 <li className="mr-2">
        //                     <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">{window.location.pathname.split("/")[1]}</a>
        //                 </li>
        //                 <li className="text-gray-600 mr-2 font-medium">/</li>
        //                 <li className="text-gray-600 mr-2 font-medium">{window.location.pathname.split("/")[2]}</li>
        //             </ul>

        //         </div>
        //         <div className="">
        //             <Outlet className='py-2 '></Outlet>
        //         </div>

        //     </main>
        // </div>

    );
};

export default Dashboard