import React from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';

const Contact = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>

            <section className="flex w-[70%] mx-auto mt-[70px] mb-[70px] justify-between">
                <div className="sect2a w-[50%] mr-[20px] ml-[15px]">
                    <h3 className="text-[#151875] font-[Josefin Sans] text-[30px] mb-[20px] mt-[30px]">Information About Us</h3>
                    <p className="text-[#8A8FB9] font-[Lato] text-[13px] mb-[30px] leading-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                    </p>
                    <div className="sectimg w-[30%]">
                        <img src="./Contactus_images/sect1circles.svg" alt="" className="w-full h-auto" />
                    </div>
                </div>
                <div className="sect2b w-[55%]">
                    <h3 className="text-[#151875] font-[Josefin Sans] text-[30px] mb-[20px] mt-[30px]">Contact Way</h3>
                    <div className="ellipse flex items-center mb-[30px]">
                        <div className="sect2bimg flex items-center">
                            <div className="circle">
                               
                            </div>
                            <div className="ml-[10px] mr-[15px]">
                                <p className="text-[#8A8FB9] text-[14px] mb-[7px]">Tel: 877-67-88-99</p>
                                <p className="text-[#8A8FB9] text-[14px]">E-Mail: shop@store.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="ellipse flex items-center mb-[30px]">
                        <div className="sect2bimg flex items-center">
                            <div>
                                <img src="./Contactus_images/Ellipse pink.svg" alt="" />
                            </div>
                            <div className="ml-[10px] mr-[15px]">
                                <p className="text-[#8A8FB9] text-[14px] mb-[7px]">Support Forum</p>
                                <p className="text-[#8A8FB9] text-[14px]">For over 24hr</p>
                            </div>
                        </div>
                    </div>
                    <div className="ellipse flex items-center mb-[30px]">
                        <div className="sect2bimg flex items-center">
                            <div>
                                <img src="./Contactus_images/Ellipse yelow.svg" alt="" />
                            </div>
                            <div className="ml-[10px] mr-[15px]">
                                <p className="text-[#8A8FB9] text-[14px] mb-[7px]">20 Margaret st, London</p>
                                <p className="text-[#8A8FB9] text-[14px]">Great britain, 3NM98-LK</p>
                            </div>
                        </div>
                    </div>
                    <div className="ellipse flex items-center mb-[30px]">
                        <div className="sect2bimg flex items-center">
                            <div>
                                <img src="./Contactus_images/Ellipse green.svg" alt="" />
                            </div>
                            <div className="ml-[10px] mr-[15px]">
                                <p className="text-[#8A8FB9] text-[14px] mb-[7px]">Free standard shipping</p>
                                <p className="text-[#8A8FB9] text-[14px]">on all orders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="SECT3 flex w-[70%] mx-auto mt-[70px] mb-[70px] justify-between">
                <div className="sect3a w-[55%]">
                    <h3 className="text-[#151875] font-[Josefin Sans] text-[30px] mb-[20px] mt-[30px]">Get In Touch</h3>
                    <p className="text-[#8A8FB9] text-[14px] font-[Lato] leading-[20px] mb-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                    </p>
                    <div className=" flex justify-between gap-6 items-center">
                        <input className=" w-full mb-[15px]  p-[7px] border" type="text" placeholder="Your Name*" />
                        <input className=" w-full mb-[15px] p-[7px] border" type="email" placeholder="Your E-mail" />
                    </div>
                    <div>
                        <input className=" w-full mb-[15px] p-[7px] border" type="text" placeholder="Subject*" />
                    </div>
                    <div>
                        <textarea className="inputtext w-full  p-[7px] border" cols="30" rows="10" placeholder="Type Your Message*"></textarea>
                    </div>
                    <button className="text-white bg-[#FB2E86] font-[Lato] text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[30px]">Send Mail</button>
                </div>
                <div className="sect3b w-[50%] ml-[30px]">
                    <img src="./Contactus_images/getintouch.svg" alt="" className="w-full h-auto" />
                </div>
            </section>

        </div>
    );
};

export default Contact;