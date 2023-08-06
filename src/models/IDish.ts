import {IIngredientItem} from "./IIngredientItem";

export interface IDish {
    calories: number,
    carbohydrates: number,
    fats: number,
    id: number,
    imageURL: string,
    ingredients: IIngredientItem[]
    name: string,
    price: number,
    proteins: number,
    weight: number,
}