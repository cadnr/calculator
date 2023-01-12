function operate(operator, number1, number2) {
    if(operator == '+') {
        return number1 + number2;
    }
    if(operator == '-') {
        return number1 - number2;
    }
    if(operator == '*') {
        return number1 * number2;
    }
    if(operator == '/') {
        return number1 / number2;
    }
}

function populateDisplay(button){
    displayDiv.textContent += button.textContent;
}

displayDiv = document.querySelector('.display');
displayDiv.textContent = 'test';
displayDiv.textContent += 'a';

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button);
    });
});