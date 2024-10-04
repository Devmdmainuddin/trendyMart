import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        // get User
        getUser: builder.query({
            query: () => `/users`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'user', id })),
                        { type: 'user', id: 'LIST' }, // Track the list
                    ]
                    : [{ type: 'user', id: 'LIST' }],
        }),
        // Get User by email
        getUserByEmail: builder.query({
            query: (email) => `/user/${email}`,
            providesTags: (result) =>
                result
                    ? [{ type: 'user', id: result.id }, { type: 'user', id: 'LIST' }] 
                    : [{ type: 'user', id: 'LIST' }],
        }),
        

        // add product
        addUser: builder.mutation({
            query: (body) => ({
                url: `/user/`,
                method: 'PUT',
                body
            }),
            invalidatesTags: [{ type: 'user', id: 'LIST' },]
        }),



    }),
});

export const { useGetUserQuery,useGetUserByEmailQuery, useAddUserMutation } = authApi;
