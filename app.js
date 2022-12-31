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

// displaying number depending on clicked button
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayNumber(e.target.textContent);
    })
})

// displaying operator depending on clicked button
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayOperator(e.target.textContent);
    })
})

// on equal button click function will calculate result
equalButton.addEventListener('click', () => {
    if (current !== '' && prev !== '') {
        calculate();
    }
})

// function for displaying number only if length of this number is shorter or equal for 16
function displayNumber(num) {
    if (current.length <= 16) {
        current += num;
        currentCalc.textContent = current;
    }
}

// function for displaying operator value after entering number
function displayOperator(oper) {
    operator = oper;
    prev = current;
    prevCalc.textContent = `${prev} ${operator}`;
    current = '';
    currentCalc.textContent = '';    
}


// calculate function with operators switching(add, substract, multiply and divide), **when you divide by 0 function will throw error on displaying screen** 
function calculate() {
    prev === Number(prev);
    current = Number(current);

    switch(operator) {
        case '+':
            prev += current;
            break;
        case '-':
            prev -= current;
            break;
        case '×':
            prev *= current;
            break;
        case '÷':
            if (current === 0) {
                prev = 'Cannot divide by 0!!!';
                setResult();
                return;
            } else {
                prev /= current;
            } 
            break;
    }
    // result will be rounded
    prev = roundNumber(prev);
    prev = prev.toString();
    setResult();
}

// function for setting result on current calculation screen, if result is longer than 16 it will throw three dots after result.
function setResult() {
    prevCalc.textContent = '';
    operator = '';
    if (prev.length <= 16) {
        currentCalc.textContent = prev;
    } else {
        currentCalc.textContent = prev.slice(0, 16) + '...';
    }
}


// function for rounding result 
function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

