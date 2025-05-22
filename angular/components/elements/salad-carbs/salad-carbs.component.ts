// salad-carbs.component.ts 
import { Component, Input } from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'salad-carbs',
    templateUrl: './salad-carbs.component.html',
    styleUrls: ['./salad-carbs.component.css']
})
export class SaladCarbsComponent {
    @Input() carbs: number;
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
