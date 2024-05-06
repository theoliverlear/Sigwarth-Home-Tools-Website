package org.theoliverlear.communication;

import lombok.Data;

@Data
public class SmoothieRequest {
    int appleJuiceWeight;
    int yogurtWeight;
    int frozenFruitWeight;
    int numDrinks;
    public SmoothieRequest(int appleJuiceWeight, int yogurtWeight, int frozenFruitWeight, int numDrinks) {
        this.appleJuiceWeight = appleJuiceWeight;
        this.yogurtWeight = yogurtWeight;
        this.frozenFruitWeight = frozenFruitWeight;
        this.numDrinks = numDrinks;
    }
}
