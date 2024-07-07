import {
    loadPage,
    onlyPositiveNumbers,
    removeTrailingZeros
} from "./globalScript.js";

let copyToClipboardButton: HTMLElement = document.getElementById('copy-to-clipboard-button');
let generatedCommentText: HTMLElement = document.getElementById('generated-comment-text');
let headingTextClearButton: HTMLElement = document.getElementById('heading-text-clear-button');
let currentTypeChosenCode: HTMLElement = document.getElementById('current-type-chosen-code');
let codeHeaderTypeChoices: HTMLCollectionOf<Element> = document.getElementsByClassName('header-output-option');
let commentInputs: HTMLCollectionOf<Element> = document.getElementsByClassName('comment-input');
let headingTextInput: HTMLElement = document.getElementById('heading-text-input');
let indentationInput: HTMLElement = document.getElementById('indentation-input');

function copyToClipboard(): void {
    navigator.clipboard.writeText(generatedCommentText.textContent);
    buttonSaysCopied();
}
function buttonSaysCopied(): void {
    copyToClipboardButton.children[0].textContent = 'Copied!';
    setTimeout((): void => {
        copyToClipboardButton.children[0].textContent = 'Copy to Clipboard';
    }, 2000);
}
function changeHeadingType(): void {
    currentTypeChosenCode.innerText = this.textContent.trim();
    sendCodeToServer();
}
function limitIndent(): void {
    let value: number = normalizeInteger((indentationInput as HTMLInputElement).value);
    if (value > 5) {
        (indentationInput as HTMLInputElement).value = String(5);
    }
    if (value < 0) {
        (indentationInput as HTMLInputElement).value = String(0);
    }
}
function copyOnEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
        copyToClipboard();
    }
}
function limitLength(): void {
    let currentIndentation: number = normalizeInteger((indentationInput as HTMLInputElement).value);
    let adjustedLength: number = adjustForIndentation(currentIndentation);
    let value: string = (headingTextInput as HTMLInputElement).value;
    if (value.length > adjustedLength) {
        (headingTextInput as HTMLInputElement).value = value.substring(0, adjustedLength);
    }
}
function headingTextSequence(): void {
    limitLength();
    sendCodeToServer();
}
function adjustForIndentation(indentation: number): number {
    let adjustedLength: number = 50 - (indentation * 4);
    return adjustedLength;
}
function headingContentToName(textContent: string): string {
    textContent = textContent.trim();
    switch (textContent) {
        case '//--------Heading--------':
            return 'THIN';
        case '//=======-Heading-=======':
            return 'THICK';
        case '<!--------Heading------->':
            return 'HTML';
        case '<!--=====-Heading-=====->':
            return 'HTML_THICK';
        case '#---------Heading--------':
            return 'THIN_HASH';
        case '#========-Heading-=======':
            return 'THICK_HASH';
        case '/*--------Heading------*/':
            return 'CSS';
        case '/*=======-Heading-=====*/':
            return 'CSS_THICK';
    }
}
function normalizeInteger(value: string | number): number {
    if (typeof value === "string") {
        value = parseInt(value);
    }
    if (isNaN(value)) {
        return 0;
    }
    return value;
}
function sendCodeToServer(): void {
    let headingType: string = headingContentToName(currentTypeChosenCode.textContent);
    let headingText: string = (headingTextInput as HTMLInputElement).value;
    let indentation: number = normalizeInteger((indentationInput as HTMLInputElement).value);
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
    }).then((codeHeading: string): void => {
        receiveCodeFromServer(codeHeading);
    }).catch(error => {
        console.error('Error: ', error);
    });
}
function receiveCodeFromServer(codeHeading: string): void {
    generatedCommentText.innerText = codeHeading;
}
function indentationSequence(): void {
    limitIndent();
    removeTrailingZeros((indentationInput as HTMLInputElement).value);
    limitLength();
    sendCodeToServer();
}
function clearHeadingText(): void {
    (headingTextInput as HTMLInputElement).value = '';
    headingTextInput.focus();
    sendCodeToServer();
}
if (loadPage(document.body, 'code-commenter')) {
    copyToClipboardButton.addEventListener('click', copyToClipboard);
    indentationInput.addEventListener('input', indentationSequence);
    headingTextInput.addEventListener('input', headingTextSequence);
    headingTextClearButton.addEventListener('click', clearHeadingText);
    Array.from(codeHeaderTypeChoices).forEach(choice => {
        choice.addEventListener('click', changeHeadingType);
    });
    indentationInput.addEventListener('keypress', onlyPositiveNumbers);
    document.addEventListener('keydown', copyOnEnter);
}