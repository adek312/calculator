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

function appendValue(value) {
    const display = document.getElementById('display');
    if(value === "CE"){
        display.value = "";
    }
    else{
        display.value += value;
    }
}

function operate(){
    
}