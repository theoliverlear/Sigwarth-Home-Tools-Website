package org.theoliverlear.communication.response;

import lombok.Data;

@Data
public class SaladResponse {
    private int lettuceGrams;
    private int pepperoniGrams;
    private int cheeseGrams;
    private int croutonsGrams;
    private int dressingGrams;
    private int carbs;
    public SaladResponse(int lettuceGrams,
                         int pepperoniGrams,
                         int cheeseGrams,
                         int croutonsGrams,
                         int dressingGrams,
                         int carbs) {
        this.lettuceGrams = lettuceGrams;
        this.pepperoniGrams = pepperoniGrams;
        this.cheeseGrams = cheeseGrams;
        this.croutonsGrams = croutonsGrams;
        this.dressingGrams = dressingGrams;
        this.carbs = carbs;
    }
}