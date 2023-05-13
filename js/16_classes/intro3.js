// Functions Constructors

function Person(name) {
    this.name = name;
}

// Comments
// Every function has a property called 'Person.prototype' which is an object
// Person.prototype......which is differente to Person.__proto__
// This object is a blue print for the 'new' keyword
Person.prototype = {
    constructor: Person,
    isHuman: true
}

const angel = new Person("Angel");
console.log(angel);
console.log(angel.isHuman);
console.log(angel.__proto__); // out: prototype object 
console.log(Object.getPrototypeOf(angel)); // same as prev line

const conner = new Person("Conner");
console.log(conner); // same prototype but different name variable
console.log(Object.getPrototypeOf(conner) === Object.getPrototypeOf(angel));

// Angel and Conner the same Prototype Object
// So if I change the prototype Object both Objects see that change (reference to Prototype)
Person.prototype.test = 'test';
// Both Objects already craeted will see 'test'
console.log(angel.test);
console.log(conner.test);
// So If I change the prototype using __proto__ from any Object this change will see to any other Object
conner.__proto__.newtest = 'newtest'
console.log(angel.newtest);
console.log(conner.newtest);

// I can create an Object in this way
// const clemenet - new Person('Clement');
// This works because the prototype of 'conner' is the object 'Person.prototpe' 
// and that Object has 'constructor' Person...so conner.constructor === Person
const clement = new conner.constructor('Clement');
console.log(clement);
console.log(clement.test);
console.log(clement.newtest);

// Sharing prototype also work with fucntions
Person.prototype.speak = function() {
    console.log(`Hello this is ${this.name}`);
    console.log(this.isHuman);
}

conner.speak();
angel.speak();

// InstanceOf
console.log(`-- InstanceOf --`)
console.log(angel instanceof Person);
console.log(clement instanceof Person);
console.log(angel instanceof Object); // everything inherit from Object
console.log(conner instanceof Array); // false, nowhere in the prototype chain is the Array
// But I could do this
// Object.setPrototypeOf(conner, Array.prototype);
console.log(`change conner`);
console.log(conner instanceof Array); // Now is True
console.log(conner instanceof Person); // Now is false (was changed from Person to Array)

// This is used in Polyfills (see next file)