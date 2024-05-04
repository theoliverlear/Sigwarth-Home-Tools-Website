package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================
import org.theoliverlear.model.codecommenter.WeightStatus;

public class FrozenFruit extends SmoothieItem {
    //============================-Constants-=================================
    public static final int EXPECTED_PERCENTAGE = 34;
    //===========================-Constructors-===============================
    public FrozenFruit(int weight) {
        super("Frozen Fruit", weight);
    }
    //============================-Overrides-=================================

    //-------------------------Get-Weight-Status------------------------------
    @Override
    public WeightStatus getWeightStatus(int currentPercentage) {
        double ratio = (double) currentPercentage / (double) EXPECTED_PERCENTAGE;
        return WeightStatus.fromRatio(ratio);
    }
}
