package org.theoliverlear.communication.response;

import lombok.Data;
import org.theoliverlear.model.smoothie.Smoothie;

@Data
public class SmoothieResponse {
    private String smoothieStatus;
    private String appleJuiceStatus;
    private String yogurtStatus;
    private String frozenFruitStatus;
    private int appleJuicePercentage;
    private int yogurtPercentage;
    private int frozenFruitPercentage;
    private int carbsPerDrink;
    public SmoothieResponse(String smoothieStatus, String appleJuiceStatus, String yogurtStatus, String frozenFruitStatus,
                            int appleJuicePercentage, int yogurtPercentage, int frozenFruitPercentage, int carbsPerDrink) {
        this.smoothieStatus = smoothieStatus;
        this.appleJuiceStatus = appleJuiceStatus;
        this.yogurtStatus = yogurtStatus;
        this.frozenFruitStatus = frozenFruitStatus;
        this.appleJuicePercentage = appleJuicePercentage;
        this.yogurtPercentage = yogurtPercentage;
        this.frozenFruitPercentage = frozenFruitPercentage;
        this.carbsPerDrink = carbsPerDrink;
    }
    public SmoothieResponse(Smoothie smoothie) {
        this.smoothieStatus = smoothie.getSmoothieStatus().SMOOTHIE_STATUS;
        this.appleJuiceStatus = smoothie.getAppleJuiceWeightStatus().WEIGHT_STATUS;
        this.yogurtStatus = smoothie.getYogurtWeightStatus().WEIGHT_STATUS;
        this.frozenFruitStatus = smoothie.getFrozenFruitWeightStatus().WEIGHT_STATUS;
        this.appleJuicePercentage = smoothie.getAppleJuicePercentage();
        this.yogurtPercentage = smoothie.getYogurtPercentage();
        this.frozenFruitPercentage = smoothie.getFrozenFruitPercentage();
        this.carbsPerDrink = smoothie.getCarbsPerDrink();
    }
}
