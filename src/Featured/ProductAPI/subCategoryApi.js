import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const subCategoryApi = createApi({
    reducerPath: 'subCategoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['subcategory'],
    endpoints: (builder) => ({
        // get subcategory
        getSubcategory: builder.query({
            query: () => `/subcategory`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'subcategory', id })),
                          { type: 'subcategory', id: 'LIST' }, // Track the list
                      ]
                    : [{ type: 'subcategory', id: 'LIST' }],
        }),
        // delete subcategory
        deleteSubcategory: builder.mutation({
            query: (id) => ({
                url: `/subcategory/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'subcategory', id },
                { type: 'subcategory', id: 'LIST' }, 
            ],
        }),
        // add subcategory
        addSubcategory: builder.mutation({
            query: (body) => ({
                url: `/subcategory/`,
                method: 'POST',
                body
            }),
            invalidatesTags:  [{ type: 'subcategory', id: 'LIST' },] 
        }),
        
        // update subcategory
        updateSubcategory: builder.mutation({
            query: ({id,updateSubcategory}) => ({
                url: `/subcategory/${id}`,
                method: 'PUT',
                body:updateSubcategory,
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'subcategory', id },
                { type: 'subcategory', id: 'LIST' },  
            ], 
        }),


    }),
});

export const { useGetSubcategoryQuery, useDeleteSubcategoryMutation,useAddSubcategoryMutation ,useUpdateSubcategoryMutation} = subCategoryApi;
