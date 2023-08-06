import {Grade} from "./Grade";

export interface IRestaurantReviews {
    id: number,
    userName: string,
    userLastName: string,
    grade: Grade,
    comment: string
    dateTime: Date
}