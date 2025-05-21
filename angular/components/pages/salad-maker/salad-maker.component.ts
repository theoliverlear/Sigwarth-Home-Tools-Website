// salad-maker.component.ts 
import {Component, OnInit} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {Salad, Lettuce} from "../../../models/salad/types";
import {WebSocketCapable} from "../../../models/WebSocketCapable";
import {Subscription} from "rxjs";
import {
    SaladMakerWebSocketService
} from "../../../services/websocket/salad-maker-websocket.service";

@Component({
    selector: 'salad-maker',
    templateUrl: './salad-maker.component.html',
    styleUrls: ['./salad-maker.component.css']
})
export class SaladMakerComponent implements WebSocketCapable, OnInit {
    salad: Salad = {
        cheeseGrams: 0,
        dressingGrams: 0,
        lettuceGrams: 114,
        croutonsGrams: 0,
        pepperoniGrams: 0,
        carbs: 0
    };
    webSocketSubscription: Subscription;
    constructor(private saladMakerWebSocket: SaladMakerWebSocketService) {
        
    }

    ngOnInit() {
        this.initializeWebSocket();
        console.log(this.salad);
        this.sendSaladToServer(this.salad.lettuceGrams);
    }

    initializeWebSocket(): void {
        this.saladMakerWebSocket.connect();
        this.webSocketSubscription = this.saladMakerWebSocket.getMessages().subscribe(
            (salad: Salad): void => {
                console.log(salad);
                if (salad) {
                    this.salad = salad;
                }
            }
        );
    }

    sendSaladToServer(lettuceGrams: number): void {
        this.salad.lettuceGrams = lettuceGrams;
        const lettuce: Lettuce = {
            lettuceGrams: this.salad.lettuceGrams
        };
        this.saladMakerWebSocket.sendMessage(lettuce);
    }

    protected readonly TagType = TagType;
}
