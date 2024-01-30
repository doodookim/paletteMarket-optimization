import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../modules/searchSlice';
import authSlice from '../modules/authSlice';

import itemSlice from '../modules/itemSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    auth: authSlice,
    item: itemSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
