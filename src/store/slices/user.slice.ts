import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IUser} from "../../interfaces";
import {userService} from "../../services";

interface IUserState {
    users: IUser[],
    update: IUser | null
}

const initialState: IUserState = {
    users: [],
    update: null
}

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {dispatch}) => {
        const {data} = await userService.getAll()
        dispatch(setUsers({users: data}))
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<{ users: IUser[] }>) => {
            state.users = action.payload.users
        }
    }
})

const userReducer = userSlice.reducer;

export default userReducer;
export const {setUsers} = userSlice.actions;
