// https://react-redux.js.org/tutorials/typescript-quick-start

import {configureStore} from '@reduxjs/toolkit'
import dataFrameReducer from '@/redux/slices/frameViewSlice.ts'
import dataTableReducer from "@/redux/slices/dataTableSlice.ts";
import paginationReducer from "@/redux/slices/paginationSlice.ts"

export const store = configureStore({
    reducer: {
        dataFrame: dataFrameReducer,
        dataTable: dataTableReducer,
        pagination: paginationReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch