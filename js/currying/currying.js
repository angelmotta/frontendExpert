// *** Currying Functions ***

function sum(a, b, c) {
    return a + b + c;
}

function subtract(a, b, c) {
    return a - b - c;
}

// Curry version
// Currying take advantage of Clousure to access a, b and c
// function curriedSum(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(1, 4, 10));
// console.log(curriedSum(1)(4)(10));

// We can also Create a Function to 'curriedSum' for us
// This is more generic because receive a func as a parameter (could be sum, multiply, subtract, etc...)
// function curry(func) {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return func(a, b, c);
//             }
//         }
//     }
// }

// Simplifying curry function with arrow function
// function curry(func) {
//     return (a) => {
//         return (b) => {
//             return (c) => {
//                 return func(a, b, c);
//             }
//         }
//     }
// }

// Simplifying previous version using implicit return
function curry(func) {
    return (a) => (b) => (c) => func(a, b, c);
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(4)(10));

// const curriedSubtract = curry(subtract);
// console.log(curriedSubtract(1)(4)(10));


// Practial Use case for Currying Function
// Have a function that is sort of part of another function

// Instead of this
// function addFour(b, c) {
//     return 4 + b + c;
// }

// We can do this
const addFour = curriedSum(4);
// So It allows you to save portions of a function call 
// with certain parameters in a nice, clean and concise way
console.log(addFour(10)(10));