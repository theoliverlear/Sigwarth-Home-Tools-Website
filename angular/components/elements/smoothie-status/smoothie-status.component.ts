// smoothie-status.component.ts 
import { Component, Input } from "@angular/core";
import {smoothieToolImageAsset} from "../../../assets/imageAssets";
import {SmoothieStatus} from "./models/SmoothieStatus";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'smoothie-status',
    templateUrl: './smoothie-status.component.html',
    styleUrls: ['./smoothie-status.component.css']
})
export class SmoothieStatusComponent {
    @Input() smoothieStatus: SmoothieStatus = SmoothieStatus.NO_SMOOTHIE_BUILT;
    constructor() {
        
    }

    protected readonly smoothieToolImageAsset = smoothieToolImageAsset;
    protected readonly TagType = TagType;
}
