//=================================-Imports-==================================
import {loadPage, onlyPositiveNumbers} from "./globalScript.js";
//================================-Variables-=================================
let appleJuiceInput: HTMLElement = document.getElementById('apple-juice-input');
let yogurtInput: HTMLElement = document.getElementById('yogurt-input');
let frozenFruitInput: HTMLElement = document.getElementById('frozen-fruit-input');
let smoothieInputs: HTMLCollectionOf<Element> = document.getElementsByClassName('smoothie-input');

let smoothieStatusText: HTMLElement = document.getElementById('smoothie-status-text');
let appleJuiceOutput: HTMLElement = document.getElementById('apple-juice-output');
let yogurtOutput: HTMLElement = document.getElementById('yogurt-output');
let frozenFruitOutput: HTMLElement = document.getElementById('frozen-fruit-output');
let numDrinksInput: HTMLElement = document.getElementById('num-drink-input');

let appleJuicePercentageText: HTMLElement = document.getElementById('apple-juice-percentage-text');
let yogurtPercentageText: HTMLElement = document.getElementById('yogurt-percentage-text');
let frozenFruitPercentageText: HTMLElement = document.getElementById('frozen-fruit-percentage-text');
let carbOutput: HTMLElement = document.getElementById('total-carb-output');
//================================-Functions-=================================

//--------------------------------Limit-Input---------------------------------
function limitInput(): void {
    if (this.value > 10000) {
        this.value = 10000;
    }
    updateSmoothie();
}
function updateSmoothie(): void {
    fetch('/smoothie/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            appleJuiceWeight: (appleJuiceInput as HTMLInputElement).value,
            yogurtWeight: (yogurtInput as HTMLInputElement).value,
            frozenFruitWeight: (frozenFruitInput as HTMLInputElement).value,
            numDrinks: (numDrinksInput as HTMLInputElement).value
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
//=============================-Event-Listeners-==============================
if (loadPage(document.body, 'smoothie')) {
    Array.from(smoothieInputs).forEach((inputElement: Element): void => {
        inputElement.addEventListener('input', updateSmoothie);
        inputElement.addEventListener('keypress', onlyPositiveNumbers);
        inputElement.addEventListener('input', limitInput);
    });
}
