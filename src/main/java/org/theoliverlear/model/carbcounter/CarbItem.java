package org.theoliverlear.model.carbcounter;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class CarbItem {
    private double servingWeight;
    private double weightUnits;
    private double carbsPerServing;
    private int carbs;

    public CarbItem() {
        this.servingWeight = 0;
        this.weightUnits = 0;
        this.carbsPerServing = 0;
        this.carbs = 0;
    }

    public CarbItem(double servingWeight, double weightUnitsMeasured,  double carbsPerServing) {
        this.servingWeight = servingWeight;
        this.weightUnits = weightUnitsMeasured;
        this.carbsPerServing = carbsPerServing;
        this.carbs = calculateCarbs(weightUnitsMeasured, servingWeight, carbsPerServing);

    }

    public static int calculateCarbs(double weightUnits, double servingWeight, double carbsPerServing) {
        if (weightUnits != 0 && servingWeight != 0 && carbsPerServing != 0) {
            return (int) Math.ceil((weightUnits / servingWeight) * carbsPerServing);
        } else {
            return 0;
        }
    }
    public void calculateCarbs() {
        this.carbs = calculateCarbs(this.weightUnits, this.servingWeight, this.carbsPerServing);
    }
    // TODO: Add feature where you can scan the box
    @Override
    public String toString() {
        return """
                ---------------------
                Serving Weight: %s
                Weight Units: %s
                Carbs Per Serving: %s
                Carbs: %s
                ---------------------
                """.formatted(this.servingWeight, this.weightUnits, this.carbsPerServing, this.carbs);
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj instanceof CarbItem carbItem) {
            boolean sameServingWeight = this.servingWeight == carbItem.servingWeight;
            boolean sameWeightUnits = this.weightUnits == carbItem.weightUnits;
            boolean sameCarbsPerServing = this.carbsPerServing == carbItem.carbsPerServing;
            boolean sameCarbs = this.carbs == carbItem.carbs;
            return sameServingWeight && sameWeightUnits && sameCarbsPerServing && sameCarbs;
        }
        return false;
    }
    @Override
    public int hashCode() {
        int combinedHashCode = Double.hashCode(this.servingWeight);
        combinedHashCode += Double.hashCode(this.weightUnits);
        combinedHashCode += Double.hashCode(this.carbsPerServing);
        combinedHashCode += this.carbs;
        return combinedHashCode;
    }
}
