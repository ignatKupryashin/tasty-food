import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import dishSlice from "./reducers/DishSlice";



export const rootReducer = combineReducers({
        dishesReducer: dishSlice
})

export const setupStore = () => {
        return configureStore({
                reducer: rootReducer
        })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
