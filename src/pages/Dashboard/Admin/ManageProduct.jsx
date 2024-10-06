import Swal from "sweetalert2";
import { useDeleteProductMutation, useGetproductsQuery } from "../../../Featured/ProductAPI/productApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";



const ManageProduct = () => {
  const [sortOrder, setSortOrder] = useState('new');
  const { data, error, isLoading, } = useGetproductsQuery({ sortOrder })
  const [deleteProduct] = useDeleteProductMutation()

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(id)
      }
    });



  }
  return (
    <div className='container mx-auto px-4 sm:px-8'>

      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    title
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    image
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Category
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    price
                  </th>

                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    owner
                  </th>

                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              {isLoading && <p>loading...........</p>}
              {!isLoading && !error && data && data.length > 0 && (
                <tbody>
                  {data?.map(item =>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{item.title}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <img src={item?.image} alt="" className="w-16 h-16" />
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{item.categorys.category}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>${item.price}</p>
                      </td>

                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{item?.userInfo?.name ? item?.userInfo?.name : item.userInfo.email}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>                      
                        <Link to={`/product/${item?._id}`} className='cursor-pointer inline-block px-3 py-1 border border-[#FB2E86]  rounded-sm font-semibold text-[#FB2E86] leading-tight'>
                          <BiDetail />
                        </Link>
                        <Link to={`/dashboard/edditProduct/${item._id} `} className='ml-1 cursor-pointer inline-block px-3 py-1 border border-[#FB2E86]  rounded-sm  font-semibold text-[#FB2E86] leading-tight'>
                          <FaRegEdit />
                        </Link>
                        <button onClick={() => handleDelete(item._id)} className='cursor-pointer inline-block px-3 py-1 border border-[#FB2E86]  rounded-sm   font-semibold text-[#FB2E86] leading-tight'>
                          <RiDeleteBinLine />
                        </button>
                      </td>
                    </tr>
                  )}
               
                </tbody>

              )}
            </table>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ManageProduct;