// smoothie-input-carousel.component.ts 
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {
    smoothieIngredientAssets
} from "../../../assets/smoothieIngredientAssets";
import {SmoothieInput} from "../smoothie-input/models/types";
import {Smoothie} from "../../../models/smoothie/types";

@Component({
    selector: 'smoothie-input-carousel',
    templateUrl: './smoothie-input-carousel.component.html',
    styleUrls: ['./smoothie-input-carousel.component.css']
})
export class SmoothieInputCarouselComponent {
    @Input() smoothie: Smoothie;
    @Output() smoothieInputChange: EventEmitter<SmoothieInput> = new EventEmitter<SmoothieInput>();
    constructor() {
        
    }

    emitSmoothieInputChange(smoothieInput: SmoothieInput): void {
        this.smoothieInputChange.emit(smoothieInput);
    }

    protected readonly smoothieIngredientAssets = smoothieIngredientAssets;
}
