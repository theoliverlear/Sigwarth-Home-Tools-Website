package org.theoliverlear.model.smoothie;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class Smoothie {
    //============================-Variables-=================================
    private AppleJuice appleJuice;
    private Yogurt yogurt;
    private FrozenFruit frozenFruit;
    private int numDrinks;
    //============================-Constants-=================================
    private static final int DEFAULT_WEIGHT = 0;
    private static final int DEFAULT_NUM_DRINKS = 2;
    //===========================-Constructors-===============================
    public Smoothie() {
        this.appleJuice = new AppleJuice(DEFAULT_WEIGHT);
        this.yogurt = new Yogurt(DEFAULT_WEIGHT);
        this.frozenFruit = new FrozenFruit(DEFAULT_WEIGHT);
        this.numDrinks = DEFAULT_NUM_DRINKS;
    }
    public Smoothie(AppleJuice appleJuice, Yogurt yogurt, FrozenFruit frozenFruit) {
        this.appleJuice = appleJuice;
        this.yogurt = yogurt;
        this.frozenFruit = frozenFruit;
        this.numDrinks = DEFAULT_NUM_DRINKS;
    }
    public Smoothie(int appleJuiceWeight, int yogurtWeight, int frozenFruitWeight) {
        this.appleJuice = new AppleJuice(appleJuiceWeight);
        this.yogurt = new Yogurt(yogurtWeight);
        this.frozenFruit = new FrozenFruit(frozenFruitWeight);
        this.numDrinks = DEFAULT_NUM_DRINKS;
    }
    public Smoothie(int appleJuiceWeight, int yogurtWeight, int frozenFruitWeight, int numDrinks) {
        this.appleJuice = new AppleJuice(appleJuiceWeight);
        this.yogurt = new Yogurt(yogurtWeight);
        this.frozenFruit = new FrozenFruit(frozenFruitWeight);
        this.numDrinks = numDrinks;
    }
    public Smoothie(AppleJuice appleJuice, Yogurt yogurt, FrozenFruit frozenFruit, int numDrinks) {
        this.appleJuice = appleJuice;
        this.yogurt = yogurt;
        this.frozenFruit = frozenFruit;
        this.numDrinks = numDrinks;
    }
    //=============================-Methods-==================================

    //--------------------------Get-Total-Weight------------------------------
    public int getTotalWeight() {
        return this.appleJuice.getWeight() + this.yogurt.getWeight() +
                this.frozenFruit.getWeight();
    }
    //---------------------Get-Apple-Juice-Percentage-------------------------
    public int getAppleJuicePercentage() {
        if (this.getTotalWeight() == 0) {
            return 0;
        }
        return (this.appleJuice.getWeight() * 100) / this.getTotalWeight();
    }
    //-----------------------Get-Yogurt-Percentage----------------------------
    public int getYogurtPercentage() {
        if (this.getTotalWeight() == 0) {
            return 0;
        }
        return (this.yogurt.getWeight() * 100) / this.getTotalWeight();
    }
    //--------------------Get-Frozen-Fruit-Percentage-------------------------
    public int getFrozenFruitPercentage() {
        if (this.getTotalWeight() == 0) {
            return 0;
        }
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
    //------------------------Get-Smoothie-Status-----------------------------
    public SmoothieStatus getSmoothieStatus() {
        double appleJuiceRatio = this.appleJuice.getWeightRatio(this.getAppleJuicePercentage());
        double yogurtRatio = this.yogurt.getWeightRatio(this.getYogurtPercentage());
        double frozenFruitRatio = this.frozenFruit.getWeightRatio(this.getFrozenFruitPercentage());
        double totalRatio = (appleJuiceRatio + yogurtRatio + frozenFruitRatio) / 3;
        WeightStatus[] statuses = {this.getAppleJuiceWeightStatus(), this.getYogurtWeightStatus(),
                                   this.getFrozenFruitWeightStatus()};
        int numGoodWeights = 0;
        for (WeightStatus status : statuses) {
            if (status == WeightStatus.GOOD_WEIGHT) {
                numGoodWeights++;
            }
        }
        if (numGoodWeights >= 2) {
            return SmoothieStatus.GOOD_SMOOTHIE;
        }
        return SmoothieStatus.fromRatioExceptGood(totalRatio);
    }
    //------------------------Get-Carbs-Per-Drink-----------------------------
    public int getCarbsPerDrink() {
        if (this.numDrinks == 0) {
            return 0;
        }
        int totalCarbs = this.appleJuice.getCarbs() + this.yogurt.getCarbs() +
                         this.frozenFruit.getCarbs();
        return totalCarbs / this.numDrinks;
    }
}
