package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================
import org.theoliverlear.model.codecommenter.WeightStatus;

public class AppleJuice extends SmoothieItem {
    //============================-Constants-=================================
    public static final int EXPECTED_PERCENTAGE = 44;
    //===========================-Constructors-===============================
    public AppleJuice(int weight) {
        super("Apple Juice", weight);
    }
    //============================-Overrides-=================================

    //-------------------------Get-Weight-Status------------------------------
    @Override
    public WeightStatus getWeightStatus(int currentPercentage) {
        double ratio = (double) currentPercentage / (double) EXPECTED_PERCENTAGE;
        return WeightStatus.fromRatio(ratio);
    }
}
