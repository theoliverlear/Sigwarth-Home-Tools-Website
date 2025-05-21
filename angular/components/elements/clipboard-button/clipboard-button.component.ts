// clipboard-button.component.ts 
import {Component, HostListener, Input} from "@angular/core";
import {DelayService} from "../../../services/client/delay.service";
import {ButtonText} from "../ss-button/models/ButtonText";
import {ElementSize} from "../../../models/ElementSize";

@Component({
    selector: 'clipboard-button',
    templateUrl: './clipboard-button.component.html',
    styleUrls: ['./clipboard-button.component.css']
})
export class ClipboardButtonComponent {
    buttonText: string = "Copy to Clipboard";
    @Input() textToCopy: string = "";
    constructor(private delayService: DelayService) {
        
    }

    @HostListener('click')
    onClick(): void {
        this.copyCurrentText();
    }

    copyCurrentText(): void {
        this.copyToClipboard(this.textToCopy);
    }

    copyToClipboard(text: string): void {
        navigator.clipboard.writeText(text).then((): void => {
            this.buttonText = "Copied!";
            this.delayService.delay(2000).then((): void => {
                this.buttonText = "Copy to Clipboard";
            });
        }).catch(error => {
            console.error('Error copying text: ', error);
        });
    }

    protected readonly ButtonText = ButtonText;
    protected readonly ElementSize = ElementSize;
}
