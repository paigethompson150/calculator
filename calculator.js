//object to store the increasing sum
let sum = [];
//object to store the second number input
let newnum = [];
let multiplication = false;
let division = false;
let addition = false;
let subtraction = false;


function display(sum){
    let box = document.querySelector('#display');
    //cleaning up the display
    modSum = Array.from(sum);
    modSum = modSum.join('');
    box.textContent = `${modSum}`;
}

function answerDisplay(sum){
    let box = document.querySelector('#display');
    box.textContent = parseFloat(sum);
}

function clearDisplay(){
    let box = document.querySelector('#display')
    if (newnum === '') {
        newnum = +sum;
        sum = [];
    }
    else {
        //if (addition === 'TRUE') {
        //   newnum = +newnum + +sum;
        //    sum = [];
        //}
        //else if (subtraction === 'TRUE'){
        //    newnum = +newnum - +sum;
        //    sum = [];
        //}

        //addition is happening here
        sum = sum.join('');
        newnum = +newnum + +sum;
        console.log(newnum);
        sum = [];
    }
    
}


function main(){
    let buttons = document.querySelectorAll('button');
    let buttonCount = buttons.length;
    //iterate through buttons
    let box = document.querySelector('#container');
    box.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            if (e.target.id === 'add') {
                addition = true;
                clearDisplay();
                display(sum);
                addition = false;
            }
            else if (e.target.id === 'subtract'){
                subtract = true;
                clearDisplay();
                display(sum);
                subtract = false;
            }
            else if (e.target.id === 'multiply'){
                multiplication = true;
                clearDisplay();
                display(sum);
                multiplication = false;
            }
            else if (e.target.id === 'divide'){
                division = true;
                clearDisplay();
                display(sum);
                division = false;
            }
            else if (e.target.id === 'clear'){
                sum = [];
                newnum = [];
                console.log('clear');
                display(sum);
            }
            else if (e.target.id === 'equal'){
                clearDisplay();
                answerDisplay(newnum);
                console.log('equal');
            }
            else {
                sum.push(e.target.id);
                display(sum);
            }

        }
    });
    
}


main();