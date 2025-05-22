package org.theoliverlear.communication.request;

import lombok.Data;

@Data
public class CarbItemRequest {
    double servingWeight;
    double unitsMeasured;
    double carbsPerServing;
    public CarbItemRequest(double servingWeight, double unitsMeasured, double carbsPerServing) {
        this.servingWeight = servingWeight;
        this.unitsMeasured = unitsMeasured;
        this.carbsPerServing = carbsPerServing;
    }
}
