// salad-input.component.ts 
import {Component, Output, EventEmitter, ViewChild} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {InputType} from "../ss-input/models/InputType";
import {saladLettuceImageAsset} from "../../../assets/imageAssets";
import {SsInputComponent} from "../ss-input/ss-input.component";

@Component({
    selector: 'salad-input',
    templateUrl: './salad-input.component.html',
    styleUrls: ['./salad-input.component.css']
})
export class SaladInputComponent {
    @Output() inputEvent: EventEmitter<number> = new EventEmitter<number>();
    @ViewChild(SsInputComponent) inputComponent: SsInputComponent;
    constructor() {
        
    }

    emitInputEvent(inputValue: string) {
        const value = parseFloat(inputValue);
        if (!isNaN(value)) {
            if (value < 0) {
                this.inputComponent.value = 0;
                this.inputEvent.emit(0);
            } else if (value > 10000) {
                this.inputComponent.value = 10000;
                this.inputEvent.emit(10000);
            } else {
                this.inputEvent.emit(value);
            }
        } else {
            this.inputEvent.emit(0);
        }
    }

    protected readonly TagType = TagType;
    protected readonly InputType = InputType;
    protected readonly saladLettuceImageAsset = saladLettuceImageAsset;
}
