import {DelayService} from "./client/delay.service";
import {HttpClientService} from "./http/http-client.service";
import {
    CodeCommenterWebSocketService
} from "./websocket/code-commenter-websocket.service";
import {
    SaladMakerWebSocketService
} from "./websocket/salad-maker-websocket.service";
import {
    SmoothieBuilderWebSocketService
} from "./websocket/smoothie-builder-websocket.service";
import {WebSocketService} from "./websocket/websocket.service";

export const services = [
    DelayService,
    HttpClientService,
    CodeCommenterWebSocketService,
    SaladMakerWebSocketService,
    SmoothieBuilderWebSocketService,
    WebSocketService
];