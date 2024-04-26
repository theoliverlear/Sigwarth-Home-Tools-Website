package org.theoliverlear.communication;

import lombok.Data;

@Data
public class CarbCounterRequest {
    double unitsPerServing;
    double unitsMeasured;
    double carbsPerServing;
    public CarbCounterRequest(double unitsPerServing, double unitsMeasured, double carbsPerServing) {
        this.unitsPerServing = unitsPerServing;
        this.unitsMeasured = unitsMeasured;
        this.carbsPerServing = carbsPerServing;
    }
}
