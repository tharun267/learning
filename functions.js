// Function is a piece of code

// function declaration
function printClassStatus() {
    console.log("Manoj is listening to class and deepak and chintu are watching");
}

printClassStatus(); // function call

// create a function to add 2 numbers

function add(numberOne, numberTwo) {
    return numberOne + numberTwo; // return statement
}

// 1) function is created using "function" keyword
// 2) Here "table" is the name of the function
// 3) parameters or arguments = tableNumber

function table(tableNumber) {
    for(var i = 1; i<= 10; i++) {
        console.log(tableNumber,'X', i, '=', tableNumber * i);
    }
}

// return value is stored in 'resultOfAddition'
var resultOfAddition = add(1, 2); // here is the function call

console.log(resultOfAddition);

table(resultOfAddition);