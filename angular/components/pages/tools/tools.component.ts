// tools.component.ts 
import { Component } from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
