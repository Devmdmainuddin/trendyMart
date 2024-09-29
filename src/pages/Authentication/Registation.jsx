import React, { useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Container from '../../components/Shared/Container';
import { Link, useNavigate } from 'react-router-dom';
import Company from '../../components/Home/Company'
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Featured/auth/authSlice';
import Swal from 'sweetalert2';


const Registation = () => {
    const dispatch = useDispatch();
    const [showpassword, setshowpassword] = useState(null)
    const navigate = useNavigate()
    const { createUser, setLoading } = useAuth()
    let [emailError, setEmailError] = useState("")
    let [fullNameError, setFullNameError] = useState("")
    let [passwordError, setPasswrdError] = useState("")






    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const password = form.password.value
        const address = form.address.value
        const country = form.country.value
        const city = form.city.value
        const postcode = form.postcode.value

        const userinfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            country: country,
            city: city,
            postCode: postcode,
            role: 'user',
            status: 'verified',
        }
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let lowerChar = /^(?=.*[a-z])/
        let upperChar = /^(?=.*[A-Z])/
        let number = /^(?=.*[0-9])/
        let specil = /^(?=.*[!@#$%^&*])/
        let minMax = /^(?=.{8,})/

        if (!email) {
            // setEmailError("Enter your email");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter your email",
				showConfirmButton: false,
				timer: 1500
			});
        
        } else if (!pattern.test(email)) {
            // setEmailError("Enter a Valid Email");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter a Valid Email",
				showConfirmButton: false,
				timer: 1500
			});
        }
        else if (!lastName) {
            // setFullNameError("Enter YouFull Name");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter YouFull Name",
				showConfirmButton: false,
				timer: 1500
			});
        }
        else if (!password) {
            // setPasswrdError("Enter a password");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Enter a password",
				showConfirmButton: false,
				timer: 1500
			});
        } else if (!lowerChar.test(password)) {
            // setPasswrdError("Lower Case Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Lower Case Must",
				showConfirmButton: false,
				timer: 1500
			});
           
        } else if (!upperChar.test(password)) {
            // setPasswrdError("Upper Case Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Upper Case Must",
				showConfirmButton: false,
				timer: 1500
			});
          
        } else if (!number.test(password)) {
            // setPasswrdError("Number Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Number Must",
				showConfirmButton: false,
				timer: 1500
			});
        } else if (!specil.test(password)) {
            // setPasswrdError("Specil charator Must");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Specil charator Must",
				showConfirmButton: false,
				timer: 1500
			});
        } else if (!minMax.test(password)) {
            // setPasswrdError("min-8 max-16");
            Swal.fire({
				position: "top-end",
				icon: "error",
				title: "min-8 max-16",
				showConfirmButton: false,
				timer: 1500
			});
            return
        }

        try {
            setLoading(true)
            console.log("ok");
            const result = await createUser(email, password)
            console.log(result);
            dispatch(registerUser(userinfo))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "signup Successful",
                showConfirmButton: false,
                timer: 1500
            });

            navigate('/')

        }
        catch (error) {
            setLoading(false)
            // console.log(err.message);
            const errorCode = error.code;
            if(errorCode.includes("email")){
            //   setEmailError("Email already in use")
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Email already in use",
                showConfirmButton: false,
                timer: 1500
            })
            }
        }
    }


    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>
                <div className='mt-16 md:mt-[120px]'>
                    <div className='w-full md:w-[544px] py-[50px] px-[56px] mx-auto' style={{
                        boxShadow: '0px 0px 25px 10px rgb(248, 248, 251)',
                    }}>
                        <h2 className='text-[32px] font-josefin font-bold text-block text-center'>Registation</h2>
                        <p className='text-[#9096B2] text-lg font-josefin font-normal text-center'>Please Fill In Your Personal Information</p>
                        <form onSubmit={handleSubmit} action=""  >
                            <div className='flex flex-col mt-9'>

                                <input type="text" name='firstName' placeholder='First name (optional)' className='w-full outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <input type="text" name='lastName' placeholder='Last name' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <input type="email" name='email' placeholder='Email Address' className='w-full mt-[22px] outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <div className='relative'>
                                    <input type={showpassword ? "text" : "password"} name='password' placeholder='Password' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                    <span className="absolute right-3 top-1/2" onClick={() => setshowpassword(!showpassword)}>
                                        {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
                                    </span>
                                </div>
                                <input type="text" name='address' placeholder='Enter Your Address Here' className='w-full mt-[22px] outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <input type="text" name='country' placeholder='country' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <input type="text" name='city' placeholder='City' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                                <input type="number" name='postcode' placeholder='postal code' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />

                            </div>

                            <button type='submit' className="block mt-6 w-full  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Sign up</button>

                            <Link to="/myAccount/login" className='flex justify-center items-center '>  <button className='text-[#9096B2]  text-[17px] font-josefin font-normal mt-[28px]  '>Already have an Account? <span className='text-[#1D3178]'>sign in</span> </button></Link>
                        </form>
                    </div>
                </div>
            </Container>
            <Company></Company>
        </div>
    );
};

export default Registation;