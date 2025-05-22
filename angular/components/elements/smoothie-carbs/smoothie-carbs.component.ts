// smoothie-carbs.component.ts 
import {Component, Input} from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'smoothie-carbs',
    templateUrl: './smoothie-carbs.component.html',
    styleUrls: ['./smoothie-carbs.component.css']
})
export class SmoothieCarbsComponent {
    @Input() carbs: number = 0;
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
