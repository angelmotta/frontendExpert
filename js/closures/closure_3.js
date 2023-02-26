/** CLOSURE: useful applications are private (check React Hooks) */

function myStateFunction() {
    // You can view this as our Private section (Methods and state)
    // Both of These (state and function) are private to the myStateFunction Scope
    let privateNum = 0;
    function privateIncrement() {
        privateNum++;
    }

    // You can view this as our Public functions
    return {
        logNum: () => console.log(privateNum),  // closure1
        increment: () => {                      // closure2
            privateIncrement();
            console.log(`Incremented done!`);
        }
    }
}

// We can use in this way or...
// const myStateObject = myStateFunction();
// myStateObject.logNum();
// myStateObject.increment();
// myStateObject.increment();
// myStateObject.logNum(); // out: 2

// ...Or We can use destructuring syntax
const { logNum, increment } = myStateFunction();
logNum();
increment();
increment();
logNum();
// 
// privateNum does not exist in this scope (global scope). This only exists in the logNum Closure
// console.log(privateNum); // not defined

// INTERESTING FACT
// Private fields: privateNum (state) and privateIncrement become local to the environment created at the execution Time of 'myStateFunction'
console.log(`----`);
const { logNum: logNum2, increment: increment2 } = myStateFunction();
logNum2();
increment2();
increment2();
increment2();
logNum2();

// logNum and logNum2 functions have different parent environments 
// So each of these created its num variable which was then SAVED in each logNum Closure