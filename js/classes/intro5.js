// Modern Class Syntax
// New code style 'almost' equivalent to prototype chain syntax

class Person {
    // isHuman = true; // instance property
    static isHuman = true; // property of the Person Class (not object)
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Hello this is ${this.name}`);
    }
}

const conner = new Person("Conner");
const angel = new Person("Angel");
conner.speak();
console.log(conner.isHuman);
console.log(angel.isHuman);

// But if we change an instance variable this only is changed in this instance 
// Different behaviour to Prototype property seen before
console.log(`change conner variable`);
conner.isHuman = false;
console.log(conner.isHuman); // only changed for this object
console.log(angel.isHuman); // angel object unchanged
// So look like both objects don't share the same Prototype object as before

angel.name = "Angelinux"
console.log(angel.name);

// Static variable
console.log(`Static variable of a Class`);
console.log(Person.isHuman); // true
console.log(angel.isHuman); // undefined
// Static apply in the same for static functions

// Inheritance
// As before with manual prototype functions we could do
console.log(`-- Inheritance --`)
class MyPerson {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Hello this is ${this.name}`);
    }
}

class Child extends MyPerson {
    // Private field
    #age;

    constructor(name, age) {
        super(name); // call the parent constructor
        this.#age = age;
    }
}

const child = new Child("John", 10);
child.speak();

console.log(child instanceof MyPerson); // true 
console.log(child instanceof Child); // true
console.log(MyPerson instanceof Function); // true

// Hide properties
console.log(child.age);