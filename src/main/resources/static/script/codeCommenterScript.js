let copyToClipboardButton = document.getElementById('copy-to-clipboard-button');
let generatedCommentText = document.getElementById('generated-comment-text');
copyToClipboardButton.addEventListener('click', copyToClipboard);
function copyToClipboard() {
    navigator.clipboard.writeText(generatedCommentText.textContent);
    buttonSaysCopied();
}
function buttonSaysCopied() {
    copyToClipboardButton.children[0].textContent = 'Copied!';
    setTimeout(() => {
        copyToClipboardButton.children[0].textContent = 'Copy to Clipboard';
    }, 2000);
}
let currentTypeChosenCode = document.getElementById('current-type-chosen-code');
let codeHeaderTypeChoices = document.getElementsByClassName('header-output-option');
Array.from(codeHeaderTypeChoices).forEach(choice => {
    choice.addEventListener('click', changeCodeType);
});
function changeCodeType() {
    console.log(this.textContent);
    currentTypeChosenCode.innerText = this.textContent.trim();
}
function textContentToName(textContent) {
    textContent = textContent.trim();
    switch (textContent) {
        case '//--------Heading--------':
            return 'THIN';
        case '//=======-Heading-=======':
            return 'THICK';
        case '<!--------Heading------->'
            return 'HTML';
        case ''   
    }
}