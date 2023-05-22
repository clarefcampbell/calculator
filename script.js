/*Global Variable Declaration*/
let num1 = 0;
let num2 = 0;
let operator = 'test';
let result = 0;
let displayValue = ''

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

/*Document query selectors*/
const historyField = document.querySelector('#history');
const readoutField = document.querySelector('#readout');
const clearBtn = document.querySelector('#clear')
const equalBtn = document.querySelector('#equals');
const nums = Array.from(document.querySelector('#numbers').children);
const opers = Array.from(document.querySelector('#operators').children);

/*Events*/
nums.forEach(number => number.addEventListener('click', (e) => {
    if(readoutField.innerHTML != 0){
        readoutField.innerHTML += e.target.innerHTML;
    } else {
        readoutField.innerHTML = e.target.innerHTML;
    }
}));

opers.forEach(oper => oper.addEventListener('click', (e) => {
    if(num1 == 0) {
        operator = e.target.innerHTML;
        num1 = +readoutField.innerHTML;
    } else {
        num2 = +readoutField.innerHTML;
        console.log('num1 - ' + num1 + ', num2 - ' + num2 + ', oper - ' + operator)
        result = operate(operator, num1, num2);
        console.log(result);
        num1 = result;
        operator = e.target.innerHTML;
    }
    historyField.innerHTML += readoutField.innerHTML + ' ' + operator + ' ';
    readoutField.innerHTML = 0;
}))

clearBtn.addEventListener('click', () => {
    readoutField.innerHTML = '0';
    historyField.innerHTML = ''; 
    num1 = 0;
    num2 = 0; 
    result = 0;
});

equalBtn.addEventListener('click', () => {
    console.log(operator);
    num2 = +readoutField.innerHTML;
    result = operate(operator, num1, num2);
    console.log('num1 - ' + num1 + ', num2 - ' + num2 + ', oper - ' + operator + ', result - ', result);
});