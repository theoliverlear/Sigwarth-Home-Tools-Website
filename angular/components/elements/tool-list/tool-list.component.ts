// tool-list.component.ts 
import { Component } from "@angular/core";
import {toolAssets} from "../../../assets/toolAssets";


@Component({
    selector: 'tool-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent {
    constructor() {
        
    }

    protected readonly toolAssets = toolAssets;
}
