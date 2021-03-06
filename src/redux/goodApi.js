import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodApi = createApi({
    reducerPath: 'goodApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: (id = '') => `users${`/${id}`}`,
        }),
        getPosts: build.query({
            query: (idUser = '') => `posts${`/${idUser}`}`,
        }),
        getComments: build.query({
            // query: (limit = '') => `comments${`?_limit=${limit}`}`,
            query: (idUser = '') => `posts${`/${idUser}/comments`}`,
        }),
        addComment: build.mutation({
            query: (body) => ({
                url: 'posts',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetCommentsQuery, useAddCommentMutation } =
    goodApi;
