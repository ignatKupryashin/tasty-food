import {IDish} from "./IDish";

export interface DishState {
    dishes: IDish[];
    loading: boolean,
    error: null | string
}