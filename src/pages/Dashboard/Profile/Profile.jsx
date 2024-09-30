import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole"
import UpdateProfileModal from "../../../components/modal/UpdateProfileModal";
import useUser from "../../../hooks/useUser";
import UpdatePasswordModel from "../../../components/modal/UpdatePasswordModel";
const Profile = () => {
    const { user,logOut, setLoading,loading } = useAuth()
    const [users] = useUser()
    const [role, isloading] = useRole()
    const [Open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenpass, setIsOpenpass] = useState(false)
if(loading && isloading){
    <p>loading................</p>
}
    return (
        <div>
            <div className="flex flex-row flex-wrap-reverse justify-center  mt-8">

                <div className="flex flex-col  justify-center w-full  mx-6 my-12 text-center rounded-md md:w-[480px]  bg-gray-100 text-gray-800">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src={user?.photoURL ? user?.photoURL : '/user.png'} />
                    <div className="flex-1 my-4 px-8">
                        <p className="text-xl font-semibold leading-snug"> {user?.displayName}</p>
                        <p>{role}</p>
                        <p className="text-xl font-semibold leading-snug"> {user?.email}</p>
                    </div>

                    <div className="flex items-center   justify-between    gap-4 border-y-2 bg-[#14727f] border-[#d7d8d9]">
                        <button onClick={()=>setOpen(!Open)} className="capitalize   p-3 text-sm text-gray-100 ">view profile</button>
                        <button onClick={() => setIsOpen(true)} className="capitalize   border-x-2  text-sm text-gray-100 p-3 ">update profile</button>
                        <UpdateProfileModal isOpen={isOpen} setIsOpen={setIsOpen} email={user?.email}></UpdateProfileModal>
                        <button  onClick={() => setIsOpenpass(true)} className="capitalize   p-3 text-sm text-gray-100 ">password change</button>
                        <UpdatePasswordModel isOpen={isOpenpass} setIsOpen={setIsOpenpass} > </UpdatePasswordModel>
                        <button onClick={logOut} className="capitalize   p-3 text-sm text-gray-100 border-l-2">logOut</button>
                        
                    </div>
                  
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;