'use strict';

// Print the 'Window' object
console.log(this);

function logThis() {
    console.log(this);
}

// Non-Strict mode  : Print the 'Window' object
// Strict mode      : Print 'undefined' 
logThis();

// Using Arrow Function 
// 'this' don't get its own binding environment
// 'This' point to Environment where is the Arrow Function declared (Global scope in this case so 'Window' is binded)
// const logThis = () => {
//     console.log(this);
// }

const obj = {
    num: 10,
    logThis // 'this' inside Object points to this Object if use function declaration (doesn't work for arrow function)
}

// This point to the Object 'obj'
// obj.logThis();

const button = document.querySelector('button');
button.addEventListener('click', logThis);


// Another Example
// I don't want add logThis as a property of this 'obj2' Object
const obj2 = {
    num: 202
}

// Option 1: Bind function
// const boundLogThis = logThis.bind(obj2);
// boundLogThis();

// Option 2: inmediatly call the funciton
// logThis.call(obj2);

// Option 3: apply pass argument as array
// logThis.apply(obj2, [20, 30]);  x: 20, y: 30


// Example: Array Iteration function
const arr = [1, 2, 3];

// Using 'Strict mode' this is undefined
// Using 'Non-Strict mode' this is 'Window' Object
console.log(`Iteration function:`);
arr.forEach(function(num) {
    console.log(this);
    console.log(num);
});

console.log(`Iteration function:`);
arr.forEach(function(num) {
    console.log(this); // print -> {num: 100}
    console.log(num);
}, {num: 100}); // this argument


// Arrow Function in both modes always print 'Window' object
arr.forEach(num => {
    console.log(this);
    console.log(num);
}, {num: 100}); // get ignores (this always points to 'Window')


// Classes
console.log(`-- Classes --`)
class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Hello I am ${this.name}`);
    }
}

const angel = new Person('Angel');
angel.speak();