// tool-keyword.component.ts 
import { Component, Input } from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'tool-keyword',
    templateUrl: './tool-keyword.component.html',
    styleUrls: ['./tool-keyword.component.css']
})
export class ToolKeywordComponent {
    @Input() keyword: string;
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
