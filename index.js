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
let operations = ["+", "-", "*", "/"];
let operation;
let secondNumber;

function appendValue(value) {
    const display = document.getElementById('display');
    if(value === "CE"){
        display.value = "";
    }
    else if(value === "="){
        display.value = operate(firstNumber, operation, secondNumber);
    }

    else if(operations.includes(value) ){
        if(firstNumber === ""){
            display.value = "";
        }
        else{
            operation = value;
            display.value = "";
            console.log(operation)
        }
    }
    else if(operation != undefined){
        display.value += value;
        secondNumber = display.value;
        console.log(secondNumber + " S")
    }
    else{
        display.value += value;
        firstNumber = display.value;
        console.log(firstNumber+" F");
    }
}

function operate(a, operation, b){
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    switch(operation){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}