import {onlyPositiveNumbers} from "./globalScript.js";

let appleJuiceInput = document.getElementById('apple-juice-input');
let yogurtInput = document.getElementById('yogurt-input');
let frozenFruitInput = document.getElementById('frozen-fruit-input');
let smoothieInputs = document.getElementsByClassName('smoothie-input');

let smoothieStatusText = document.getElementById('smoothie-status-text');
let appleJuiceOutput = document.getElementById('apple-juice-output');
let yogurtOutput = document.getElementById('yogurt-output');
let frozenFruitOutput = document.getElementById('frozen-fruit-output');
let numDrinksInput = document.getElementById('num-drink-input');

let appleJuicePercentageText = document.getElementById('apple-juice-percentage-text');
let yogurtPercentageText = document.getElementById('yogurt-percentage-text');
let frozenFruitPercentageText = document.getElementById('frozen-fruit-percentage-text');
let carbOutput = document.getElementById('total-carb-output');
Array.from(smoothieInputs).forEach(input => {
    input.addEventListener('input', updateSmoothie);
    input.addEventListener('keypress', onlyPositiveNumbers);
    input.addEventListener('input', limitInput);
});
function limitInput() {
    if (this.value > 10000) {
        this.value = 10000;
    }
    updateSmoothie();
}
function updateSmoothie() {
    fetch('/smoothie/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            appleJuiceWeight: appleJuiceInput.value,
            yogurtWeight: yogurtInput.value,
            frozenFruitWeight: frozenFruitInput.value,
            numDrinks: numDrinksInput.value
        })
    }).then(response => response.json())
        .then(jsonData => {
            smoothieStatusText.innerText = jsonData.smoothieStatus;
            appleJuiceOutput.innerText = jsonData.appleJuiceStatus;
            yogurtOutput.innerText = jsonData.yogurtStatus;
            frozenFruitOutput.innerText = jsonData.frozenFruitStatus;
            appleJuicePercentageText.innerText = jsonData.appleJuicePercentage;
            yogurtPercentageText.innerText = jsonData.yogurtPercentage;
            frozenFruitPercentageText.innerText = jsonData.frozenFruitPercentage;
            carbOutput.innerText = jsonData.carbsPerDrink;
        });
}