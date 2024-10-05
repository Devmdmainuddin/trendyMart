import Swal from "sweetalert2";
import { useGetUserByEmailQuery, useUpdateUserMutation } from "../../../Featured/auth/authApi";
import useAuth from "../../../hooks/useAuth";

const UpdateProfile = () => {
    const { user, setLoading, loading } = useAuth()
    const email = user?.email;
    const { data, error, isLoading } = useGetUserByEmailQuery(email);
    const [updateUser, { isLoading:lod, isSuccess, isError }] = useUpdateUserMutation();



    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
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
        }
        try {
           
            await updateUser({ email, ...userinfo }).unwrap();       
          
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Update Successful",
                showConfirmButton: false,
                timer: 1500
            });
        }
        catch (error) {
           
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to update",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action=""  className="w-full">
                <h2 className="text-xl font-semibold font-josefin leading-snug mt-3">Update Profile</h2>
                <div className=' mt-9'>
                    <div className="flex flex-col md:flex-row gap-3 items-center">
                        <input type="text" name='firstName' defaultValue={data?.firstName} placeholder='First name ' className='w-full outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                        <input type="text" name='lastName' defaultValue={data?.lastName} placeholder='Last name' className='w-full outline-0  py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />

                    </div>
                    <div className="flex flex-col md:flex-row  gap-3 items-center mt-[22px]">
                        <input type="email" name='email' defaultValue={data?.email} placeholder='Email Address' className='w-full  outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                        <input type="text" name='address' defaultValue={data?.address} placeholder='Enter Your Address Here' className='w-full  outline-0 py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />

                    </div>
                    <div className="flex flex-col md:flex-row gap-3 items-center mt-[22px]">
                        <input type="text" name='country' defaultValue={data?.country} placeholder='country' className='w-full outline-0  py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />
                        <input type="text" name='city' defaultValue={data?.city} placeholder='City' className='w-full outline-0  py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />

                    </div>

                    <input type="number" name='postcode' defaultValue={data?.postCode} placeholder='postal code' className='w-full outline-0 mt-[22px] py-[13px] px-4 border border-[#C2C5E1] text-[#9096B2]' />

                </div>

                <button type='submit' className="block mt-6   text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Update</button>

            </form>
        </div>
    );
};

export default UpdateProfile;