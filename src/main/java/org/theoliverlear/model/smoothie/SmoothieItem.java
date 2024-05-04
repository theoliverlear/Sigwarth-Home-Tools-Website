package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.model.codecommenter.WeightStatus;

@Getter
@Setter
public abstract class SmoothieItem {
    //============================-Variables-=================================
    private String name;
    private int weight;
    //============================-Constants-=================================

    //===========================-Constructors-===============================
    public SmoothieItem() {
        this.name = "";
        this.weight = 0;
    }
    public SmoothieItem(String name) {
        this.name = name;
        this.weight = 0;
    }
    public SmoothieItem(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }
    //=============================-Methods-==================================

    //-------------------------Get-Weight-Status------------------------------
    public abstract WeightStatus getWeightStatus(int currentPercentage);
}
