/*Global Variable Declaration*/
let num1s = '';
let num2s = '';
let operator = '';
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
    if(num2 == 0) {
        return '>:(';
    }
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

function clear() {
    display.innerHTML = '0';
    num1s = '';
    num2s = ''; 
    result = 0;
    currentValue = '';
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
        clear();
    }
    if(e.target.innerHTML == "." && currentValue.includes(".")){
        return;
    }
    currentValue = currentValue == '' ? e.target.innerHTML : currentValue + e.target.innerHTML;
    num1s == '' ? updateDisplay(currentValue, '', '') : updateDisplay(num1s, currentValue, operator);
}));

opers.forEach(oper => oper.addEventListener('click', (e) => {
    if(result != 0) {
        /*Handling if equals sign has been pressed*/
        num1s = result;
        operator = e.target.innerHTML;
        result = 0;
        updateDisplay(num1s, num2s, operator);
        return;
    }
    currentValue.endsWith(".") ? currentValue += 0 : currentValue;
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

clearBtn.addEventListener('click', clear);

equalBtn.addEventListener('click', () => {
    if(num1s == '' || currentValue == '') {
        /*Skip equals functionality if requirements are not met*/
        return;
    }
    num2s = currentValue;
    result = operate(operator, +num1s, +num2s);
    updateDisplay(num1s, num2s, operator);
    display.innerHTML += ' = ' + result;
    num2s = '';
    currentValue = '';
});
/*ticket: pressing opers multiple times*/