/** CLOSURES */

// LogNum is in the Lexical Scope of Example (LogNum is nested inside of the example function)
function example() {
    const num = 5;

    return function logNum() { // creation of Closure
        console.log(num);
    }
}

// In many other programming language the const num (5) would be garbage collected 
// when the execution of example function is finished
// Becase JS created a closure, example function keeps access to its parent's scope
// It means the const num declared in example is going to exist AS LONG AS this innerFunction exists because const num is needed (dependency) for the innerFunction (it's part of its closure)
const innerFunction = example();
innerFunction();