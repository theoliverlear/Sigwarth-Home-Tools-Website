window.onload = function(): void {
    let images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
    Array.from(images).forEach((image: HTMLImageElement): void => {
        image.addEventListener('dragstart', function(event: DragEvent): void {
            event.preventDefault();
        });
    });
}
function onlyPositiveNumbers(event: KeyboardEvent): void {
    let charKey: string = String.fromCharCode(event.which);
    if (!/[\d.]/.test(charKey)) {
        event.preventDefault();
    }
}
function removeTrailingZeros(value: string): void {
    for (let i: number = value.length - 1; i >= 0; i--) {
        if (value[i] === '0') {
            value = value.slice(i + 1);
        } else {
            break;
        }
    }
}
export { onlyPositiveNumbers };
export { removeTrailingZeros };
//-------------------------------Load-Page------------------------------------
function loadPage(bodyElement: HTMLElement, pageName: string): boolean {
    return bodyElement.getAttribute('data-page') === pageName;
}
export { loadPage };