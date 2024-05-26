// TODO: Auto-copy to clipboard option, Image detection
import {loadPage, onlyPositiveNumbers} from "./globalScript.js";

let carbInputs: HTMLCollectionOf<Element> = document.getElementsByClassName("carb-input");
let servingWeightInputs: HTMLCollectionOf<Element> = document.getElementsByClassName("serving-size");
let unitsMeasuredInputs: HTMLCollectionOf<Element> = document.getElementsByClassName("units-measured");
let carbsPerServingInputs: HTMLCollectionOf<Element> = document.getElementsByClassName("carbs-per-serving");
let carbOutputTitleDivInputs: HTMLCollectionOf<Element> = document.getElementsByClassName("carb-output-title-div");
let itemCarbTotalTexts: HTMLCollectionOf<Element> = document.getElementsByClassName("item-carb-total-text");
let carbItemsTotalDiv: HTMLElement = document.getElementById("carb-items-total-div");
let carbInputWithOutputs: HTMLCollectionOf<Element> = document.getElementsByClassName("carb-input-with-output");
let totalCarbsText: HTMLElement = document.getElementById("total-carbs-text");
let carbCounterSection: HTMLElement = document.getElementById("carb-counter-section");
let carbItemsContainer: HTMLElement = document.getElementById("carb-items-container");

let addItemButton: HTMLElement = document.getElementById("add-item-button");
let removeItemButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("remove-item-button");


function addItemSequence(): void {
    addItemToPage();
    updateItemNumbers();
}
function addItemToPage(): void {
    let carbInputWithOutput: HTMLDivElement = document.createElement("div");
    carbInputWithOutput.classList.add("carb-input-with-output");
    carbInputWithOutput.innerHTML = getCarbItemHtml(carbInputWithOutputs.length + 1);
    carbItemsContainer.appendChild(carbInputWithOutput);
    attachRemoveItemListeners();
    attachCarbInputListeners();
    updateTotalCarbs();
}
function limitInput(inputElement: HTMLElement): void {
    if (Number((inputElement as HTMLInputElement).value) > 10000) {
        (inputElement as HTMLInputElement).value = String(10000);
    }
}
function getCarbItemHtml(itemNumber: number = 2): string {
    return `
            <div class="carb-input-container" id="carb-item-${itemNumber}">
                <div class="item-number-div">
                    <h2 class="item-number-text">
                        Item #${itemNumber}
                    </h2>
                </div>
                <div class="carb-input-with-title">
                    <div class="carb-input-title">
                        <h3 class="carb-input-title-text">
                            Units to a Serving
                        </h3>
                    </div>
                    <div class="carb-input-div">
                        <input type="tel" min="0" class="carb-input serving-size">
                    </div>
                </div>
                <div class="carb-input-with-title">
                    <div class="carb-input-title">
                        <h3 class="carb-input-title-text">
                            Units Measured
                        </h3>
                    </div>
                    <div class="carb-input-div">
                        <input min="0" type="tel" class="carb-input units-measured">
                    </div>
                </div>
                <div class="carb-input-with-title">
                    <div class="carb-input-title">
                        <h3 class="carb-input-title-text">
                            Carbs per Serving
                        </h3>
                    </div>
                    <div class="carb-input-div">
                        <input type="tel" min="0" class="carb-input carbs-per-serving">
                    </div>
                </div>
            </div>
            <div class="small-button remove-item-button">
                <h4 class="button-text">
                    Remove Item
                </h4>
            </div>
            <hr />
            <div class="carb-output-container">
                <div class="carb-output-title-div">
                    <h3 class="carb-output-title-text">
                        Item's Carbs: <span class="item-carb-total-text">0</span>
                    </h3>
                </div>
            </div>
            <hr />
    `;
}

function removeSequence(): void {
    let itemNumber: string = this.parentElement.id.split("-")[2];
    removeFromPage(this);
    updateItemNumbers();
    updateTotalCarbs();
}
function attachRemoveItemListeners(): void {
    Array.from(removeItemButtons).forEach((buttonElement: Element): void => {
        buttonElement.addEventListener("click", removeSequence);
    });
}

function removeFromPage(element: Element): void {
    element.parentElement.remove();
}
function updateItemNumbers(): void {
    let carbInputsDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("carb-input-with-output");
    Array.from(carbInputsDivs).forEach((div: Element, index: number): void => {
        div.children[0].id = `carb-item-${index + 1}`;
        (div.children[0].children[0].children[0] as HTMLElement).innerText = `Item #${index + 1}`;
    });
}

function updateTotalCarbs(): void {
    let totalCarbs: number = 0;
    Array.from(itemCarbTotalTexts).forEach((textElement: Element): void => {
        if (Number.isNaN((textElement as HTMLElement).innerText)) {
            totalCarbs += 0;
        } else {
            totalCarbs += parseInt((textElement as HTMLElement).innerText);
        }
    });
    totalCarbsText.innerText = String(totalCarbs);
}
function getFromParent(element: HTMLElement, inputClassName: string, getValue = true): number | Element {
    if (getValue) {
        return Number((element.parentElement.parentElement.parentElement.getElementsByClassName(inputClassName)[0] as HTMLInputElement).value);
    } else {
        return element.parentElement.parentElement.parentElement.getElementsByClassName(inputClassName)[0];
    }
}
async function updateItemCarbCount(element: Element,
                                   servingWeight: number | Element,
                                   unitsMeasured: number | Element,
                                   carbsPerServing: number | Element): Promise<void> {
    let itemCarbTotalText: number | Element = getFromParent(element.parentElement, "item-carb-total-text", false);
    let carbsOutput: number = await getItemCarbCount(servingWeight, unitsMeasured, carbsPerServing);
    (itemCarbTotalText as HTMLElement).innerText = String(carbsOutput);
    updateTotalCarbs();
}
function updateSequence(): void {
    limitInput(this);
    let itemNumber = this.parentElement.parentElement.parentElement.id.split("-")[2];
    let servingWeight: number | Element = getFromParent(this, "serving-size");
    let unitsMeasured: number | Element = getFromParent(this, "units-measured");
    let carbsPerServing: number | Element = getFromParent(this, "carbs-per-serving");
    updateItemCarbCount(this, servingWeight, unitsMeasured, carbsPerServing).then(() => {
        updateTotalCarbs();
    });
}
async function getItemCarbCount(servingWeight: number | Element,
                                unitsMeasured: number | Element,
                                carbsPerServing: number | Element): Promise<number> {
    let response = await fetch("/carb-counter/count", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            servingWeight: servingWeight,
            unitsMeasured: unitsMeasured,
            carbsPerServing: carbsPerServing
        })
    });
    let responseData = await response.json();
    return Number(responseData.totalCarbs);
}
function attachCarbInputListeners(): void {
    Array.from(carbInputs).forEach((inputElement: Element): void => {
        inputElement.addEventListener("input", updateSequence);
        inputElement.addEventListener("keypress", onlyPositiveNumbers);
    });
}
//=============================-Event-Listeners-==============================
if (loadPage(document.body, "carb-counter")) {
    Array.from(carbInputs).forEach((inputElement: Element): void => {
        inputElement.addEventListener("input", updateSequence);
        inputElement.addEventListener("keypress", onlyPositiveNumbers);
    });
    addItemButton.addEventListener("click", addItemSequence);
    Array.from(removeItemButtons).forEach((buttonElement: Element): void => {
        buttonElement.addEventListener("click", removeSequence);
    });
}