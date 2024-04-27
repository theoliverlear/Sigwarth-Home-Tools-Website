// TODO: Auto-copy to clipboard option, Image detection
let carbInputs = document.getElementsByClassName("carb-input");
let servingSize = document.getElementById("serving-size");
let unitsMeasured = document.getElementById("units-measured");
let carbsPerServing = document.getElementById("carbs-per-serving");
let carbOutputTitleDiv = document.getElementById("carb-output-title-div");
function updateCarbCount() {
    fetch("/carbcounter/count", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            unitsPerServing: servingSize.value,
            unitsMeasured: unitsMeasured.value,
            carbsPerServing: carbsPerServing.value
        })
    }).then(async response => {
        carbOutputTitleDiv.innerHTML = await response.text();
    });
}
Array.from(carbInputs).forEach(input => {
    input.addEventListener("input", updateCarbCount);
});