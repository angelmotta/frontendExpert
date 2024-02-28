console.log(5 == '5'); // "loose" equality, compare values [implicit type coercion]
console.log(5 === '5'); // "strict" equality, compare types & values

// Explicit type coercion
console.log(Number(false)); // 0
console.log(Number(true)); // 1

console.log(true == 1); // true
console.log(true === 1); // false
console.log(`Boolean: ${Boolean(0)}`)

console.log(Number('abc')); // NaN
console.log(NaN == NaN); // false
console.log('abc' == 'abc'); // 'true' (same types, no coercion is happening)
console.log('abc' == NaN); // type coercion to a Number but NaN != NaN


/** Null and Undefined */

// check null and undefined
let x;
if (x === null || x === undefined) {
    console.log(`x is null or undefined`);
}
// short version
if (x == null) {
    console.log(`x is null or undefined`);
}

// Explanation: using loose equality 'null' and 'undefined' both are the same [implicit type coercion]
console.log(null == null); // true
console.log(null == undefined); // true

// Note: nice thing -> 'null' doesn't equal anything else
console.log(null == 0); // false
console.log(null == ''); // false
console.log(null == []); // false

/** Comparing Objects */
console.log(`--Comparing Objects --`);
console.log({} === {}); // false
console.log({} == {}); // false

const obj = {};
console.log(obj == obj); // true
console.log(obj === obj); // true

// Same for arrays
const arr = [];
console.log(arr == arr); // true
console.log([] == []); // false (different objects)
console.log(arr == []); // false
console.log([1] == [1]); // false