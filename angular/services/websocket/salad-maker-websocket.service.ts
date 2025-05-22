import {Injectable} from "@angular/core";
import {Salad, Lettuce} from "../../models/salad/types";
import {environment} from "../../environments/environment";
import {WebSocketService} from "./websocket.service";

@Injectable({
    providedIn: 'root'
})
export class SaladMakerWebSocketService extends WebSocketService<Lettuce, Salad> {
    private static readonly URL: string = `${environment.webSocketUrl}/salad`;
    constructor() {
        super(SaladMakerWebSocketService.URL);
    }
}