//FOR lOOP - used to iterate a block of code repeatedly until the conditon is met
// for(let i= 0; i < 5; i++){
//     console.log(i)
// }

//2. Whule loop: used to execute a block of code as long as specified condition is 'true'
// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++
// }

// Do While Loop: executes a block of code atleast once and then repeats the loop as long as specified condition is true
// let i = 0;
// do{
//     console.log(i);
//     i++;
// } while (i < 5);



// //1. for loop
// for(let step = 0; step < 5; step++){
//     console.log("Walking east one step");
// }


// let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
// let people= [
//     {
//     name: 'John Doe',
//     age: 30,
//     },
//     {
//         name: 'John Doe',
//         age: 30,
//         },
//         {
//             name: 'John Doe',
//             age: 30,
//             },
// ]

//for each: it is used to iterate over an array or object

// fruits.forEach((fruit) =>{
//        console.log(fruit)
// })

// let person ={
//     name: 'John Doe',
//     age: 30,
//     city: 'New York'
// }

//2. for ... in loop: used to iterate over an object

// for(let key in person){
//     console.log(key)
//     console.log(person[key]);
// }


//3. for ... of loop: it is used to iterate over an array

// for(let item of fruits){
//     console.log(item);
// }

// function printDiamond(rows){
//     for(let i = 1; i<=rows; i++ ){
//         console.log("".repeat(rows - i) + "*".repeat(2 * i - 1));
//     }
//     for(let i = rows -1 ; i >= 1; i--){
//         console.log("".repeat(rows - i) + "*".repeat(2 * i -1));
//     }
// }
// console.log("Diamond")
// printDiamond(5);

//example 3
function printExample3(rows){
    for (let i= 1; i <= rows; i++){
        console.log("*".repeat(i));
    }
}
printExample3(6);

//example 2

function printExample2(rows){
    for(let i= rows; i >= 1; i--){
        console.log("*".repeat(i));
    }
}

printExample2(6);


function example5(rows){
    for(let i = 1; i <= rows; i++){
        console.log(" ".repeat(rows-1) + "*".repeat(i))
    }
}
example5(6)