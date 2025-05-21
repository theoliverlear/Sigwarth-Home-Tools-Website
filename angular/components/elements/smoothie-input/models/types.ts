import {
    IngredientType
} from "../../smoothie-ingredient/models/IngredientType";

export type SmoothieInputType = {
    type: IngredientType,
    weightType: 'g' | 'ml'
};

export type SmoothieInput = {
    type: IngredientType,
    weight: number,
    weightType: 'g' | 'ml'
};