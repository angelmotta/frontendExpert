// Classes
// In JS objects inherit from other instantiated objects rather than blueprint classes

// Object Person
const person = {
    isHuman: true
};

// Object child inherit from Object Person
const child = Object.create(person);

// Internally Object.create is doing 'something' like this (invalid code)
// child.[[Prototype]] = person;   // __Prototype__ : person
// However wen can use an alias for this (used until now but is bad practice and It will be deprecated)
// const child = {};
// child.__proto__ = person; // Object.create is a better way

console.log(person); // expected out
console.log(child); // out: {}
console.log(child.isHuman); // 'out: true' because is inherited from Person

// Later wen can add attributes
child.maxAge = 18;
console.log(person.maxAge); // undefined in the Parent Object
console.log(child.maxAge); // 'out: 18' defined in the Parent Object
// Prototype chain is only in one direction

// Alternatives to create and inherit
// Another #1
// const child = Object.assign(Object.create(person), {
//     maxAge: 18
// });

// Another #2
// Not recommended. Not optimized in browser to 'change' prototype of already created Objects
// const child = {
//     maxAge: 18
// };
// // Doing in loop would be very slow
// Object.setPrototypeOf(child, person);

// Another #3 (older syntax and not recommended)
// Using the internal setter and getter all Objects have to set the internal Prototype field
// const child = {
//     maxAge: 18,
//     __proto__: person 
// };

// Another #4
// Adding another parameter (how it will be the new obj)
// More complicated syntax not recommended, better add felds later on using object dot notation
// const child = Object.create(person, {
//     maxAge: {
//         value: 18,
//         writable: true,         // need more specifications
//         configurable: true,
//         enumerable: true
//     }
// });

// Easier in this way
// child.maxAge = 18


// Create another object
// John will have access to all properties of person Object and child Object
console.log(`** Creating John Object **`);
const john = Object.create(child);
john.name = 'John';

// View prototype using older syntax is easier
console.log(john.__proto__); // out: {maxAge: 18}   the parent Object Child
console.log(john.__proto__.__proto__); // out: {isHuman: true}   the grandparent Object Person
// Using the new way
console.log(Object.getPrototypeOf(john)); // the same
console.log(Object.getPrototypeOf(Object.getPrototypeOf(john)));
// So we can access to any properties
console.log(john.maxAge);   // Child property
console.log(john.isHuman);  // Person property

// If One object change this whill change the properties on all of the prototypes (childs)
console.log(john.maxAge);
child.maxAge = 19;
// prototype property is a reference to another object
console.log(john.maxAge); // child object reference to the parent (not a solid copy of the value)




