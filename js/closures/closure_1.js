/** CLOSURES */

// Basic Closure example
// This work because of 'Lexical scopoing'
// This means: functions have access to their parent's scope
let globalNum = 5;

function logNum() {
    const localNum = 1;
    console.log(globalNum + localNum);
}

globalNum = 10;

logNum(); // out: 11