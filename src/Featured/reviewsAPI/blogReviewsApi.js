import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogReviewsApi = createApi({
    reducerPath: 'blogReviewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['blogReviews'],
    endpoints: (builder) => ({
        // get blogreviews
        getBlogReviews: builder.query({
            query: (id) => `/blogReviews/${id}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'blogReviews', id })),
                        { type: 'blogReviews', id: 'LIST' }, // Track the list
                    ]
                    : [{ type: 'blogReviews', id: 'LIST' }],
            
        }),
        
        // delete BlogReviews
        deleteBlogReviews: builder.mutation({
            query: (id) => ({
                url: `/blogReview/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'blogReviews', id },
                { type: 'blogReviews', id: 'LIST' },
            ],
        }),
        // add BlogReviews
        addBlogReviews: builder.mutation({
            query: (body) => ({
                url: `/blogReviews`,
                method: 'POST',
                body
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'blogReviews', id },
                { type: 'blogReviews', id: 'LIST' }
            
            ],
        }),

        


    }),
});

export const { useGetBlogReviewsQuery, useDeleteBlogReviewsMutation, useAddBlogReviewsMutation} = blogReviewsApi;
