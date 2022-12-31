// 1.Access variables
const prevCalc = document.querySelector('.prev-calc');
const currentCalc = document.querySelector('.current-calc');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete'); 

// 2. Basic calculations

const add = (a, b) => {
    return a + b;
}

const substract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}