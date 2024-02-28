// "use strict";

const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 5;
        } else if (hint === 'string') {
            return 'hello'
        }
        // For unclear situations
        return 2;
    }
    // sayHello() {
    //     console.log('Hello!');
    // },
    // get getRating() {
    //     return this.rating;
    // },
    // set setRating(value) {
    //     this.rating = value;
    // }
};

/* function constructor */
// function Website(name, rating, founders) {
//     this.name = name;
//     this.rating = rating;
//     this.founders = founders;
// }

// const frontendExpert = new Website('FrontendExpert', 5, ['Conner']);
// console.log(frontendExpert);

/* Symbols */
// const id = Symbol('id');
// const id2 = Symbol('id');
// console.log(id === id2); // false

// const obj = {
//     [id]: 1234,
//     [id2]: 0,
//     id: 'hello',
// }

// console.log(obj);

// const id3 = Symbol.for('id3');
// const id4 = Symbol.for('id3');
// console.log(id3 === id4); // true


/* Finding keys in Objects */
console.log('name' in website);  // true
console.log(website.hasOwnProperty('name')); // true (Recommended way)

console.log('toString' in website); // true (inherited from root object)
console.log(website.hasOwnProperty('toString')); // false (not inherited)

/* Methods Object */
// website.sayHello();
// console.log(website.getRating);
// website.setRating = 6;
// console.log(website.getRating);

/** Inheritance */
const myobj = {
    __proto__: website,
    foo: 'bar',
    hello: 'world',
    [Symbol('id')]: 0,
}

// console.log(myobj); // {own properties}
// console.log(myobj.name) // algoexpert (inherited)

/** Iterating over an Object */
console.log(Object.keys(myobj)); // return array
console.log(Object.values(myobj)); // return array
console.log(Object.entries(myobj)); // return both [[, ], [, ]]

Object.entries(myobj).forEach(function(value){
    console.log(value);
})

Object.entries(myobj).forEach(function([key, value]){
    console.log(key, value);
})

Object.keys(myobj).forEach(function(key) {
    console.log(myobj[key]);
});

// Iterating including inherited properties
console.log(`-- Iterating including inherited properties --`);
for (let key in myobj) {
    console.log(key);
}


/** Copying Objects */
const myNewObj = {
    original: 123,
}

// copy all propierties to myNewObj (except inherited properties)
Object.assign(myNewObj, myobj);
console.log(myNewObj);

/** Freeze Objects (is not allowed modify or add new properties to objects)*/
// Object.freeze(website);
// console.log(`isFrozen: ${Object.isFrozen(website)}`);
// website.name = 'FrontendExpert'; // ignored or throw exception (in strict mode)
// console.log(website);

/** Seal Objects (is allowed modify existing properties but not add new ones) */
// Object.seal(website);
// console.log(`isSealed: ${Object.isSealed(website)}`)
// website.name = 'FrontendExpert'; // modification allowed
// console.log(website);
// website.foo = 'bar'; // add is not allowed (ignored or error)


/** Converting Objects to primitives */
// console.log(website.toString());
website.toString = function(){
    return "Hello world";
}
// console.log(website.toString());

// console.log(website.valueOf());
website.valueOf = function() {
    return 1;
}
// console.log(website - 1); // 'website' objects is evaluated to a number in presence of subtraction operator '-'

console.log(10 - website);
// In stric mode It considers the sum operation (not default case of data type)
console.log(10 + website); // unclear situation (sum or concatenation)
