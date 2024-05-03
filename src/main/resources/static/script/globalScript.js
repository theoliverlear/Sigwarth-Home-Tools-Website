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
export { onlyPositiveNumbers };