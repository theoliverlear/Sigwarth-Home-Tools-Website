// tool-keyword-list.component.ts 
import { Component, Input } from "@angular/core";

@Component({
    selector: 'tool-keyword-list',
    templateUrl: './tool-keyword-list.component.html',
    styleUrls: ['./tool-keyword-list.component.css']
})
export class ToolKeywordListComponent {
    @Input() keywords: string[] = [];
    constructor() {
        
    }
}
