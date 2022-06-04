import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
});

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        },
    },
});

export default userSlice.reducer;
