// indent-input.component.ts 
import {Component, EventEmitter, Output, ViewChild} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {InputType} from "../ss-input/models/InputType";
import {SsInputComponent} from "../ss-input/ss-input.component";

@Component({
    selector: 'indent-input',
    templateUrl: './indent-input.component.html',
    styleUrls: ['./indent-input.component.css']
})
export class IndentInputComponent {
    @Output() indentChange: EventEmitter<number> = new EventEmitter<number>();
    @ViewChild(SsInputComponent) inputElement: SsInputComponent;
    constructor() {
        
    }

    emitIndentChange(value: string): void {
        let numberValue: number = parseInt(value);
        this.inputElement.value = numberValue;
        if (!isNaN(numberValue)) {
            if (numberValue < 0) {
                numberValue =  0;
                this.inputElement.value = numberValue;
            } else if (numberValue > 5) {
                numberValue = 5;
                this.inputElement.value = numberValue;
            }
            this.indentChange.emit(numberValue);
        } else {
            this.indentChange.emit(0);
        }
    }

    protected readonly TagType = TagType;
    protected readonly InputType = InputType;
}
