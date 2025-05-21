// smoothie.component.ts 
import {Component, Input, ViewChild} from "@angular/core";
import {Smoothie} from "../../../models/smoothie/types";
import {defaultSmoothie} from "../../../assets/smoothieAssets";
import {SmoothieStatus} from "../smoothie-status/models/SmoothieStatus";
import {
    SmoothieIngredientListComponent
} from "../smoothie-ingredient-list/smoothie-ingredient-list.component";
import {IngredientType} from "../smoothie-ingredient/models/IngredientType";
import {WeightStatus} from "../smoothie-ingredient/models/WeightStatus";

@Component({
    selector: 'smoothie',
    templateUrl: './smoothie.component.html',
    styleUrls: ['./smoothie.component.css']
})
export class SmoothieComponent {
    @Input() smoothie: Smoothie = defaultSmoothie;
    @ViewChild(SmoothieIngredientListComponent) ingredientListElement: SmoothieIngredientListComponent;
    constructor() {
        
    }

    setNumDrinks(numDrinks: number): void {
        this.smoothie.numDrinks = numDrinks;
    }

    setIngredientWeightStatus(ingredientType: IngredientType,
                              weightStatus: WeightStatus): void {
        this.ingredientListElement.setWeightStatus(ingredientType, weightStatus);
    }

    protected readonly SmoothieStatus = SmoothieStatus;
}
