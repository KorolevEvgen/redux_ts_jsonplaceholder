import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IComment} from "../../interfaces";
import {commentService} from "../../services";

interface ICommentState {
    comments: IComment[],
    update: IComment | null
}

const initialState: ICommentState = {
    comments: [],
    update: null
}

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {dispatch}) => {
        const {data} = await commentService.getAll()
        dispatch(setComments({comments: data}))
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<{ comments: IComment[] }>) => {
            state.comments = action.payload.comments
        }
    }
})

const commentReducer = commentSlice.reducer;

export default commentReducer;
export const {setComments} = commentSlice.actions;
