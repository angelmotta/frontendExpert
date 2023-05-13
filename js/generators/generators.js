// Generators and Generators functions

function* genNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generatorObject = genNumbers();
console.log(generatorObject.next()); // {value: 1, done: false}
console.log(generatorObject.next()); // {value: 2, done: false}
console.log(generatorObject.next()); // {value: 3, done: false}
console.log(generatorObject.next()); // {value: undefined, done; true}

// Another example
function* genNumbersv2(count) {
    for (let i = 0; i < count; i++) {
        yield i;
    }
    return 5; // this is ignored if loop the Generator Object
}

const genObjectv2 = genNumbersv2(3);

console.log(genObjectv2.next()); // 0
console.log(genObjectv2.next()); // 1
console.log(genObjectv2.next()); // 2
console.log(genObjectv2.next()); // {value: 5, done; true}

// The generator Object is iterable but this approach ignore return statement
// Not Always recommended this way
// for (value of genObjectv2) {
//     console.log(value)
// }

// Another example
console.log(`-- sample 3 --`);
function* genNumbersv3(count) {
    const value = yield 0;
    yield value + 3;
}

const generatorObj3 = genNumbersv3(3);

// console.log(generatorObj3.next());
// console.log(generatorObj3.next(5)); // out val: 8 replace previous yield value of 0 with 5

console.log(generatorObj3.next()); // 0
console.log(generatorObj3.return(4)); // 4 (stop execution)
// console.log(generatorObj3.throw(new Error('There was an error'))); // stop execution similar effect to prev line
console.log(generatorObj3.next(5)); // undefined (already returned)

// Anothe example: calling another generator
console.log(`-- sample 4 --`);

function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield 3;
    yield 4;
}

function* genNumbersv4(count) {
    yield* generator1();
    yield 2.5;
    yield* generator2();
}

const generatorObj4 = genNumbersv4();
console.log(generatorObj4.next()); // 1
console.log(generatorObj4.next());
console.log(generatorObj4.next()); // 2.5
console.log(generatorObj4.next());
console.log(generatorObj4.next()); // 4
console.log(generatorObj4.next()); // undefined, done