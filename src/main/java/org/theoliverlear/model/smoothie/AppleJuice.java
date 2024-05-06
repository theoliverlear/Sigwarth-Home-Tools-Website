package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================

import org.theoliverlear.model.carbcounter.CarbItem;

public class AppleJuice extends SmoothieItem {
    //============================-Variables-=================================
    private CarbItem carbItem;
    //============================-Constants-=================================
    public static final int EXPECTED_PERCENTAGE = 34;
    public static final int SERVING_WEIGHT = 240;
    public static final int SERVING_CARBS = 16;
    //===========================-Constructors-===============================
    public AppleJuice(int weight) {
        super("Apple Juice", weight);
        this.carbItem = new CarbItem(SERVING_WEIGHT, this.getWeight(), SERVING_CARBS);
    }
    //============================-Overrides-=================================

    //-------------------------Get-Weight-Status------------------------------
    @Override
    public WeightStatus getWeightStatus(int currentPercentage) {
        double ratio = this.getWeightRatio(currentPercentage);
        return WeightStatus.fromRatio(ratio);
    }
    //-------------------------Get-Weight-Ratio-------------------------------
    @Override
    public double getWeightRatio(int currentPercentage) {
        return (double) currentPercentage / (double) EXPECTED_PERCENTAGE;
    }
    //-----------------------------Get-Carbs----------------------------------
    @Override
    public int getCarbs() {
        this.carbItem.calculateCarbs();
        return this.carbItem.getCarbs();
    }
    //-----------------------------Set-Weight---------------------------------
    @Override
    public void setWeight(int weight) {
        super.setWeight(weight);
        this.carbItem.setWeightUnits(this.getWeight());
    }
}
