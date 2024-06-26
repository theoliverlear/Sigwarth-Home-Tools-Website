package org.theoliverlear.model.smoothie;

public enum WeightStatus {
    //============================-Variables-=================================
    NO_WEIGHT("No Weight"),
    UNDERWEIGHT("Underweight"),
    GOOD_WEIGHT("Good Weight"),
    OVERWEIGHT("Overweight");
    //============================-Constants-=================================
    public final String WEIGHT_STATUS;
    //============================-Variables-=================================
    WeightStatus(String weightStatus) {
        this.WEIGHT_STATUS = weightStatus;
    }
    //=============================-Methods-==================================

    //-----------------------------From-Ratio---------------------------------
    public static WeightStatus fromRatio(double ratio) {
        if (ratio == 0.0) {
            return NO_WEIGHT;
        } else if (ratio < 0.9) {
            return UNDERWEIGHT;
        } else if (ratio > 1.1) {
            return OVERWEIGHT;
        } else {
            return GOOD_WEIGHT;
        }
    }
}
