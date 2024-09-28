import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        // get product
        getproducts: builder.query({
            query: () => `/products`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'product', id })),
                          { type: 'product', id: 'LIST' }, // Track the list
                      ]
                    : [{ type: 'product', id: 'LIST' }],
        }),
        // delete product
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'product', id },
                { type: 'product', id: 'LIST' }, 
            ],
        }),
        // add product
        addProduct: builder.mutation({
            query: (body) => ({
                url: `/product/`,
                method: 'POST',
                body
            }),
            invalidatesTags:  [{ type: 'product', id: 'LIST' },] 
        }),
        
        // update product
        updateProduct: builder.mutation({
            query: ({id,updateProduct}) => ({
                url: `/updateproducts/${id}`,
                method: 'PUT',
                body:updateProduct,
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'product', id },
                { type: 'product', id: 'LIST' },  
            ], 
        }),


    }),
});

export const { useGetproductsQuery, useDeleteProductMutation,useAddProductMutation ,useUpdateProductMutation} = productApi;
