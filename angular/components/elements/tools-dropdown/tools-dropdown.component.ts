// tools-dropdown.component.ts 
import {Component, ElementRef, HostListener, ViewChild, AfterViewInit} from "@angular/core";
import {
    toolsElementLink,
    toolsElementLinks
} from "../../../assets/elementLinkAssets";

@Component({
    selector: 'tools-dropdown',
    templateUrl: './tools-dropdown.component.html',
    styleUrls: ['./tools-dropdown.component.css']
})
export class ToolsDropdownComponent {
    @ViewChild('toolsDiv') toolsDiv: ElementRef;
    toolsShown: boolean = false;
    constructor() {
        
    }

    @HostListener('mouseover')
    onMouseOver() {
        this.toolsShown = true;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.toolsShown = false;
    }


    protected readonly toolsElementLink = toolsElementLink;
    protected readonly toolsElementLinks = toolsElementLinks;
}
