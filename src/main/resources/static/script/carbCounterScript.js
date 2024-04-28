// TODO: Auto-copy to clipboard option, Image detection
let carbInputs = document.getElementsByClassName("carb-input");
let servingWeightInputs = document.getElementsByClassName("serving-size");
let unitsMeasuredInputs = document.getElementsByClassName("units-measured");
let carbsPerServingInputs = document.getElementsByClassName("carbs-per-serving");
let carbOutputTitleDivInputs = document.getElementsByClassName("carb-output-title-div");
let itemCarbTotalTexts = document.getElementsByClassName("item-carb-total-text");
let carbItemsTotalDiv = document.getElementById("carb-items-total-div");
let carbInputWithOutputs = document.getElementsByClassName("carb-input-with-output");
let totalCarbsText = document.getElementById("total-carbs-text");
let carbCounterSection = document.getElementById("carb-counter-section");
let carbItemsContainer = document.getElementById("carb-items-container");

let addItemButton = document.getElementById("add-item-button");
let removeItemButtons = document.getElementsByClassName("remove-item-button");

addItemButton.addEventListener("click", addItemSequence);
function addItemSequence() {
    addItemToPage();
    addItemToServer(0, 0, 0);
    updateItemNumbers();
}
function addItemToPage() {
    /*
    Create a div with empty inputs, label its id as the item number,
     */
    let carbInputWithOutput = document.createElement("div");
    carbInputWithOutput.classList.add("carb-input-with-output");
    carbInputWithOutput.innerHTML = getCarbItemHtml(carbInputWithOutputs.length + 1);
    carbItemsContainer.appendChild(carbInputWithOutput);
    attachRemoveItemListeners();
    attachCarbInputListeners();
    updateTotalCarbs();
}
addItemToServer(0, 0, 0);
function getCarbItemHtml(itemNumber = 2) {
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
function addItemToServer(servingWeight, unitsMeasured, carbsPerServing) {
    console.log("Called add item to server");
    fetch("/carb-counter/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            servingWeight: servingWeight,
            unitsMeasured: unitsMeasured,
            carbsPerServing: carbsPerServing
        })
    }).then(response => response.json()).then(responseData => {
        console.log(responseData);
    });
}
function removeItemFromServer(itemNumber) {
    fetch(`/carb-counter/remove/${itemNumber}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json()).then(responseData => {
        console.log(responseData);
    });
}
function removeSequence() {
    let itemNumber = this.parentElement.id.split("-")[2];
    console.log(itemNumber);
    removeItemFromServer(itemNumber);
    removeFromPage(this);
    updateItemNumbers();
}
function attachRemoveItemListeners() {
    Array.from(removeItemButtons).forEach(button => {
        button.addEventListener("click", removeSequence);
    });
}
Array.from(removeItemButtons).forEach(button => {
    button.addEventListener("click", removeSequence);
});
function removeFromPage(element) {
    console.log("Called remove from page");
    element.parentElement.remove();
}
function updateItemNumbers() {
    let carbInputsDivs = document.getElementsByClassName("carb-input-with-output");
    Array.from(carbInputsDivs).forEach((div, index) => {
        div.children[0].id = `carb-item-${index + 1}`;
        div.children[0].children[0].children[0].innerText = `Item #${index + 1}`;
    });
}

function updateTotalCarbs() {
    let totalCarbs = 0;
    Array.from(itemCarbTotalTexts).forEach(text => {
        if (Number.isNaN(text.innerText)) {
            totalCarbs += 0;
        } else {
            totalCarbs += parseInt(text.innerText);
        }
    });
    totalCarbsText.innerText = totalCarbs;
}
function getFromParent(element, inputClassName, getValue = true) {
    if (getValue) {
        return element.parentElement.parentElement.parentElement.getElementsByClassName(inputClassName)[0].value;
    } else {
        return element.parentElement.parentElement.parentElement.getElementsByClassName(inputClassName)[0];
    }
}
async function updateItemCarbCount(element, servingWeight, unitsMeasured, carbsPerServing) {
    let itemCarbTotalText = getFromParent(element.parentElement, "item-carb-total-text", false);
    let carbsOutput = await getItemCarbCount(servingWeight, unitsMeasured, carbsPerServing);
    console.log(itemCarbTotalText);
    itemCarbTotalText.innerText = carbsOutput;
    updateTotalCarbs();
}
function updateSequence() {
    let itemNumber = this.parentElement.parentElement.parentElement.id.split("-")[2];
    let servingWeight = getFromParent(this, "serving-size");
    let unitsMeasured = getFromParent(this, "units-measured");
    let carbsPerServing = getFromParent(this, "carbs-per-serving");
    updateItemToServer(itemNumber, servingWeight, unitsMeasured, carbsPerServing);
    updateItemCarbCount(this, servingWeight, unitsMeasured, carbsPerServing);
    updateTotalCarbs();
}
function updateItemToServer(itemNumber, servingWeight, unitsMeasured, carbsPerServing) {
    fetch(`/carb-counter/update/${itemNumber}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            servingWeight: servingWeight,
            unitsMeasured: unitsMeasured,
            carbsPerServing: carbsPerServing
        })
    }).then(response => {
        console.log(response);
    });
}
async function getItemCarbCount(servingWeight, unitsMeasured, carbsPerServing) {
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
    console.log(responseData.totalCarbs);
    return responseData.totalCarbs;
}
function attachCarbInputListeners() {
    Array.from(carbInputs).forEach(input => {
        input.addEventListener("input", updateSequence);
        input.addEventListener("keypress", onlyPositiveNumbers);
    });
}
Array.from(carbInputs).forEach(input => {
    input.addEventListener("input", updateSequence);
    input.addEventListener("keypress", onlyPositiveNumbers);
});
function onlyPositiveNumbers(event) {
    let charKey = String.fromCharCode(event.which);
    if (!/[\d.]/.test(charKey)) {
        event.preventDefault();
    }
}