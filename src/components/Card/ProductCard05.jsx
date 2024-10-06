import { FaPenNib, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductCard05 = ({item}) => {
  
    return (
        <div className="w-full md:w-[370px] ">
            <div className="image md:w-[370px] h-[255px]">
                <img src={item.image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="content">
                <div className="flex justify-between mt-5">
                    <p className="flex items-center gap-1 text-sm font-josefin font-normal"><FaPenNib  className="text-[#FB2E86] text-sm"/> <span className="">{item.author.name}</span></p>
                    <p className="flex  items-center gap-1 text-sm font-josefin font-normal"><FaRegCalendarAlt  className="text-[#FFA454] text-sm"/> <span>{item.publishDate}</span></p>
                </div>
                <h2 className="text-lg font-bold font-josefin text-[#151875] hover:text-[#FB2E86] mt-6 transition-all duration-500">{item.title}</h2>
                <p className="font-normal text-[16px] text-[#72718F] my-4">{item.descaption.slice(0,100)  }</p>
                <Link to={`/blog/${item._id}`}><button className=" text-[#151875] hover:text-[#FB2E86] font-normal text-[16px] underline  capitalize transition-all duration-500">read more</button> </Link>  
            </div>
        </div>
    );
};

export default ProductCard05;