import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodApi = createApi({
    reducerPath: 'goodApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: (id = '') => `users${`/${id}`}`,
        }),
        getPosts: build.query({
            query: () => 'posts',
        }),
        getComments: build.query({
            query: (limit = '') => `comments${`?_limit=${limit}`}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetCommentsQuery } = goodApi;
