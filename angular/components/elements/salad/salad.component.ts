// salad.component.ts 
import { Component, Input } from "@angular/core";
import {Salad} from "../../../models/salad/types";
import {saladToolImageAsset} from "../../../assets/imageAssets";

@Component({
    selector: 'salad',
    templateUrl: './salad.component.html',
    styleUrls: ['./salad.component.css']
})
export class SaladComponent {
    @Input() salad: Salad;
    constructor() {
        
    }

    protected readonly saladToolImageAsset = saladToolImageAsset;
}
