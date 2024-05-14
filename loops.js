
// GROUP ASSIGNMENT
// example 3
// *
// **
// ***
// ****
// *****
// ******

//for loop
// function example3(rows){
//     for(let i = 1; i <= rows; i++){
//         console.log("*".repeat(i));
//     }
// }
// example3(6);




// example 4
// ******
// *****
// ****
// ***
// **

//    for(let a=6; a>=1; a--){
    
//    let a = "*".repeat(a);
//    console.log(b.reverse());
//    }

   // example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
//

function printExample5(rows){
    for(let i = 1; i<= rows; i++){
        console.log(" ".repeat(rows-i) + "*".repeat(i));
    }
    for(let i = rows -1; i>=1; i--){
        console.log(" ".repeat(rows-i) + "*".repeat(i));
    }
}
printExample5(5)


// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function printExample6(rows){
    for(let i = 1; i<= rows; i++){
        console.log(" ".repeat(rows-i) + "*".repeat(2*i -1));
    }
    for(let i = rows -1; i>=1; i--){
        console.log(" ".repeat(rows-i) + "*".repeat(2*i -1));
    }
}
printExample6(5)


// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *
function seven(rows){
    console.log("*".repeat(7));
    for(let i =1 ; i<=rows; i++){
        console.log(" ".repeat(6) + "*".repeat(1))
    }
}
seven(5)





// example 8
//*******
//*
//*
//*
//*
//*
//*

function invertedSeven(rows){
    console.log("*".repeat(7))
    for(let i =1; i<=rows; i++){
        console.log("*".repeat(1))
    }
}
invertedSeven(5)