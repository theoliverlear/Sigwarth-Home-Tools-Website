export type SaladIngredient = {
    type: 'Lettuce' | 'Pepperoni' | 'Cheese' | 'Croutons' | 'Dressing';
    grams: number;
}

export type Lettuce = {
    lettuceGrams: number;
}

export type Salad = {
    lettuceGrams: number;
    pepperoniGrams: number;
    cheeseGrams: number;
    croutonsGrams: number;
    dressingGrams: number;
    carbs: number;
};