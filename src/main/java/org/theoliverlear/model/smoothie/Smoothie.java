package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.model.codecommenter.WeightStatus;

@Getter
@Setter
public class Smoothie {
    //============================-Variables-=================================
    private AppleJuice appleJuice;
    private Yogurt yogurt;
    private FrozenFruit frozenFruit;
    //============================-Constants-=================================
    private static final int DEFAULT_WEIGHT = 0;
    //===========================-Constructors-===============================
    public Smoothie() {
        this.appleJuice = new AppleJuice(DEFAULT_WEIGHT);
        this.yogurt = new Yogurt(DEFAULT_WEIGHT);
        this.frozenFruit = new FrozenFruit(DEFAULT_WEIGHT);
    }
    public Smoothie(AppleJuice appleJuice, Yogurt yogurt, FrozenFruit frozenFruit) {
        this.appleJuice = appleJuice;
        this.yogurt = yogurt;
        this.frozenFruit = frozenFruit;
    }
    public Smoothie(int appleJuiceWeight, int yogurtWeight, int frozenFruitWeight) {
        this.appleJuice = new AppleJuice(appleJuiceWeight);
        this.yogurt = new Yogurt(yogurtWeight);
        this.frozenFruit = new FrozenFruit(frozenFruitWeight);
    }
    //=============================-Methods-==================================

    //--------------------------Get-Total-Weight------------------------------
    public int getTotalWeight() {
        return this.appleJuice.getWeight() + this.yogurt.getWeight() +
                this.frozenFruit.getWeight();
    }
    //---------------------Get-Apple-Juice-Percentage-------------------------
    public int getAppleJuicePercentage() {
        return (this.appleJuice.getWeight() * 100) / this.getTotalWeight();
    }
    //-----------------------Get-Yogurt-Percentage----------------------------
    public int getYogurtPercentage() {
        return (this.yogurt.getWeight() * 100) / this.getTotalWeight();
    }
    //--------------------Get-Frozen-Fruit-Percentage-------------------------
    public int getFrozenFruitPercentage() {
        return (this.frozenFruit.getWeight() * 100) / this.getTotalWeight();
    }
    //-------------------Get-Apple-Juice-Weight-Status------------------------
    public WeightStatus getAppleJuiceWeightStatus() {
        return this.appleJuice.getWeightStatus(this.getAppleJuicePercentage());
    }
    //---------------------Get-Yogurt-Weight-Status---------------------------
    public WeightStatus getYogurtWeightStatus() {
        return this.yogurt.getWeightStatus(this.getYogurtPercentage());
    }
    //------------------Get-Frozen-Fruit-Weight-Status------------------------
    public WeightStatus getFrozenFruitWeightStatus() {
        return this.frozenFruit.getWeightStatus(this.getFrozenFruitPercentage());
    }
}
