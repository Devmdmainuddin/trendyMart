import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi', // The reducer path for this API slice
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }), // Base URL from environment variable
    tagTypes: ['user'], // Tag type for cache management

    endpoints: (builder) => ({
        // Fetch all users
        getUser: builder.query({
            query: () => `/users`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'user', id })), // Tagging each user
                        { type: 'user', id: 'LIST' }, // Tagging the user list
                    ]
                    : [{ type: 'user', id: 'LIST' }],
        }),

        // getFilteredUsers

        getFilteredUsers: builder.query({
            query: ({ filter, sort }) => ({
                url: '/filteruser', // The endpoint URL
                params: { filter, sort }, // Query parameters sent to the server
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'user', id })), // Tagging each user
                        { type: 'user', id: 'LIST' }, // Tagging the user list
                    ]
                    : [{ type: 'user', id: 'LIST' }],
        }),



        // Fetch user by email
        getUserByEmail: builder.query({
            query: (email) => `/user/${email}`,
            providesTags: (result) =>
                result
                    ? [{ type: 'user', id: result.id }, { type: 'user', id: 'LIST' }]
                    : [{ type: 'user', id: 'LIST' }],
        }),


        // Add a new user 

        addUser: builder.mutation({
            query: (body) => ({
                url: `/user/`,
                method: 'PUT',
                body
            }),
            invalidatesTags: [{ type: 'user', id: 'LIST' }],  // Invalidate the list cache after adding
        }),

        // Update a user by email  

        updateUser: builder.mutation({
            query: ({ email, ...body }) => ({
                url: `/users/${email}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: [{ type: 'user', id: 'LIST' }], // Invalidate the list cache after updating
        }),
        // Add the deleteUser mutation
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/users/${userId}`, // Assuming the endpoint follows this structure
                method: 'DELETE', // HTTP method to delete the user
            }),
            invalidatesTags: [{ type: 'user', id: 'LIST' }], // Invalidate user list cache
        }),

    }),
});

export const { useGetUserQuery, useGetUserByEmailQuery, useAddUserMutation, useGetFilteredUsersQuery, useUpdateUserMutation ,useDeleteUserMutation } = authApi;



// ..................

// const { data: users = [], isLoading, refetch } = useGetUserQuery();
//   if (isLoading) return <div>Loading...</div>;

// ..................

// const { data: user, isLoading } = useGetUserByEmailQuery(email);
//   if (isLoading) return <div>Loading...</div>;

// ..................

// const [addUser, { isLoading }] = useAddUserMutation();
//   const handleSubmit = async () => {
//     await addUser(info);
//   };

// ..................

// const [updateUser, { isLoading }] = useUpdateUserMutation();
//   const handleUpdate = async () => {
//     await updateUser(userRole)
//   };

