import { useMutation } from '@tanstack/react-query'
// import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { IoClose } from 'react-icons/io5'
import { Fragment } from 'react';
import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogTitle,
    DialogPanel,

} from '@headlessui/react'
// import useAuth from '../../../hooks/useAuth';
import { imageUpload } from '../../utils/index';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useUpdateUserMutation } from '../../Featured/auth/authApi';

const UpdateProfileModal = ({ setIsOpen, isOpen, email }) => {
    const axiosSecure = useAxiosSecure()
    const { updateUserProfile, } = useAuth()
   
    const [updateUser, { isLoading:lod, isSuccess, isError }] = useUpdateUserMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const image = await imageUpload(form.image.files[0])

        const userinfo = {
            name: name,
            image: image,
        }
        try {
            await updateUser({ email, ...userinfo }).unwrap();
            await updateUserProfile(name, image)
           
        }
        catch (err) {
            toast.error(err.message)
        }

    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsOpen(false)}
            >
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Update profile
                                </DialogTitle>
                                <IoClose onClick={() => setIsOpen(false)} className="text-3xl ml-auto bg-red-300 rounded" />
                                <form action="" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='name' className='block mb-2 text-sm'>
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            placeholder='Enter Your Name Here'
                                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                            data-temp-mail-org='0'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='image' className='block mb-2 text-sm'>
                                            Select Image:
                                        </label>
                                        <input
                                            required
                                            type='file'
                                            id='image'
                                            name='image'
                                            accept='image/*'
                                        />
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        type='submit'
                                        className='bg-rose-500 w-full mt-4 rounded-md py-3 text-white'
                                    >
                                        update
                                    </button>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
// setIsOpen, isOpen,email
UpdateProfileModal.propTypes = {
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool,
    email: PropTypes.string,

}
export default UpdateProfileModal;