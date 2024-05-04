package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================
import org.theoliverlear.model.codecommenter.WeightStatus;

public class Yogurt extends SmoothieItem {
    //============================-Constants-=================================
    public static final int EXPECTED_PERCENTAGE = 22;
    //===========================-Constructors-===============================
    public Yogurt(int weight) {
        super("Yogurt", weight);
    }
    //============================-Overrides-=================================

    //-------------------------Get-Weight-Status------------------------------
    @Override
    public WeightStatus getWeightStatus(int currentPercentage) {
        double ratio = (double) currentPercentage / (double) EXPECTED_PERCENTAGE;
        return WeightStatus.fromRatio(ratio);
    }
}
