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
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';



const PasswordResetModal = ({ setIsOpen, isOpen, }) => {
    const { resetPassword, setLoading } = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const form = e.target;
        const email = form.email.value;
    
      


            try {
                await resetPassword(email);
                setLoading(false)
                setIsOpen(false)
            } catch (error) {
               
                toast.error(error.message);
            }
       
    };
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
                                    <label htmlFor='email' className='block mb-2 text-sm capitalize'>
                                       your email
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Your Email Here" required  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                                  
                                </div>
                               

                                <button
                                    onClick={() => setIsOpen(false)}
                                    type='submit'
                                    className='bg-rose-500 w-full mt-4 rounded-md py-3 text-white'
                                >
                                  confirm
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
PasswordResetModal.propTypes = {
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool,
}
export default PasswordResetModal;