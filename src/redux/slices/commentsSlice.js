import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getComments = createAsyncThunk('comments/getComments', async () => {
    return fetch('https://jsonplaceholder.typicode.com/comments?_limit=5').then((res) =>
        res.json(),
    );
});

const initialState = {
    comments: [],
    loading: false,
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    extraReducers: {
        [getComments.pending]: (state, action) => {
            state.loading = true;
        },
        [getComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
            state.error = '';
        },
        [getComments.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default commentSlice.reducer;
