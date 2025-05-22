// home.component.ts 
import { Component } from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {homeToolsDescription} from "../../../assets/textAssets";
import {logoImageAsset} from "../../../assets/imageAssets";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor() {
        
    }

    protected readonly TagType = TagType;
    protected readonly homeToolsDescription = homeToolsDescription;
    protected readonly logoImageAsset = logoImageAsset;
}
