import { Helmet } from 'react-helmet-async'
 import useAxiosSecure from '../../../hooks/useAxiosSecure'
import {  useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import UserDataRow from '../../../components/row/UserDataRow'


const ManageUsers = () => {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')

  const axiosSecure = useAxiosSecure()

  const {data: filteruser = [],refetch} = useQuery({
    queryKey: ['filteruser',filter,sort],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/filteruser?filter=${filter}&sort=${sort}`)
      return data 
    },
  })
 




//   if (loading || isLoading) return <LoadingSpinner />
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>

        <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-6'>
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
              <option value='moderator'>moderator</option>
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
                  {filteruser.map(user => <UserDataRow key={user?._id} user={user} refetch={refetch} ></UserDataRow>)}
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