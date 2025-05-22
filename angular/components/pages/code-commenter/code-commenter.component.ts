// code-commenter.component.ts 
import {Component, HostListener, OnInit, ViewChild} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {
    CommentHeadingTypes
} from "../../../models/code-commenter/CommentHeadingTypes";
import {cancelIconImageAsset} from "../../../assets/imageAssets";
import {SsInputComponent} from "../../elements/ss-input/ss-input.component";
import {
    ClipboardButtonComponent
} from "../../elements/clipboard-button/clipboard-button.component";
import {
    CommentSettings,
    Comment,
    CommentHeadingType
} from "../../../models/code-commenter/types";
import {WebSocketCapable} from "../../../models/WebSocketCapable";
import {Subscription} from "rxjs";
import {
    CodeCommenterWebSocketService
} from "../../../services/websocket/code-commenter-websocket.service";

@Component({
    selector: 'code-commenter',
    templateUrl: './code-commenter.component.html',
    styleUrls: ['./code-commenter.component.css']
})
export class CodeCommenterComponent implements WebSocketCapable, OnInit {
    @ViewChild('headingInput') headingInput: SsInputComponent;
    @ViewChild(ClipboardButtonComponent) clipboardButton: ClipboardButtonComponent;
    webSocketSubscription: Subscription;
    commentSettings: CommentSettings = {
        type: CommentHeadingTypes.THIN.name,
        textContent: "",
        indentLevel: 0
    };
    commentOutput: string = "//...";

    constructor(private codeCommenterWebSocket: CodeCommenterWebSocketService) {
        
    }

    ngOnInit(): void {
        this.initializeWebSocket();
    }

    initializeWebSocket(): void {
        this.codeCommenterWebSocket.connect();
        this.webSocketSubscription = this.codeCommenterWebSocket.getMessages().subscribe(
            (comment: Comment): void => {
                if (comment) {
                    this.commentOutput = comment.comment;
                }
            }
        )
    }

    updateComment(): void {
        this.codeCommenterWebSocket.sendMessage(this.commentSettings);
    }

    updateTextContent(text: string): void {
        this.commentSettings.textContent = this.getNormalizedTextContent(text);
        this.updateComment();
    }

    getNormalizedTextContent(text: string): string {
        text = this.trimMultipleSpaces(text);
        text = this.getSlicedTextContent(text);
        this.headingInput.value = text;
        return text;
    }

    trimMultipleSpaces(text: string): string {
        if (text.includes("  ")) {
            text = text.replace("  ", " ");
        }
        return text;
    }

    getSlicedTextContent(originalText: string): string {
        const endIndex: number = 70 - (this.commentSettings.indentLevel * 8);
        if (originalText.length > endIndex) {
            return originalText.substring(0, endIndex);
        }
        return originalText;
    }

    updateIndentLevel(level: number): void {
        this.commentSettings.indentLevel = level;
        this.commentSettings.textContent = this.getNormalizedTextContent(this.commentSettings.textContent);
        this.updateComment();
    }

    updateCommentType(chosenTypeExample: string): void {
        const commentType: CommentHeadingType = CommentHeadingTypes.getByExample(chosenTypeExample);
        this.commentSettings.type = commentType.name;
        this.updateComment();
    }

    clearHeadingInput(): void {
        this.headingInput.value = '';
        this.commentSettings.textContent = '';
        this.updateComment();
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            this.clipboardButton.copyCurrentText();
        }
    }

    protected readonly TagType = TagType;
    protected readonly CommentHeadingTypes = CommentHeadingTypes;
    protected readonly cancelIconImageAsset = cancelIconImageAsset;
}
