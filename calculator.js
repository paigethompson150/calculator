//object to store the increasing sum
let sum = [];
//object to store the second number input
let newnum = [];
//toggle will check whether to add to newnum
let toggle = false;
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
    }
    else if (mult === true){
        multiply(sum,newnum);
    }
    else if (subtraction === true){
        subtract(sum,newnum);
    }
    else if (addition === true){
        add(sum,newnum);
    }
}

function display(sum){
    let box = document.querySelector('#display');
    //cleaning up the display
    modSum = Array.from(sum);
    modSum = modSum.join('');
    box.textContent = `${modSum}`;
}

function clearDisplay(){
    let box = document.querySelector('#display')
    box.textContent = '';
    //while (box.firstChild) box.removeChild(box.firstChild);
}


function main(){
    let buttons = document.querySelectorAll('button');
    let buttonCount = buttons.length;
    for (var i = 0; i <= buttonCount; i +=1) {
        buttons[i].addEventListener('click', function(e){
            if (this.id === 'add') {
                clearDisplay();
                addition = true;
                toggle = true;
                add(sum);
            }
            else if (this.id === 'subtract'){
                clearDisplay();
                subtraction = true;
                toggle = true;
            }
            else if (this.id === 'multiply'){
                clearDisplay();
                mult = true;
                toggle = true;
            }
            else if (this.id === 'divide'){
                clearDisplay();
                division = true;
                toggle = true;
            }
            else if (this.id === 'clear'){
                sum = [];
                newnum = [];
                
            }
            else if (this.id === 'equal'){
                clearDisplay();
                
            }
            else {
                sum.push(this.id);
                
            }
            display(sum);

        });
    }
    
    
}

//we'll have to store the user's first choice in an object. 
//We can't refresh this object until the user clicks on one of the function buttons.
//then, we create a new object to store the second value.
//perform whatever function on the second value to the first value.
//store new value in first object. refresh second object.
//when user hits clear, set both objects to zero. 












main();