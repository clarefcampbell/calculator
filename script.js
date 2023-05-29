/*Global Variable Declaration*/
let num1s = '';
let num2s = '';
let operator = 'test';
let result = 0;
currentValue = '';

/*Functions*/

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2; 
}

function operate (oper, num1, num2) {
    switch (oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
          console.log('error');
      }

}

function updateDisplay (num1, num2, oper) {
    display.innerHTML = num1 + ' ' + oper + ' ' + num2;
}

/*Document query selectors*/
const display = document.querySelector('#readout');
const clearBtn = document.querySelector('#clear')
const equalBtn = document.querySelector('#equals');
const nums = Array.from(document.querySelector('#numbers').children);
const opers = Array.from(document.querySelector('#operators').children);

/*Events*/
nums.forEach(number => number.addEventListener('click', (e) => {
    if(currentValue == ''){
        currentValue = e.target.innerHTML;
        updateDisplay(currentValue, '', '');
    } else {
        currentValue += e.target.innerHTML;
        updateDisplay(currentValue,'','');
    }
}));

opers.forEach(oper => oper.addEventListener('click', (e) => {
    if(num1s == '') {
        num1s = currentValue;
    } else {
        num2s = currentValue;
        num1s = operate(operator, +num1s, +num2s);
        operator = e.target.innerHTML;
        num2s = '';
    }
    operator = e.target.innerHTML;
    currentValue = ''; 
    updateDisplay(num1s, num2s, operator);
}))

clearBtn.addEventListener('click', () => {
    display.innerHTML = '0';
    num1s = 0;
    num2s = 0; 
    result = 0;
    currentValue = '';
});

equalBtn.addEventListener('click', () => {
    console.log(operator);
    num2 = +display.innerHTML;
    result = operate(operator, num1, num2);
    console.log('num1 - ' + num1 + ', num2 - ' + num2 + ', oper - ' + operator + ', result - ', result);
});