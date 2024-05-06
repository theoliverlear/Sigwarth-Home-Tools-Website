package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================

import org.theoliverlear.model.carbcounter.CarbItem;

public class Yogurt extends SmoothieItem {
    //============================-Variables-=================================
    private CarbItem carbItem;
    //============================-Constants-=================================
    public static final int EXPECTED_PERCENTAGE = 22;
    public static final int SERVING_WEIGHT = 170;
    public static final int SERVING_CARBS = 10;
    //===========================-Constructors-===============================
    public Yogurt(int weight) {
        super("Yogurt", weight);
        this.carbItem = new CarbItem(SERVING_WEIGHT, this.getWeight(), SERVING_CARBS);
    }
    //============================-Overrides-=================================

    //-------------------------Get-Weight-Status------------------------------
    @Override
    public WeightStatus getWeightStatus(int currentPercentage) {
        double ratio = (double) currentPercentage / (double) EXPECTED_PERCENTAGE;
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
