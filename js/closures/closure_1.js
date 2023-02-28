/** CLOSURES */

// Basic Closure example
// This work because of 'Lexical scopoing'
// This means: functions have access to their parent's scope...so
// A Closure Function means that there's access in a function to the outer scope within the inner function
// Closure is created when function is declared (not when it's called)
// Closure:
// It's a function + the lexical environment it was declared in (in this case ths environment holds localNum) 
// AND this function (closure) has a reference to the parent environment (global environment in this case because the logNum was declared in the global scope)

let globalNum = 5;

function logNum() {
    const localNum = 1;
    console.log(globalNum + localNum);
}

globalNum = 10;

logNum(); // out: 11