// Arrays
// Represented by [] and values are seperated by comas(,)
// 0, 1, 2, 3, 4 ... n // indexes
var ages = [26,23,24]; // size: 3; [0] = 22, [1] = 23, [2] = 24
var names = ["Tharun", "Pavan", "Deepak", "Manoj"]; //size = 4;

// console.log(ages[0]);
// console.log(names[0]); // I want to print "Tharun" (or call by roll number)

// Q: I want to print all values of "names" variable

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// dot operator

var size = names.length; // used dot operator(.) and after that length to get the size of the array.

console.log(size);

// count happend like this 0, 1, 2, 3 (broken at 4 (4 < 4) = false)
for(var i = 0; i < size; i++) {
    console.log(i, names[i]);
}