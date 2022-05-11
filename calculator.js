//object to store the increasing sum
let sum = [];
//object to store the second number input
let newnum = [];

let addition = false;
let mult = false;
let subtraction = false;
let division = false;

function divide(num){
    division = false;
}

function multiply(num){
    mult = false;
}

function subtract(num){
    subtraction = false;
}

function add(num1,num2){
    addition = false;

}

function perform(sum, newnum){
    if (division === true){
        divide(sum,newnum);
        console.log('divide');
    }
    else if (mult === true){
        multiply(sum,newnum);
        console.log('multiply');
    }
    else if (subtraction === true){
        subtract(sum,newnum);
        console.log('subtract');
    }
    else if (addition === true){
        add(sum,newnum);
        console.log('add');
    }
}

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
    var i = 0;
    var len = sum.length;
    //while(i < len){
    //    sum[i] = parseFloat(sum[i]);
    //    i++;
    //}
    //sum = sum.map(i => parseFloat(i));
    if (newnum === '') {
        newnum = +sum;
        console.log(typeof(newnum));
        sum = [];
    }
    else {
        newnum = +newnum + +sum;
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
                clearDisplay();
                addition = true;
                console.log('add');
                display(sum);
            }
            else if (e.target.id === 'subtract'){
                clearDisplay();
                subtraction = true;
                toggle = true;
                console.log('subtract');
                display(sum);
            }
            else if (e.target.id === 'multiply'){
                clearDisplay();
                mult = true;
                toggle = true;
                console.log('mult');
                display(sum);
            }
            else if (e.target.id === 'divide'){
                clearDisplay();
                division = true;
                toggle = true;
                console.log('divide');
                display(sum);
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

//we'll have to store the user's first choice in an object. 
//We can't refresh this object until the user clicks on one of the function buttons.
//then, we create a new object to store the second value.
//perform whatever function on the second value to the first value.
//store new value in first object. refresh second object.
//when user hits clear, set both objects to zero. 












main();