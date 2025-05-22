package org.theoliverlear.communication.request;

import lombok.Data;

@Data
public class SmoothieRequest {
    private int appleJuiceWeight;
    private int yogurtWeight;
    private int frozenFruitWeight;
    private int numDrinks;

    public SmoothieRequest() {
        this.appleJuiceWeight = 0;
        this.yogurtWeight = 0;
        this.frozenFruitWeight = 0;
        this.numDrinks = 2;
    }
    public SmoothieRequest(int appleJuiceWeight, int yogurtWeight, int frozenFruitWeight, int numDrinks) {
        this.appleJuiceWeight = appleJuiceWeight;
        this.yogurtWeight = yogurtWeight;
        this.frozenFruitWeight = frozenFruitWeight;
        this.numDrinks = numDrinks;
    }
}
