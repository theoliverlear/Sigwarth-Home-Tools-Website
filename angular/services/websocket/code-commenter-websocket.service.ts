import {Injectable} from "@angular/core";
import {WebSocketService} from "./websocket.service";
import {CommentSettings} from "../../models/code-commenter/types";
import {environment} from "../../environments/environment";
import {Comment} from "../../models/code-commenter/types";

@Injectable({
    providedIn: 'root'
})
export class CodeCommenterWebSocketService extends WebSocketService<CommentSettings, Comment> {
    private static readonly URL: string = `${environment.webSocketUrl}/code-commenter`;
    constructor() {
        super(CodeCommenterWebSocketService.URL);
    }

}