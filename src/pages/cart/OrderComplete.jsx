import { IoMdCheckmark } from "react-icons/io";
import Bredcumb from "../../components/Shared/Bredcumb";
import Container from "../../components/Shared/Container";
import Company from "../../components/Home/Company";
import { Link } from "react-router-dom";


const OrderComplete = () => {
    return (
        <div>
            <Bredcumb></Bredcumb>
            <div className="py-8 md:py-[87px]">
                <Container>
                <div className=" max-w-[852px]  mx-auto  relative">
                    <div className="max-w-[625px] mx-auto ">
                        <h4 className="w-9 h-9 rounded-full border border-[#F6F7FA] flex justify-center items-center mx-auto my-6"><IoMdCheckmark className="text-3xl text-[#FB2E86]"/></h4>
                        <h2 className="text-[#101750] text-4xl font-josefin font-bold text-center capitalize">Your Order Is Completed! </h2>
                        <p className="text-[16px] font-josefin font-semibold text-[#8D92A7] text-center mt-6">Thank you for your order! Your order is being processed and will be completed within 3-6
                            hours. You will receive an email confirmation when your order is completed.
                        </p>
                        <div className="flex justify-center items-center">
                     <Link to='/shop'> <button className="inline-block text-sm font-josefin font-semibold py-3 px-5  bg-[#FB2E86] text-white rounded-sm capitalize mt-4 ">Continue Shopping</button> </Link>  
                        </div>
                       
                    </div>
                    <img src="/clock.png" alt=""  className="absolute top-8 -left-8 w-[71px]"/>
                    <img src="/notepad.png" alt="" className="absolute -bottom-3 -right-3 w-[24px]"/>
                </div>
                </Container>
            </div>
            <Company></Company>

        </div>
    );
};

export default OrderComplete;