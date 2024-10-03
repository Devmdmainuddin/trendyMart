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
            transformResponse: (response, meta, arg) => {
                // Sorting logic based on arg (sortOrder)
                const sortOrder = arg?.sortOrder || 'new'; // Default to 'new' if no argument is provided
                const sortedData = [...response].sort((a, b) => {
                    const dateA = new Date(a.createAt);
                    const dateB = new Date(b.createAt);
                    return sortOrder === 'new' ? dateB - dateA : dateA - dateB;
                });
                return sortedData;
            },
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
            invalidatesTags: [{ type: 'product', id: 'LIST' },]
        }),

        // update product
        updateProduct: builder.mutation({
            query: ({ id, updateProduct }) => ({
                url: `/updateproducts/${id}`,
                method: 'PUT',
                body: updateProduct,
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'product', id },
                { type: 'product', id: 'LIST' },
            ],
        }),


    }),
});

export const { useGetproductsQuery, useDeleteProductMutation, useAddProductMutation, useUpdateProductMutation } = productApi;
