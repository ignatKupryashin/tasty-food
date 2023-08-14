import {IUser} from "../../models/iUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialState} from "./InitialState";

const userInitialState = new InitialState<IUser>();

export const userSlice = createSlice({
    name: 'users',
    initialState: userInitialState,
    reducers: {
        addUser(state, action: PayloadAction<IUser>){
            state.data.push(action.payload)
        },

        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload
        }    },
})

export default userSlice.reducer
