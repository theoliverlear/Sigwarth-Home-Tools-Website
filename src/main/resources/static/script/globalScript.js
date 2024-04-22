window.onload = function() {
    let images = document.getElementsByTagName('img');
    for (let image of images) {
        image.addEventListener('dragstart', function(event) {
            event.preventDefault();
        });
    }
}