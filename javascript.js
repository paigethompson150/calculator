let currentOperand = [];
let previousOperand = [];

let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;
const display = document.querySelector('#display');
let buttons = Array.from(document.querySelectorAll('button'));

function add(first, second){
    return first + second;
}

function subtract(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first,second){
    return first / second;
}

function evaluate(first, second){
    //converting arrays into numbers for arithmetic
    //if it is an array, convert it into a string and then an integer
    if (isNaN(first) === true){
        first = first.join('');
    }
    second = second.join('');
    first = parseInt(first);
    second = parseInt(second);
    if (addition === true){
        sum = add(first,second);
        addition = false;
        return sum;
    }
    else if (subtraction === true){
        sum = subtract(first, second);
        subtraction = false;
        return sum;
    }
    else if (multiplication === true){
        sum = multiply(first, second);
        multiplication = false;
        return sum;
    }
    else if (division === true){
        sum = divide(first, second);
        division = false;
        return sum;
    }
    else {
        return second;
    }
}




buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (button.id === 'clear'){
            display.innerText = '';
            currentOperand = [];
            previousOperand = [];
        }
        else if (button.id === 'add'){
            if (typeof(previousOperand) != 'object'){
                //do nothing, keep previous operand as is
            }
            else {
                previousOperand = currentOperand;
            }
            currentOperand = [];
            addition = true;
            
        }
        else if (button.id === 'subtract'){
                if (typeof(previousOperand) != 'object'){
                    //do nothing, keep previous operand as is
                }
                else {
                    previousOperand = currentOperand;
                }
                currentOperand = [];
                subtraction = true;
        }
        else if (button.id === 'multiply'){
            if (typeof(previousOperand) != 'object'){
                //do nothing, keep previous operand as is
            }
            else {
                previousOperand = currentOperand;
            }
            currentOperand = [];
            multiplication = true;
        }
        else if (button.id === 'divide'){
            if (typeof(previousOperand) != 'object'){
                //do nothing, keep previous operand as is
            }
            else {
                previousOperand = currentOperand;
            }
            currentOperand = [];
            division = true;
        }
        else if (button.id === 'equal'){
            previousOperand = evaluate(previousOperand, currentOperand);
            display.innerText = `${previousOperand}`;
            addition = false;
            subtraction = false;
            return;
        }
        
        else {
            currentOperand.push(e.target.id);
        }
        //append number to the screen
        display.innerText += e.target.innerText;

    });
});