// salad-ingredient-list.component.ts 
import { Component, Input } from "@angular/core";
import {Salad} from "../../../models/salad/types";
import {
    SaladIngredientType
} from "../salad-ingredient/models/SaladIngredientType";

@Component({
    selector: 'salad-ingredient-list',
    templateUrl: './salad-ingredient-list.component.html',
    styleUrls: ['./salad-ingredient-list.component.css']
})
export class SaladIngredientListComponent {
    @Input() salad: Salad;
    constructor() {
        
    }

    protected readonly SaladIngredientType = SaladIngredientType;
}
