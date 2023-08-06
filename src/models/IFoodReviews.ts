import {Grade} from "./Grade";

export interface IFoodReviews {
    id: number,
    dishId: number,
    userId: number,
    grade: Grade,
    comment: string
}