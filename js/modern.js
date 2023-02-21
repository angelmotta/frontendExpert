const arr = [1, 2, 3, 4];

/** Anonymous and arrow functions */
const doubled = arr.map(elem => elem * 2);
console.log(arr);
console.log(doubled);

/** Destructuring */
// const first = arr[0];
// const second = arr[1];

// [first, second, ...rest] = arr;
// console.log(`${first}, ${second}`);
// console.log(rest);

// Same with objects
// const person = {
//     name: 'Angel',
//     website: 'FrontendExpert',
//     cost: 50,
// };

// const name = person.name;
// const { name: firstName, company='AlgoExpert', ...rest } = person;
// console.log(firstName);
// console.log(company);
// console.log(rest);

// function printName(person) {
//     console.log(person.name);
// }
// function printName({ name }) {
//     console.log(name);
// }

// printName(person);


/** Spread Operator */
console.log(`-- Spread Operator --`)
function add(x, y) {
    console.log(x + y);
}

//add(arr[0], arr[1]);
add(...arr);
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 2];

const combined = [...arr1, 3, 4.5, ...arr2];
console.log(combined);

// rest operator in function
console.log(`rest operator in function:`);
function logParams(x, ...rest) {
    console.log(x);
    console.log(rest); // array object
}

logParams(1, 2, 3, 4);

// Template literals and Nullish coalescing
const name = null;

// const defaultName = name != null ? name : 'Default name'; // check null or undefined
// Equivalent to previous line
const defaultName = name ?? 'Default Name'; // Null coalescing Operator (check null or undefined) 

console.log(`Hello ${defaultName}`);

/** Optional Chaining */
console.log(`Optional chaining:`);
const user = {
    company: {
        // website: 'algoexpert.io',
    }
}

console.log(user);
// console.log(user.company.website); // unsafe access
console.log(user?.company?.website); // potentially return 'null or undefined' so...
console.log(user?.company?.website ?? 'Foo');

/** Short Circuit Evaluation */
console.log(`-- Short Circuit evaluation --`);
const shouldRunCode = true;

function logWorld() {
    console.log(`Hello World`);
}

if (shouldRunCode) {
    logWorld();
}

// Equivalent to do this
shouldRunCode && logWorld(); // A little bit of a hack (not so readable)