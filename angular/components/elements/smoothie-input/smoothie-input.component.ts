// smoothie-input.component.ts 
import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from "@angular/core";
import {SmoothieInput, SmoothieInputType} from "./models/types";
import {SsInputComponent} from "../ss-input/ss-input.component";
import {IngredientType} from "../smoothie-ingredient/models/IngredientType";
import {TagType} from "../../../models/html/TagType";
import {InputType} from "../ss-input/models/InputType";
import {Smoothie} from "../../../models/smoothie/types";

@Component({
    selector: 'smoothie-input',
    templateUrl: './smoothie-input.component.html',
    styleUrls: ['./smoothie-input.component.css']
})
export class SmoothieInputComponent {
    @Input() inputType: SmoothieInputType;
    @Output() inputChange: EventEmitter<SmoothieInput> = new EventEmitter<SmoothieInput>();
    @ViewChild(SsInputComponent) inputElement: SsInputComponent;
    @Input() percentage: number = 0;

    @Input() smoothie: Smoothie;
    constructor() {
        
    }
    updatePercentage(): void {
        switch (this.inputType.type) {
            case IngredientType.APPLE_JUICE:
                this.percentage = this.smoothie.appleJuicePercentage;
                break;
            case IngredientType.YOGURT:
                this.percentage = this.smoothie.yogurtPercentage;
                break;
            case IngredientType.FROZEN_FRUIT:
                this.percentage = this.smoothie.frozenFruitPercentage;
                break;
            default:
                this.percentage = 0;
                break;
        }
    }

    emitInputChange(value: string): void {
        let numberValue: number = parseInt(value);
        if (isNaN(numberValue)) {
            numberValue = 0;
        } else {
            if (numberValue < 0) {
                numberValue = 0;
            } else if (numberValue > 10000) {
                numberValue = 10000;
            }
        }
        this.inputElement.value = numberValue;
        const smoothieInput: SmoothieInput = {
            type: this.inputType.type,
            weight: numberValue,
            weightType: this.inputType.weightType
        };
        this.inputChange.emit(smoothieInput);
    }

    getPercentageString(): string {
        this.updatePercentage();
        return `Percentage: ${this.percentage}%`;
    }

    getWeightTypeString(): string {
        return `(${this.inputType.weightType})`;
    }

    protected readonly IngredientType = IngredientType;
    protected readonly TagType = TagType;
    protected readonly InputType = InputType;
}
