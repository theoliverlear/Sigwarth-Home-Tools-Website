package org.theoliverlear.model;

public class CarbCalculator {
    public static double calculateCarbs(double weightUnits, double servingWeight, double carbsPerServing) {
        if (weightUnits != 0 && servingWeight != 0 && carbsPerServing != 0) {
            return Math.ceil((weightUnits / servingWeight) * carbsPerServing);
        } else {
            return 0;
        }
    }
    // TODO: Add feature where you can scan the box
}
