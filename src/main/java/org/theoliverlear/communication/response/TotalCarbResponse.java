package org.theoliverlear.communication.response;

import lombok.Data;

@Data
public class TotalCarbResponse {
    int totalCarbs;
    public TotalCarbResponse(int totalCarbs) {
        this.totalCarbs = totalCarbs;
    }
}
