import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole"
import UpdateProfileModal from "../../../components/modal/UpdateProfileModal";

import UpdatePasswordModel from "../../../components/modal/UpdatePasswordModel";
import { useGetUserByEmailQuery } from "../../../Featured/auth/authApi";
const Profile = () => {
    const { user, logOut, setLoading, loading } = useAuth()
    const email = user?.email;
    const { data, error, isLoading } = useGetUserByEmailQuery(email);
    const [show, setShow] = useState(false)
    const [role, isloading] = useRole()
    const [Open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenpass, setIsOpenpass] = useState(false)
    if (loading && isloading) {
        <p>loading................</p>
    }
    return (
        <div>
            <div className="">

            
                <div className="border p-6">
                    <h2 className="text-xl font-semibold leading-snug">Personal information</h2>
                    <div className="mt-3">
                        <h3 className="text-lg  font-josefin capitalize">First Name : <span className="text-sm ">{data?.firstName}</span></h3>
                        <h3 className="text-lg  font-josefin capitalize">Last Name : <span className="text-sm ">{data?.lastName}</span></h3>
                        <h3 className="text-lg  font-josefin capitalize">Email address : <span className="text-sm "> {data?.email}</span></h3>
                        <h3 className="text-lg  font-josefin capitalize">Bio : <span className="text-sm ">{role}</span></h3>

                    </div>
                </div>
                {/* ........ */}
                <div className="border p-6 mt-6">
                    <h2 className="text-xl font-semibold leading-snug">Address</h2>
                    <div className="mt-3">

                        <h3 className="text-lg  font-josefin font-semibold capitalize">address : <span >{data?.address}</span></h3>
                        <h3 className="text-lg font-josefin font-semibold capitalize">country : <span className="text-sm ">{data?.country}</span></h3>
                        <h3 className="text-lg font-josefin font-semibold capitalize">city  : <span className="text-sm "> {data?.city}</span></h3>
                        <h3 className="text-lg font-josefin font-semibold capitalize">postCode  : <span className="text-sm ">{data?.postCode}</span></h3>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Profile;