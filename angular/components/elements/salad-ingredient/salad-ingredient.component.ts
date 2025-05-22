// salad-ingredient.component.ts 
import {Component, Input} from "@angular/core";
import {SaladIngredientType} from "./models/SaladIngredientType";
import {
    saladCheeseImageAsset, saladCroutonImageAsset, saladDressingImageAsset,
    saladLettuceImageAsset,
    saladPepperoniImageAsset
} from "../../../assets/imageAssets";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'salad-ingredient',
    templateUrl: './salad-ingredient.component.html',
    styleUrls: ['./salad-ingredient.component.css']
})
export class SaladIngredientComponent {
    @Input() type: SaladIngredientType;
    @Input() grams: number;
    constructor() {
        
    }

    getImageAsset() {
        switch (this.type) {
            case SaladIngredientType.LETTUCE:
                return saladLettuceImageAsset;
            case SaladIngredientType.PEPPERONI:
                return saladPepperoniImageAsset;
            case SaladIngredientType.CHEESE:
                return saladCheeseImageAsset;
            case SaladIngredientType.CROUTONS:
                return saladCroutonImageAsset;
            case SaladIngredientType.DRESSING:
                return saladDressingImageAsset;
            default:
                throw new Error("Invalid ingredient type");
        }
    }


    protected readonly TagType = TagType;
}
