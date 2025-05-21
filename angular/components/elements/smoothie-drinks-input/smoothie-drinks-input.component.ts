// smoothie-drinks-input.component.ts 
import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from "@angular/core";
import {SsInputComponent} from "../ss-input/ss-input.component";
import {InputType} from "../ss-input/models/InputType";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'smoothie-drinks-input',
    templateUrl: './smoothie-drinks-input.component.html',
    styleUrls: ['./smoothie-drinks-input.component.css']
})
export class SmoothieDrinksInputComponent {
    @Input() numDrinks: number = 2;
    @Output() numDrinksChange: EventEmitter<number> = new EventEmitter<number>();
    @ViewChild(SsInputComponent) inputElement: SsInputComponent;
    constructor() {
        
    }
    emitNumDrinksChange(value: string): void {
        let numDrinks: number = parseInt(value);
        if (isNaN(numDrinks)) {
            this.numDrinks = 0;
        } else {
            if (numDrinks < 0) {
                numDrinks = 0;
                this.inputElement.value = numDrinks;
            } else if (numDrinks > 10) {
                numDrinks = 10;
                this.inputElement.value = numDrinks
            }
        }
        this.numDrinks = numDrinks;
        this.numDrinksChange.emit(this.numDrinks);
    }

    protected readonly InputType = InputType;
    protected readonly TagType = TagType;
}
