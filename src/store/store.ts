import {combineReducers, configureStore} from "@reduxjs/toolkit";

import userReducer from "./slices/user.slice";
import postReducer from "./slices/post.slice";
import commentReducer from "./slices/comment.slice";

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
