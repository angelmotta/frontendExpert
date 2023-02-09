// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 2000);
// });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error(`My custom error`)), 2000);
// });

const promise = Promise.resolve(3);

console.log(promise);

//setTimeout(() => console.log(promise), 2500);

// promise.then(
//     (value) => console.log(value),
//     (error) => console.log(error)
// );

// promise.then(console.log, (error) => console.log(error));

// promise.then(console.log).catch((error) => console.log(error));

// Chaining
promise
    .then((value) => value * 2)
    .then((value) => value + 1)
    .then((value) => {
        throw new Error('fffff');
    })
    .then(console.log)
    .catch((error) => {
        console.log(`GG ${error}`);
        return 10; // could be a default value
    })
    .then(console.log)
    .finally(() => console.log('Done'));

// More Promise functions
// console.log(`-- Promise all --`);
// Promise.all([
//     Promise.resolve(5),
//     new Promise((res, rej) => setTimeout(() => res(8), 2000)),
//     Promise.resolve(3),
// ]).then(console.log); // the array is filled with the same order of invocation (not the duration of each call)

// If one promise reject the whole operation is rejected
// Promise.all([
//     Promise.resolve(5),
//     Promise.reject(2),
//     new Promise((res, rej) => setTimeout(() => res(8), 2000)),
//     Promise.resolve(3),
// ])
//     .then(console.log)
//     .catch(console.log);

// console.log(
//     `Promise race: return the first promise finished (resolved or rejected)`
// );

// Promise.race([
//     new Promise((res, rej) => setTimeout(() => res(3), 3000)),
//     new Promise((res, rej) => setTimeout(() => rej('me muiro'), 2000)),
//     new Promise((res, rej) => setTimeout(() => res(1), 1000)),
// ])
//     .then((val) => console.log(`Winner: ${val}`))
//     .catch(console.log);

console.log(`Promise any: return the first promise resolved or fulfilled`);
Promise.any([
    new Promise((res, rej) => setTimeout(() => res(20), 3000)),
    new Promise((res, rej) => setTimeout(() => rej('me muiro'), 2000)),
    new Promise((res, rej) => setTimeout(() => rej('oh my'), 1000)),
])
    .then((val) => console.log(`First fulfilled: ${val}`))
    .catch((err) => console.log(`GG: ${err}`)); // never use the value of rejected promises

// Async & await
console.log(`---- Async / Await ---`);
// async return implicit Promise
async function tester() {
    // return a fulfilled Promise
    return 14;
}
console.log(tester());

async function tester2() {
    try {
        const val = await new Promise((res, rej) =>
            setTimeout(() => rej(new Error('something went wrong')), 1000)
        );
        console.log(val);
    } catch (err) {
        console.log(`Oh my: ${err}`);
    }
}

tester2();

// You can combine syntax if you want
async function tester3() {
    return await new Promise((res, rej) =>
        setTimeout(() => rej(new Error('something went wrong')), 1000)
    );
}

tester3()
    .then(console.log)
    .catch((error) => console.log(`gg: ${error}`));
