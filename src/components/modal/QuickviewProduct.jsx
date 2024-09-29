import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
const QuickviewProduct = ({ detailsModal, setDetailsModal, image, price,brand, title, categorey, Degree }) => {
    return (
        <Transition appear show={detailsModal} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-50'
                onClose={() => setDetailsModal(false)}
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
                            <DialogPanel className='w-full  max-w-xl transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <div className="flex justify-between">
                                    <DialogTitle
                                        as='h3'
                                        className='text-lg font-Inter uppercase font-medium text-center leading-6 text-gray-900'
                                    >
                                       product details
                                    </DialogTitle> <IoClose onClick={() => setDetailsModal(false)} className="text-3xl bg-red-300 rounded" />
                                </div>

                                <Description className="font-Inter mt-6 text-lg">
                                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                        <div><img src={image} alt="" className="w-[220px] h-[220px]" /></div>
                                        <div>
                                            <h2 >  <span className="text-sm">{title}</span> </h2>
                                            <h2>categorey:<span className="text-sm">{categorey}</span></h2>
                                            <h2>brand :   <span className="text-sm">{brand} </span></h2>
                                            <h2>price : <span className="text-sm">${price}</span> </h2>
                                            
                                        </div>
                                    </div>


                                </Description>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default QuickviewProduct;