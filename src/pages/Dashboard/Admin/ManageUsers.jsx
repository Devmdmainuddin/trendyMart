import { useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import Swal from 'sweetalert2'
import UpdateUserModal from '../../../components/modal/UpdateUserModal'
import { useDeleteUserMutation, useGetFilteredUsersQuery } from '../../../Featured/auth/authApi'


const ManageUsers = () => {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { data: filteruser = [], isLoading, isError, error, refetch } = useGetFilteredUsersQuery({ filter, sort });
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();


  const handleDelet = id => {
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
        await deleteUser(id)
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user has been delete",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

  }



  if (isLoading) return <div>Loading........</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}

        <div className='flex flex-col md:flex-row  items-center gap-5 mt-6'>
          <div>
            <select
              onChange={e => {
                setFilter(e.target.value)

              }}
              value={filter}
              name='role'
              id='role'
              className='border p-3 rounded-md bg-gray-100'
            >
              <option value=''>Filter By roul</option>
              <option value='user'>user</option>
              <option value='admin'>admin</option>
              <option value='seller'>seller</option>
            </select>
          </div>
          <div>
            <select
              onChange={e => {
                setSort(e.target.value)
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-3 rounded-md bg-gray-100'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>


        </div>
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
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteruser.map(user =>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{user?.firstName + user?.lastName}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        {user?.status ? (
                          <p
                            className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
                              } whitespace-no-wrap`}
                          >
                            {user?.status}
                          </p>
                        ) : (
                          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
                        )}
                      </td>

                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-[#F939BF] leading-tight'>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0 border  border-[#F939BF] opacity-50 rounded-sm'
                          ></span>
                          <span className='relative'>Update Role</span>
                        </button>

                        <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} refetch={refetch}></UpdateUserModal>
                        <button onClick={() => handleDelet(user._id)} className='cursor-pointer inline-block px-3 py-1 border ml-1 border-[#F939BF]  rounded-full font-semibold text-[#F939BF] leading-tight'>
                          <RiDeleteBinLine />
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUsers