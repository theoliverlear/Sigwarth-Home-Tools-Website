// smoothie-ingredient.component.ts
import {Component, Input} from "@angular/core";
import {IngredientType} from "./models/IngredientType";
import {WeightStatus} from "./models/WeightStatus";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'smoothie-ingredient',
    templateUrl: './smoothie-ingredient.component.html',
    styleUrls: ['./smoothie-ingredient.component.css']
})
export class SmoothieIngredientComponent {
    @Input() type: IngredientType;
    @Input() weightStatus: WeightStatus = WeightStatus.NO_WEIGHT;
    constructor() {
        
    }

    getPercentageRecommendation(): string {
        let percentage: number;
        switch (this.type) {
            case IngredientType.APPLE_JUICE:
                percentage = 34;
                break;
            case IngredientType.YOGURT:
                percentage = 22;
                break;
            case IngredientType.FROZEN_FRUIT:
                percentage = 44;
                break;
            default:
                throw new Error("Invalid ingredient type");
        }
        return `Aim for ${percentage}% of total weight`;
    }

    protected readonly IngredientType = IngredientType;
    protected readonly TagType = TagType;
}
