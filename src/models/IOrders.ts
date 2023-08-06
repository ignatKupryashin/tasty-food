import {IOrderElements} from "./IOrderElements";

export interface IOrders {
    id: number,
    userID: number,
    price: number,
    isFinished: boolean,
    dateTime: Date,
    orderElements: IOrderElements[]
}