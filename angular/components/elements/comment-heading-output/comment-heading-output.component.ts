// heading-output.component.ts 
import {Component, Input} from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'comment-heading-output',
    templateUrl: './comment-heading-output.component.html',
    styleUrls: ['./comment-heading-output.component.css']
})
export class CommentHeadingOutputComponent {
    @Input() commentHeading: string = '//...'
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
