// Polyfills
// Use case: if we have an old browser that did not have access to push function

// We can define push function if Array prototype doent has it.
Array.prototype.mypush = function(value) {
    console.log(`push invoked`);
    console.log(this.length);
    this[this.length] = value;
}

const arr = [1,2,3];
arr.mypush(4);
console.log(arr);
arr.mypush(5);
console.log(arr);

// Polyfills typically used in this way
if (Array.prototype.push == undefined) {
    Array.prototype.push = function(value) {
        console.log(`push invoked`);
        console.log(this.length);
        this[this.length] = value;
    }   
}