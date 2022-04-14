let sum = [];
let newnum = 0;

function divide(num){
    console.log('I will divide');
}

function multiply(num){
    console.log('I will multiply');
}

function subtract(num){
    console.log('I will subtract');
}

function add(num){
    console.log('I will add here');
}

function display(sum){
    box = document.querySelector('#display');
    console.log(typeof(box));
    box.innerHTML(`${sum}`);
}



function main(){
    let buttons = document.querySelectorAll('button');
    let buttonCount = buttons.length;
    for (var i = 0; i <= buttonCount; i +=1) {
        buttons[i].addEventListener('click', function(e){
            if (this.id === 'add') {
                add(sum);
            }
            else if (this.id === 'subtract'){
                subtract(sum);
            }
            else if (this.id === 'multiply'){
                multiply(sum);
            }
            else if (this.id === 'divide'){
                divide(sum);
            }
            else if (this.id === '0'){
                sum.push(0);
                display(sum);
            }
            else if (this.id === '1'){
                sum.push(1);
                display(sum);
            }

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