/** CLOSURE: classic question (analyze) */

// The anonymous functions is creating a Closure 
// so it has access to the i variable of its parent scope
// even after the loop is completed because the anonymous function is executed 500ms after
/*
for (let i = 0; i < 3; i++) {
    setTimeout(() => { // Closure creation
        console.log(i);
    }, 500);
}
*/

// Another example
// Now using VAR
for (var i = 0; i < 3; i++) {
    setTimeout(() => { // Closure creation
        console.log(i);
    }, 500);
}

// Analisis: 
// 'let' is block scope
// Let is only scope inside of the For Loop
// So when 'let' is used in a Loop JS creates a new version of the variable (copies) in each Iteration of the loop.
// SO each closure (created in each iteration of the loop) has a different copy (state) of the 'i' variable (because we use LET)

// 'var' is function scope
// In this case is just scoped globally because the fact we are Not inside a function (so 'i' is global scope)
// This means that we are using the same variable 'i' in each iteration (VAR variable)
// There is no a new way to create a new version (copy) of var 'i' of each individual iteration of the Loop
// SO even though we have 3 'different Closures' they are each pointing to the same 'i' variable
// That's why we see the value '3' (not '2') because we used i++ and that was the last state after the last iteration of the Loop

console.log(i)