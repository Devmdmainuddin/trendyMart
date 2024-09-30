import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'category',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['category'],
    endpoints: (builder) => ({
        // get Category
        getCategory: builder.query({
            query: () => `/category`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'category', id })),
                          { type: 'category', id: 'LIST' }, // Track the list
                      ]
                    : [{ type: 'category', id: 'LIST' }],
        }),
        // delete Category
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'category', id },
                { type: 'category', id: 'LIST' }, 
            ],
        }),
        // add Category
        addCategory: builder.mutation({
            query: (body) => ({
                url: `/category/`,
                method: 'POST',
                body
            }),
            invalidatesTags:  [{ type: 'category', id: 'LIST' },] 
        }),
        
        // update Category
        updateCategory: builder.mutation({
            query: ({id,updateCategory}) => ({
                url: `/category/${id}`,
                method: 'PUT',
                body:updateCategory,
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'category', id },
                { type: 'category', id: 'LIST' },  
            ], 
        }),


    }),
});

export const { useGetCategoryQuery, useDeleteCategoryMutation,useAddCategoryMutation ,useUpdateCategoryMutation} = categoryApi;
