import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBookReader, FaDollarSign, FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";


const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const { data: adminStats = [] } = useQuery({
        queryKey: ['adminStats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    return (
     
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6'>
            <div className="p-6 bg-[#ddf5f1]">
                <h5 className="text-3xl text-gray-700 leading-5 font-semibold text-center uppercase">user</h5>
               
                  <div className="mt-3 p-1 flex  items-center justify-center gap-x-4">
                    <span className="text-2xl leading-none text-gray-700 font-semibold">{adminStats.users}</span>
                    <FaUser className='text-2xl'/>
                  </div>
              
              </div>
              <div className=" p-6 bg-[#ddf5f1]">
                <h5 className="text-3xl text-gray-700 leading-5 font-semibold text-center uppercase">total product</h5>  
                  <div className="mt-3 p-1 flex  items-center justify-center gap-x-4">
                    <span className="text-2xl leading-none text-gray-700 font-semibold">{adminStats.product}</span>
                    <FaBookReader className='text-2xl'/>
                  </div>
              </div>
              <div className=" p-6 bg-[#ddf5f1]">
                <h5 className="text-3xl text-gray-700 leading-5 font-semibold text-center uppercase">total order </h5>
                  <div className="mt-3 p-1  flex  items-center justify-center gap-x-4">
                    <span className="text-2xl leading-none text-gray-700  font-semibold">{adminStats?.orders}</span>
                    <FiShoppingBag className='text-2xl'/>
                  </div>
              </div>

              <div className=" p-6 bg-[#ddf5f1]">
                <h5 className="text-3xl text-gray-700 leading-5 font-semibold text-center uppercase">total payment</h5>
                  <div className="mt-3 p-1  flex  items-center justify-center gap-x-4">
                    <span className="text-2xl leading-none text-gray-700  font-semibold">{adminStats?.revenue?.toFixed(2)}</span>
                    <FaDollarSign className='text-2xl'/>
                   
                  </div>
              </div>
            </div>
    );
};

export default AdminHome;