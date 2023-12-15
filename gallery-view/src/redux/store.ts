'use client'

import { configureStore } from '@reduxjs/toolkit'
import boardsReducer from './boardsSlice'
import assetsReducer from './assetsSlice'
import searchReducer from './searchSlice'

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    assets: assetsReducer,
    search: searchReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store