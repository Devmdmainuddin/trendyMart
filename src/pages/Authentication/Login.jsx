import React, { useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Container from '../../components/Shared/Container';
import { Link, useNavigate } from 'react-router-dom';
import Company from '../../components/Home/Company'
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';

const Login = () => {
    const [showpassword, setshowpassword] = useState(null)
    const navigate = useNavigate();
	const from = "/";

    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                <div className='mt-16 md:mt-[120px]'>
                    <div className='w-full md:w-[544px] py-[50px] px-[56px] mx-auto' style={{
                        boxShadow: '0px 0px 25px 10px rgb(248, 248, 251)',
                    }}>
                        <h2 className='text-[32px] font-josefin font-bold text-block text-center'>Login</h2>
                        <p className='text-[#9096B2] text-lg font-josefin font-normal text-center'>Please login using account detail bellow.</p>
                        <form action="" >
                            <div className='flex flex-col mt-9'>
                                <input type="email" name='email' placeholder='Email Address' className='w-full outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <div className='relative'>
                                    <input type={showpassword ? "text" : "password"} name='password' placeholder='Password' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                    <span className="absolute right-3 top-1/2" onClick={() => setshowpassword(!showpassword)}>
                                        {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
                                    </span>
                                </div>
                            </div>
                            <button className='text-[#9096B2] text-[17px] font-josefin font-normal mt-[13px]'>Forgot your password?</button>
                            <button className="block mt-6 w-full  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Sign In</button>

                            <Link to='/myAccount/registation' className='flex justify-center items-center '>  <button className='text-[#9096B2]  text-[17px] font-josefin font-normal mt-[28px]  '>Don’t have an Account? <span className='text-[#1D3178]'>Create account</span> </button></Link>
                        </form>
                    </div>
                </div>
            </Container>
            <Company></Company>

        </div>
    );
};

export default Login;