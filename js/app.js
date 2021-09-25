function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4)
        return pin;
    else
        return getPin();
}

function generatePin() {
    const newPin = getPin();
    const pinField = document.getElementById('generated-pin');
    pinField.value = newPin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const input = event.target.innerText;
    const keypadArea = document.getElementById('keypad-area');
    if (isNaN(input)) {
        // console.log(input);
        if (input == 'C') {
            keypadArea.value = '';
        }
    }
    else {
        const oldInputValue = keypadArea.value;
        keypadArea.value = oldInputValue + input;
    }
});

function checkPin() {
    const pinArea = document.getElementById('generated-pin').value;
    const keyArea = document.getElementById('keypad-area').value;

    const didntMatch = document.getElementById('not-match');
    const yesMatched = document.getElementById('mathced');

    if (pinArea == keyArea) {
        yesMatched.style.display = 'block';
        didntMatch.style.display = 'none';
        // console.log('matched');

    }
    else {
        didntMatch.style.display = 'block';
        yesMatched.style.display = 'none';
        // console.log('didnt match');
    }

};