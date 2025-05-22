import {Injectable} from "@angular/core";
import {WebSocketService} from "./websocket.service";
import {SmoothieRequest, SmoothieResponse} from "../../models/smoothie/types";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class SmoothieBuilderWebSocketService extends WebSocketService<SmoothieRequest, SmoothieResponse> {
    private static readonly URL: string = `${environment.webSocketUrl}/smoothie`;

    constructor() {
        super(SmoothieBuilderWebSocketService.URL);
    }
}