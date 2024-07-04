let xyz = document.querySelector(".xyz");
const pqr = true;
let display = document.querySelector("#display");
let currentValue = '';
let currentOperation = '';
let previousValue = '';
let history = '';

function appendValue(value) {
    currentValue += value;
    updateDisplay();
}

function setOperation(operation) {
    if (currentValue !== '') {
        if (previousValue !== '') {
            calculateResult();
        }
        currentOperation = operation;
        previousValue = currentValue;
        currentValue = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentValue = '';
    currentOperation = '';
    previousValue = '';
    updateDisplay();
}

function calculateResult() {
    if (!currentOperation || !previousValue || !currentValue) {
        return;
    }

    let result;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = num2;
    }

    history += previousValue + currentOperation + currentValue + "=" + result + "      ";
    currentValue = result.toString();

    currentOperation = '';
    previousValue = '';
    updateDisplay();
}


function removeLastCharacter() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.value = currentValue;
}

// const GetHist = () => {
//     let c = localStorage.getItem("hist");
//     xyz.innerHTML = c;
// };

// function updatehistory() {
//     let p = document.createElement('p');
//     p.innerText = history;
//     xyz.appendChild(p);
//     localStorage.setItem("hist", xyz.innerHTML);
//     history = '';
// }




// GetHist();
