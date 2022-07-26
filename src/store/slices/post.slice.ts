import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IPost} from "../../interfaces";
import {postService} from "../../services";

interface IPostState {
    posts: IPost[],
    update: IPost | null
}

const initialState: IPostState = {
    posts: [],
    update: null
}

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {dispatch}) => {
        const {data} = await postService.getAll()
        dispatch(setPosts({posts: data}))
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<{ posts: IPost[] }>) => {
            state.posts = action.payload.posts
        }
    }
})

const postReducer = postSlice.reducer;

export default postReducer;
export const {setPosts} = postSlice.actions;
