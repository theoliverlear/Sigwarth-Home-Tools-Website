package org.theoliverlear.model.salad;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;
import org.theoliverlear.model.carbcounter.CarbItem;

@Getter
@Setter
@Component
public class Salad {
    public static final double PEPPERONI_PERCENTAGE = 0.263;
    public static final double CHEESE_PERCENTAGE = 0.272;
    public static final double CROUTONS_PERCENTAGE = 0.404;
    public static final double DRESSING_PERCENTAGE = 0.421;
    private static final CarbItem croutonCarbs = new CarbItem(7, 0, 5);

    private int lettuceGrams;
    private int pepperoniGrams;
    private int cheeseGrams;
    private int croutonsGrams;
    private int dressingGrams;

    public Salad() {
        this.lettuceGrams = 0;
        this.pepperoniGrams = 0;
        this.cheeseGrams = 0;
        this.croutonsGrams = 0;
        this.dressingGrams = 0;
    }

    public Salad(int lettuceGrams) {
        this.lettuceGrams = lettuceGrams;
        this.initSaladFromLettuce(lettuceGrams);
    }

    public void initSaladFromLettuce(int saladGrams) {
        this.pepperoniGrams = (int) (saladGrams * PEPPERONI_PERCENTAGE);
        this.cheeseGrams = (int) (saladGrams * CHEESE_PERCENTAGE);
        this.croutonsGrams = (int) (saladGrams * CROUTONS_PERCENTAGE);
        this.dressingGrams = (int) (saladGrams * DRESSING_PERCENTAGE);
    }

    public int getCarbs() {
        croutonCarbs.setWeightUnits(this.croutonsGrams);
        croutonCarbs.calculateCarbs();
        return croutonCarbs.getCarbs();
    }
}
