window.onload = function() {
    let images = document.getElementsByTagName('img');
    for (let image of images) {
        image.addEventListener('dragstart', function(event) {
            event.preventDefault();
        });
    }
}
function onlyPositiveNumbers(event) {
    let charKey = String.fromCharCode(event.which);
    if (!/[\d.]/.test(charKey)) {
        event.preventDefault();
    }
}
function removeTrailingZeros(value) {
    for (let i = value.length - 1; i >= 0; i--) {
        if (value[i] === '0') {
            value = value.slice(i + 1);
        } else {
            break;
        }
    }
}
export { onlyPositiveNumbers };
export { removeTrailingZeros };