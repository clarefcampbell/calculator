/*Global Variable Declaration*/
let num1 = 0;
let num2 = 0;
let oper = '';
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
          result = add(num1, num2);
          break;
        case '-':
            result = subtract(num1, num2);
        case '*':
          result = multiply(num1, num2);
          break;
        case '/':
            result = divide(num1, num2);
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
    if(num1 = 0) {
        num1 = +readoutField.innerHTML;
        oper = e.target.innerHTML;
        historyField.innerHTML += num1 + ' ' + oper + ' ';
        readoutField.innerHTML = '0';
    } else {
        num2 = +readoutField.innerHTML;
    }
}))

clearBtn.addEventListener('click', () => {
    readoutField.innerHTML = '0';
    historyField.innerHTML = ''; 
    num1 = 0;
    num2 = 0; 
    result = 0;
});

equalBtn.addEventListener('click', () => {
    
});