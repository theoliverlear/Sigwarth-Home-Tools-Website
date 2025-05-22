export type SmoothieIngredient = {
    type: 'Apple Juice' | 'Yogurt' | 'Frozen Fruit',
    weight: number,
    percentage: number,
};

export type Smoothie = {
    appleJuiceWeight: number,
    yogurtWeight: number,
    frozenFruitWeight: number,
    numDrinks: number,

    smoothieStatus: string,
    appleJuiceStatus: string,
    frozenFruitStatus: string,
    yogurtStatus: string,
    appleJuicePercentage: number,
    yogurtPercentage: number,
    frozenFruitPercentage: number,
    carbsPerDrink: number,
}

export type SmoothieRequest = {
    appleJuiceWeight: number,
    yogurtWeight: number,
    frozenFruitWeight: number,
    numDrinks: number,
};

export type SmoothieResponse = {
    smoothieStatus: string,
    appleJuiceStatus: string,
    yogurtStatus: string,
    frozenFruitStatus: string,
    appleJuicePercentage: number,
    yogurtPercentage: number,
    frozenFruitPercentage: number,
    carbsPerDrink: number,
}