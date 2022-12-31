// 1.Access variables
const prevCalc = document.querySelector('.prev-calc');
const currentCalc = document.querySelector('.current-calc');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
let current = '';
let prev = '';
let operator = ''; 

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayNumber(e.target.textContent);
    })
})

function displayNumber(num) {
    if (current.length <= 16) {
        current += num;
        currentCalc.textContent = current;
    }
}

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