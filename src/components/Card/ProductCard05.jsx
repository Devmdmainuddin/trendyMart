import { FaPenNib, FaRegCalendarAlt } from "react-icons/fa";


const ProductCard05 = () => {
    return (
        <div className="w-[370px] ">
            <div className="image w-[370px] h-[255px]">
                <img src="/blog01.png" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="content">
                <div className="flex justify-between mt-5">
                    <p className="flex items-center gap-1 text-sm font-josefin font-normal"><FaPenNib  className="text-[#FB2E86] text-sm"/> <span className="">SaberAli</span></p>
                    <p className="flex  items-center gap-1 text-sm font-josefin font-normal"><FaRegCalendarAlt  className="text-[#FFA454] text-sm"/> <span>21 August,2020</span></p>
                </div>
                <h2 className="text-lg font-bold font-josefin text-[#151875] hover:text-[#FB2E86] mt-6 transition-all duration-500">Top essential trends in 2021</h2>
                <p className="font-normal text-[16px] text-[#72718F] my-4">More off this less hello samlande lied much
                over tightly circa horse taped mightly</p>
                <button className=" text-[#151875] hover:text-[#FB2E86] font-normal text-[16px] underline  capitalize transition-all duration-500">read more</button>
            </div>
        </div>
    );
};

export default ProductCard05;