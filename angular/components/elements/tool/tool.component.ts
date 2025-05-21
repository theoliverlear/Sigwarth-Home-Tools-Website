// tool.component.ts 
import {Component, Input} from "@angular/core";
import {Tool} from "../../../models/tool/types";
import {TagType} from "../../../models/html/TagType";
import {Router} from "@angular/router";

@Component({
    selector: 'tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.css']
})
export class ToolComponent {
    @Input() tool: Tool;
    constructor(private router: Router) {
        
    }

    navigateToTool(): void {
        this.router.navigate([this.tool.elementLink.hrefLink]);
    }

    protected readonly TagType = TagType;
}
