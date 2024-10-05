import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productReviewsApi = createApi({
    reducerPath: 'productReviewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['productReviews'],
    endpoints: (builder) => ({
        // get reviews
        getProductReviews: builder.query({
            query: (id) => `/productReviews/${id}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'productReviews', id })),
                        { type: 'productReviews', id: 'LIST' }, // Track the list
                    ]
                    : [{ type: 'productReviews', id: 'LIST' }],
            
        }),
        
        // delete productReviews
        deleteProductReviews: builder.mutation({
            query: (id) => ({
                url: `/productReview/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'productReviews', id },
                { type: 'productReviews', id: 'LIST' },
            ],
        }),
        // add ProductReviews
        addProductReviews: builder.mutation({
            query: (body) => ({
                url: `/productReviews`,
                method: 'POST',
                body
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'productReviews', id },
                { type: 'productReviews', id: 'LIST' }
            
            ],
        }),

        


    }),
});

export const { useGetProductReviewsQuery, useDeleteProductReviewsMutation, useAddProductReviewsMutation} = productReviewsApi;
