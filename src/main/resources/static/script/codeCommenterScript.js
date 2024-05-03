import { onlyPositiveNumbers } from "./globalScript.js";

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
let commentInputs = document.getElementsByClassName('comment-input');
Array.from(codeHeaderTypeChoices).forEach(choice => {
    choice.addEventListener('click', changeHeadingType);
});
function changeHeadingType() {
    currentTypeChosenCode.innerText = this.textContent.trim();
    sendCodeToServer();
}
let headingTextInput = document.getElementById('heading-text-input');
let indentationInput = document.getElementById('indentation-input');
indentationInput.addEventListener('keypress', onlyPositiveNumbers);

function limitIndent() {
    let value = normalizeInteger(indentationInput.value);
    if (value > 5) {
        indentationInput.value = 5;
    }
    if (value < 0) {
        indentationInput.value = 0;
    }
}

function limitLength() {
    let currentIndentation = normalizeInteger(indentationInput.value);
    let adjustedLength = adjustForIndentation(currentIndentation);
    let value = headingTextInput.value;
    if (value.length > adjustedLength) {
        headingTextInput.value = value.substring(0, adjustedLength);
    }
}
headingTextInput.addEventListener('input', headingTextSequence);
function headingTextSequence() {
    limitLength();
    sendCodeToServer();
}
function adjustForIndentation(indentation) {
    let adjustedLength = 50 - (indentation * 4);
    return adjustedLength;
}
function headingContentToName(textContent) {
    textContent = textContent.trim();
    switch (textContent) {
        case '//--------Heading--------':
            return 'THIN';
        case '//=======-Heading-=======':
            return 'THICK';
        case '<!--------Heading------->':
            return 'HTML';
        case '#---------Heading--------':
            return 'THIN_HASH';
        case '#========-Heading-=======':
            return 'THICK_HASH';
        case '/*--------Heading------*/':
            return 'CSS';
    }
}
function normalizeInteger(value) {
    value = parseInt(value);
    if (isNaN(value)) {
        return 0;
    }
    return value;
}
function sendCodeToServer() {
    let headingType = headingContentToName(currentTypeChosenCode.textContent);
    let headingText = headingTextInput.value;
    let indentation = normalizeInteger(indentationInput.value);
    fetch('/code-commenter/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type: headingType,
            textContent: headingText,
            indentLevel: indentation
        })
    }).then(response => {
        return response.text();
    }).then(codeHeading => {
        receiveCodeFromServer(codeHeading);
    }).catch(error => {
        console.error('Error: ', error);
    });
}
function receiveCodeFromServer(codeHeading) {
    generatedCommentText.innerText = codeHeading;
}
function indentationSequence() {
    limitIndent();
    limitLength();
    sendCodeToServer();
}
indentationInput.addEventListener('input', indentationSequence);