// smoothie-ingredient-list.component.ts 
import {Component, Input, ViewChild} from "@angular/core";
import {IngredientType} from "../smoothie-ingredient/models/IngredientType";
import {
    SmoothieIngredientComponent
} from "../smoothie-ingredient/smoothie-ingredient.component";
import {WeightStatus} from "../smoothie-ingredient/models/WeightStatus";
import {Smoothie} from "../../../models/smoothie/types";

@Component({
    selector: 'smoothie-ingredient-list',
    templateUrl: './smoothie-ingredient-list.component.html',
    styleUrls: ['./smoothie-ingredient-list.component.css']
})
export class SmoothieIngredientListComponent {
    @Input() smoothie: Smoothie;
    @ViewChild('appleJuiceElement') appleJuiceElement: SmoothieIngredientComponent;
    @ViewChild('yogurtElement') yogurtElement: SmoothieIngredientComponent;
    @ViewChild('frozenFruitElement') frozenFruitElement: SmoothieIngredientComponent;
    constructor() {
        
    }

    setWeightStatus(type: IngredientType, weightStatus: WeightStatus): void {
        switch (type) {
            case IngredientType.APPLE_JUICE:
                this.appleJuiceElement.weightStatus = weightStatus;
                break;
            case IngredientType.YOGURT:
                this.yogurtElement.weightStatus = weightStatus;
                break;
            case IngredientType.FROZEN_FRUIT:
                this.frozenFruitElement.weightStatus = weightStatus;
                break;
            default:
                throw new Error("Invalid ingredient type");
        }
    }

    protected readonly IngredientType = IngredientType;
    protected readonly WeightStatus = WeightStatus;
}
