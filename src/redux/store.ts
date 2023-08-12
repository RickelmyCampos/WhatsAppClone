import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './features/themeSlice'
// ...

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch