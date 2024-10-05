import React from 'react';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const PasswordChange = () => {

    const { user, handleUpdatePassword, setLoading } = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const newPassword = form.newPassword.value;
        const currentPassword = form.currentPassword.value;


        if (user) {
            try {

                await handleUpdatePassword(newPassword, currentPassword);
                setLoading(false)

            } catch (error) {

                toast.error(error.message);
            }
        } else {

            toast.error("No user is currently logged in.");
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold font-josefin leading-snug mt-3">Update Password</h2>
                <div className='mt-3'>
                    <label htmlFor='name' className='block mb-2 text-sm capitalize'>
                        old Password
                    </label>
                    <input type="password" name="currentPassword" placeholder="Current Password" required className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 transition-all duration-500' />

                </div>
                <div>
                    <label htmlFor='name' className='block mb-2 text-sm capitalize'>
                        new Password
                    </label>
                    <input type="password" name="newPassword" placeholder="New Password" required className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 transition-all duration-500' />

                </div>

                <button
                    onClick={() => setIsOpen(false)}
                    type='submit'
                    className='bg-rose-500  mt-4 rounded-md py-3 px-6 text-white'
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default PasswordChange;