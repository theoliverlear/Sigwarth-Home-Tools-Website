package org.theoliverlear.model.smoothie;

public enum SmoothieStatus {
    //============================-Variables-=================================
    NOT_BUILT_SMOOTHIE("No Smoothie Built"),
    GOOD_SMOOTHIE("Good Smoothie"),
    BAD_SMOOTHIE("Bad Smoothie");
    //============================-Constants-=================================
    public final String SMOOTHIE_STATUS;
    //============================-Variables-=================================
    SmoothieStatus(String smoothieStatus) {
        this.SMOOTHIE_STATUS = smoothieStatus;
    }
    //=============================-Methods-==================================

    //-----------------------------From-Ratio---------------------------------
    public static SmoothieStatus fromRatio(double ratio) {
        if (ratio == 0.0) {
            return NOT_BUILT_SMOOTHIE;
        } else if (ratio < 0.9 || ratio > 1.1) {
            return BAD_SMOOTHIE;
        } else {
            return GOOD_SMOOTHIE;
        }
    }
    public static SmoothieStatus fromRatioExceptGood(double ratio) {
        if (ratio == 0.0) {
            return NOT_BUILT_SMOOTHIE;
        } else {
            return BAD_SMOOTHIE;
        }
    }
}
