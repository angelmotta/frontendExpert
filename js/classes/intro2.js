// Something unique in JS everything that is not primitive is an Object (similar to Java?)

// Function is an Object look this
const funcProto = Object.getPrototypeOf(() => {});
// Out: [toString, call, ...] properties of a function
console.log(Object.getOwnPropertyNames(funcProto));
// Same with Array....Array is an Object
const arrayProto = Object.getPrototypeOf([]);
// Out: [length, push, join, slice, find, ...] properties (methods) of an Array
console.log(Object.getOwnPropertyNames(arrayProto));