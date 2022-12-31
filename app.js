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

// 2. Listeners

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

clearButton.addEventListener('click', clear);

// 3. Calculation functions

// function for displaying number only if length of this number is shorter or equal for 16
function displayNumber(num) {
    if (prev !== '' && current !== '' && operator === '') {
        prev = '';
        currentCalc.textContent = current;
    }
    if (current.length <= 16) {
        current += num;
        currentCalc.textContent = current;
    }
}

// function for displaying operator value after entering number
function displayOperator(oper) {
    if (prev === '') {
        prev = current;
        checkOperator(oper);
    } else if (current === '') {
        checkOperator(oper);
    } else {
        calculate();
        operator = oper;
        currentCalc.textContent = '0';
        prevCalc.textContent = prev + ' ' + operator;
    }
}

function checkOperator(str) {
    operator = str;
    prevCalc.textContent = prev + ' ' + operator;
    currentCalc.textContent = '0';
    current = '';
}


// calculate function with operators switching(add, substract, multiply and divide), **when you divide by 0 function will throw error on displaying screen** 
function calculate() {
    prev = Number(prev);
    current = Number(current);

  if (operator === "+") {
    prev += current;
  } else if (operator === "-") {
    prev -= current;
  } else if (operator === "x") {
    prev *= current;
  } else if (operator === "/") {
    if (current <= 0) {
      prev = "Error";
      setResult();
      return;
    }
    prev /= current;
  }
  prev = roundNumber(prev);
  prev = prev.toString();
  setResult();
}

// function for setting result on current calculation screen, if result is longer than 16 it will throw three dots after result.
function setResult() {
    if (prev.length <= 16) {
        currentCalc.textContent = prev;
    } else {
        currentCalc.textContent = prev.slice(0, 16) + '...';
    }
    prevCalc.textContent = '';
    operator = '';
    current = '';
}


// function for rounding result 
function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

function clear() {
    current = '';
    prev = '';
    operator = '';
    currentCalc.textContent = '0';
    prevCalc.textContent = '';
}
