import { Smoothie } from "../models/smoothie/types";
import {
    SmoothieStatus
} from "../components/elements/smoothie-status/models/SmoothieStatus";
import {
    WeightStatus
} from "../components/elements/smoothie-ingredient/models/WeightStatus";

export const defaultSmoothie: Smoothie = {
    appleJuiceWeight: 0,
    yogurtWeight: 0,
    frozenFruitWeight: 0,
    numDrinks: 2,

    smoothieStatus: SmoothieStatus.NO_SMOOTHIE_BUILT,
    appleJuiceStatus: WeightStatus.NO_WEIGHT,
    yogurtStatus: WeightStatus.NO_WEIGHT,
    frozenFruitStatus: WeightStatus.NO_WEIGHT,
    appleJuicePercentage: 0,
    yogurtPercentage: 0,
    frozenFruitPercentage: 0,
    carbsPerDrink: 0,
}