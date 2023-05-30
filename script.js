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

function updateDisplay (field1, field2, oper) {
    display.innerHTML = field1 + ' ' + oper + ' ' + field2;
}

/*Document query selectors*/
const display = document.querySelector('#readout');
const clearBtn = document.querySelector('#clear')
const equalBtn = document.querySelector('#equals');
const nums = Array.from(document.querySelector('#numbers').children);
const opers = Array.from(document.querySelector('#operators').children);

/*Events*/
nums.forEach(number => number.addEventListener('click', (e) => {
    if(result != 0) {
        num1s = result;
        num2s = ''; 
        result = 0;
        currentValue = '';
    }
    if(currentValue == ''){
        currentValue = e.target.innerHTML;
    } else {
        currentValue += e.target.innerHTML;
    }
    if(num1s != '') {
        updateDisplay(num1s, currentValue, operator);
    } else {
        updateDisplay(currentValue, '', '');
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
    num1s = '';
    num2s = ''; 
    result = 0;
    currentValue = '';
});

equalBtn.addEventListener('click', () => {
    num2s = currentValue;
    result = operate(operator, +num1s, +num2s);
    updateDisplay(num1s, num2s, operator);
    display.innerHTML += ' = ' + result;
});