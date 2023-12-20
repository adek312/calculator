function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber){
    console.log(firstNumber,operator,secondNumber);
}

function appendValue(value) {
    let displayValue = document.getElementById('display').value += value;
    return displayValue;
}

