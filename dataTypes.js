// Simple data types

var numberType = 10;
var stringType = "Tharun";
var booleanType = true;

// what are data types in javascript?

var quatationOne = '"Speed thrills but kills"';

var name = "I'm Tharun"; // can be written in two ways "", ''

console.log(quatationOne);
console.log(name);

// Complex data types

// Let's take fan as an object
// oka fan ni chudagane manaki em gurhosthay
// wings, status, speed, color

var fanNoOfWings = 3; // Number type
var fanStatus = true; // Boolean type
var fanSpeed = 1; // Number type
var fanColor = "Brown"; // String type

var fan = {
    noOfWings: 3,
    status: true,
    speed: 1,
    color: "Brown"
}; // object, curly braces {} are used to represent object

console.log(fan);

// array data type is used to list out items, things, etc

// ages of pavan, deepak, manoj // homogeneous data types
var ages = [22, 25, 22] // array, square braces [] are used to represent array
console.log(ages);

// hetrogeneous array type
var hetrogeneousType = ["Fan", 3, true, 1, "Brown"];
console.log(hetrogeneousType)

console.log(typeof numberType);
console.log(typeof stringType);
console.log(typeof booleanType);
console.log(typeof array);
console.log(typeof fan);

var glass = null;

console.log(glass, typeof glass);

console.log(numberType, stringType, booleanType, array, fan);

// Guniganti Manoj

// gunigantiManoj // camelCase

// GunigantiManoj // similar to camel case but starts with capital

// guniganti_manoj // snake case 


// Not readable
var a=3
var b=4
var c=a*b

console.log(c);

// Readable code

var variableOne = 3;
var variableTwo = 4;
var multiplicationResult = variableOne * variableTwo;

console.log(multiplicationResult);