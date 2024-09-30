import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const brandApi = createApi({
    reducerPath: 'brandApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['brand'],
    endpoints: (builder) => ({
        // get product
        getBrand: builder.query({
            query: () => `/brand`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'brand', id })),
                          { type: 'brand', id: 'LIST' }, // Track the list
                      ]
                    : [{ type: 'brand', id: 'LIST' }],
        }),
        // delete product
        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `/brand/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'brand', id },
                { type: 'brand', id: 'LIST' }, 
            ],
        }),
        // add product
        addBrand: builder.mutation({
            query: (body) => ({
                url: `/brand/`,
                method: 'POST',
                body
            }),
            invalidatesTags:  [{ type: 'brand', id: 'LIST' },] 
        }),
        
        // update product
        updateBrand: builder.mutation({
            query: ({id,updateProduct}) => ({
                url: `/updateproducts/${id}`,
                method: 'PUT',
                body:updateProduct,
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'brand', id },
                { type: 'brand', id: 'LIST' },  
            ], 
        }),


    }),
});

export const { useGetBrandQuery, useDeleteBrandMutation,useAddBrandMutation ,useUpdateBrandMutation} = brandApi;
