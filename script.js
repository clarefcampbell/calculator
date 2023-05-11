/*Global Variable Declaration*/
let num1 = 0;
let num2 = 0;
let oper = '';
let result = 0;

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
readoutField.innerHTML = '1';