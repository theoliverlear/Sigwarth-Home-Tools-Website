// smoothie-builder.component.ts 
import {Component, Input, OnInit} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {
    Smoothie,
    SmoothieRequest,
    SmoothieResponse
} from "../../../models/smoothie/types";
import {defaultSmoothie} from "../../../assets/smoothieAssets";
import {SmoothieInput} from "../../elements/smoothie-input/models/types";
import {
    IngredientType
} from "../../elements/smoothie-ingredient/models/IngredientType";
import {WebSocketCapable} from "../../../models/WebSocketCapable";
import {
    SmoothieBuilderWebSocketService
} from "../../../services/websocket/smoothie-builder-websocket.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'smoothie-builder',
    templateUrl: './smoothie-builder.component.html',
    styleUrls: ['./smoothie-builder.component.css']
})
export class SmoothieBuilderComponent implements WebSocketCapable, OnInit {
    @Input() smoothie: Smoothie = defaultSmoothie;
    webSocketSubscription: Subscription;
    constructor(private smoothieWebSocket: SmoothieBuilderWebSocketService) {
        
    }

    ngOnInit(): void {
        this.initializeWebSocket();
    }

    initializeWebSocket(): void {
        this.smoothieWebSocket.connect();
        this.webSocketSubscription = this.smoothieWebSocket.getMessages().subscribe(
            (smoothieResponse: SmoothieResponse): void => {
                if (smoothieResponse) {
                    this.smoothie.smoothieStatus = smoothieResponse.smoothieStatus;
                    this.smoothie.appleJuiceStatus = smoothieResponse.appleJuiceStatus;
                    this.smoothie.yogurtStatus = smoothieResponse.yogurtStatus;
                    this.smoothie.frozenFruitStatus = smoothieResponse.frozenFruitStatus;
                    this.smoothie.appleJuicePercentage = smoothieResponse.appleJuicePercentage;
                    this.smoothie.yogurtPercentage = smoothieResponse.yogurtPercentage;
                    this.smoothie.frozenFruitPercentage = smoothieResponse.frozenFruitPercentage;
                    this.smoothie.carbsPerDrink = smoothieResponse.carbsPerDrink;
                }
            }
        );
    }

    updateSmoothie(): void {
        const smoothieRequest: SmoothieRequest = {
            appleJuiceWeight: this.smoothie.appleJuiceWeight,
            yogurtWeight: this.smoothie.yogurtWeight,
            frozenFruitWeight: this.smoothie.frozenFruitWeight,
            numDrinks: this.smoothie.numDrinks
        };
        this.smoothieWebSocket.sendMessage(smoothieRequest);
    }

    setSmoothieWeights(smoothieInput: SmoothieInput): void {
        switch (smoothieInput.type) {
            case IngredientType.APPLE_JUICE:
                this.smoothie.appleJuiceWeight = smoothieInput.weight;
                break;
            case IngredientType.YOGURT:
                this.smoothie.yogurtWeight = smoothieInput.weight;
                break;
            case IngredientType.FROZEN_FRUIT:
                this.smoothie.frozenFruitWeight = smoothieInput.weight;
                break;
            default:
                throw new Error("Invalid ingredient type");
        }
        this.updateSmoothie();
    }

    setNumDrinks(numDrinks: number): void {
        this.smoothie.numDrinks = numDrinks;
        this.updateSmoothie();
    }

    protected readonly TagType = TagType;
}
