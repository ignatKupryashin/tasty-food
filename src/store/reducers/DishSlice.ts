import {IDish} from "../../models/dishes/IDish";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DishState {
    dishes: IDish[],
    isLoading: boolean;
    error: string;
}

const initialState: DishState = {
    dishes: [],
    isLoading: false,
    error: ''
}

export const dishSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        addDish(state, action: PayloadAction<IDish>){
            state.dishes.push(action.payload)
        },

        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload
        }    },
})

export default dishSlice.reducer