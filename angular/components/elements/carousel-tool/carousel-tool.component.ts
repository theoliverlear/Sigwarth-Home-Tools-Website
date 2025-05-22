// carousel-tool.component.ts 
import {Component, HostListener, Input} from "@angular/core";
import {CarouselTool} from "./models/types";
import {TagType} from "../../../models/html/TagType";
import {Router} from "@angular/router";

@Component({
    selector: 'carousel-tool',
    templateUrl: './carousel-tool.component.html',
    styleUrls: ['./carousel-tool.component.css']
})
export class CarouselToolComponent {
    @Input() tool: CarouselTool;
    constructor(private router: Router) {
        
    }

    @HostListener('click')
    onClick() {
        this.router.navigate([this.tool.elementLink.hrefLink]);
    }

    protected readonly TagType = TagType;
}
