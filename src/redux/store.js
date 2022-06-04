import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './slices/userSlice';
import PostReducer from './slices/postSlice';
import CommentReducer from './slices/commentsSlice';

import { goodApi } from '../redux/goodApi';

export const store = configureStore({
    reducer: {
        user: UserReducer,
        post: PostReducer,
        comment: CommentReducer,
        [goodApi.reducerPath]: goodApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodApi.middleware),
});
