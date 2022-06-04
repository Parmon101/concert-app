import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=4').then((res) => res.json());
});

const initialState = {
    posts: [],
    loading: false,
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default postSlice.reducer;
