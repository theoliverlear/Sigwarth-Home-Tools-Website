// tools-dropdown-item.component.ts 
import { Component, Input } from "@angular/core";
import {TextElementLink} from "../../../models/link/TextElementLink";

@Component({
    selector: 'tools-dropdown-item',
    templateUrl: './tools-dropdown-item.component.html',
    styleUrls: ['./tools-dropdown-item.component.css']
})
export class ToolsDropdownItemComponent {
    @Input() toolLink: TextElementLink;
    constructor() {
        
    }
}
