//array : ds which stores a collection of elements with index

//create an array
//1. using array literal

let fruits = ['Apple', 'Banana', 'Mango', "Orange", "Pineapple"];

//2. Using array prototype (new keywaord/constructor)

let marks= new Array(10,20,30,40,50);

console.log(marks[3]);


console.log(marks)


//Array methods
console.log(fruits.pop()); //removes the last element //Pinneaple
console.log(fruits)

console.log(fruits.push("Avocado"));
console.log(fruits)

// Begginning of the array methods
//3. unshift - Adds a new elemnt at the beginning of the array

console.log(fruits.unshift("grapes"));
console.log(fruits)

//shift - removes the first element and return the removed element

console.log(fruits.shift());
console.log(fruits)


//OTHER METHODS
//indexof () searches an array for an element value and returns its position in the array
let position = fruits.indexOf("Mango");
console.log(position);


//lastIndexOf
//The lastIndexOf() methos=d returns the position of the last occurence of a specifeid value in astring


// Difference netween filter and map