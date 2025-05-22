// carousel.component.ts 
import {
    Component,
    Input
} from "@angular/core";
import {CarouselTool} from "../carousel-tool/models/types";
import {carouselTools} from "../../../assets/carouselToolAssets";

@Component({
    selector: 'tool-carousel',
    templateUrl: './tool-carousel.component.html',
    styleUrls: ['./tool-carousel.component.css']
})
export class ToolCarouselComponent {
    @Input() tools: CarouselTool[] = carouselTools;
    constructor() {
        
    }

    protected readonly carouselTools = carouselTools;
}
