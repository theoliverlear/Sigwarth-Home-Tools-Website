import {
    SmoothieInputType
} from "../components/elements/smoothie-input/models/types";
import {
    IngredientType
} from "../components/elements/smoothie-ingredient/models/IngredientType";

export const appleJuiceIngredientAsset: SmoothieInputType = {
    type: IngredientType.APPLE_JUICE,
    weightType: 'ml'
};

export const yogurtIngredientAsset: SmoothieInputType = {
    type: IngredientType.YOGURT,
    weightType: 'g'
};

export const frozenFruitIngredientAsset: SmoothieInputType = {
    type: IngredientType.FROZEN_FRUIT,
    weightType: 'g'
};

export const smoothieIngredientAssets: SmoothieInputType[] = [
    appleJuiceIngredientAsset,
    yogurtIngredientAsset,
    frozenFruitIngredientAsset
];