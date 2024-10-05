import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['blog'],
    endpoints: (builder) => ({
        // get blog
        getBlogs: builder.query({
            query: () => `/blogs`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'blog', id })),
                        { type: 'blog', id: 'LIST' }, // Track the list
                    ]
                    : [{ type: 'blog', id: 'LIST' }],
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
        
        // delete blog
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blog/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'blog', id },
                { type: 'blog', id: 'LIST' },
            ],
        }),
        // add blog
        addBlog: builder.mutation({
            query: (body) => ({
                url: `/blog`,
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'blog', id: 'LIST' },]
        }),

        // update blog
        // updateBlog: builder.mutation({
        //     query: ({ id, updateBlog }) => ({
        //         url: `/blog/${id}`,
        //         method: 'PUT',
        //         body: updateBlog,
        //     }),
        //     invalidatesTags: (result, error, id) => [
        //         { type: 'blog', id },
        //         { type: 'blog', id: 'LIST' },
        //     ],
        // }),


    }),
});
// useUpdateBlogMutation 
export const { useGetBlogsQuery, useDeleteBlogMutation, useAddBlogMutation, } = blogApi;
