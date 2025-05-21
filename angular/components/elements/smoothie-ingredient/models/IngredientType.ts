import {
    ImageAsset,
    smoothieAppleImageAsset,
    smoothieFruitBasketImageAsset,
    smoothieYogurtBowlImageAsset
} from "../../../../assets/imageAssets";

export enum IngredientType {
    APPLE_JUICE = 'Apple Juice',
    YOGURT = 'Yogurt',
    FROZEN_FRUIT = 'Frozen Fruit'
}
export namespace IngredientType {
    export function getImageAsset(type: IngredientType): ImageAsset {
        switch (type) {
            case IngredientType.APPLE_JUICE:
                return smoothieAppleImageAsset;
            case IngredientType.YOGURT:
                return smoothieYogurtBowlImageAsset;
            case IngredientType.FROZEN_FRUIT:
                return smoothieFruitBasketImageAsset;
            default:
                throw new Error('Invalid ingredient type');
        }
    }
}