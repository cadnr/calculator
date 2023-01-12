let displayValue = 0;
let number1;
let operator = undefined;

function operate(operator, number1, number2) {
    if(operator == '+') {
        return parseFloat(number1) + parseFloat(number2);
    }
    if(operator == '-') {
        return parseFloat(number1) - parseFloat(number2);
    }
    if(operator == '*') {
        return parseFloat(number1) * parseFloat(number2);
    }
    if(operator == '/') {
        if(number2 == 0) return 'ERR';
        return parseFloat(number1) / parseFloat(number2);
    }
}

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const auxString = displayValue.toString() + button.textContent;
        displayValue = parseFloat(auxString);
        displayDiv.textContent = displayValue;
        updateDisplay();
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(operator != undefined) {
            operator = button.textContent;
            updateDisplay();
            return;
        }
        number1 = displayValue;
        displayValue = 0
        operator = button.textContent;
        updateDisplay()
    });
});

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    if(operator === undefined || number1 === undefined) return;
    displayValue = operate(operator, number1, displayValue);
    operator = undefined;
    number1 = undefined;
    updateDisplay();
});

const displayDiv = document.querySelector('.display');
function updateDisplay(){
    if(operator == undefined || number1 == undefined){
        displayDiv.textContent = displayValue;
    } else{
        displayDiv.textContent = `${number1} ${operator} ${displayValue}`;
    }
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    number1 = undefined;
    operator = undefined;
    displayValue = 0;
    updateDisplay();
});
