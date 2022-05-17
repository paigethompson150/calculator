let sum = [];
let newnum = [];

let addition = false;
let subtraction = false;
const display = document.querySelector('#display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (button.id === 'clear'){
            display.innerText = '';
        }
        if (button.id === 'equal'){
            display.innerText = eval(display.innerText);
            return;
        }
        display.innerText += e.target.innerText;
    });
});
/*
//displays the numbers that the user inputs
function choiceDisplay(num){
    //cleaning up the display
    //modNum = Array.from(num);
    try {
        modNum = num.join('');
    }
    catch (error){
        display.textContent = `${num}`
    }
    
    display.textContent = `${modNum}`;
}

//displays the answer
function answerDisplay(sum){
    display.textContent = parseFloat(sum);
    addition = false;
    subtraction = false;
}

//clears the display
function clearDisplay(){
    sum = [];
    newnum = [];
    choiceDisplay(newnum);
}

function add(first, second){
    first = first.join('');
    //second = second.join('');
    return +first + +second;
}

function subtract(first, second){
    first = first.join('');
    return (+first - second) * -1;
}

//determines which arithmetic function to invoke
function evaluate(first, second){
    if (addition === true){
        return add(first,second);
    }
    if (subtraction === true){
        return subtract(first,second);
    }
    

}

function main(){
    let buttonCount = buttons.length;
    display.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            if (e.target.id === 'add') {
                //pushes the user's input to the variable sum, to keep store of it for future arithmetic.
                //sets newnum to zero to load future numberes inputted from number.
                sum = add(newnum, sum);
                newnum = [];
                addition = true;
            }
            else if (e.target.id === 'subtract'){
                sum = add(newnum, sum);
                newnum = [];
                subtraction = true;
            }
            else if (e.target.id === 'multiply'){
                
            }
            else if (e.target.id === 'divide'){
                
            }
            else if (e.target.id === 'clear'){
                clearDisplay();
            }
            else if (e.target.id === 'equal'){
                sum = evaluate(newnum, sum);
                console.log(sum);
                answerDisplay(sum);
            }
            else {
                //appends number to the screen
                newnum.push(e.target.id);
                choiceDisplay(newnum);
            }

        }
    });

}
*/