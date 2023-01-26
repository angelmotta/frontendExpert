const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
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
for (key in myobj) {
    console.log(key);
}