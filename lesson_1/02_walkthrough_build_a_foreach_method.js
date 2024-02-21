/**
 * JS130 Lesson 1
 * Assignment 2: Walkthrough: Build a forEach Method
 */

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

function forEach(arr, callback, context) {
  for (let idx = 0; idx < arr.length; idx++) {
    callback.call(context, arr[idx], idx, arr);
  }
}

let arr = [1, 2, 3, 4];

console.log("Built-in Array.prototype.forEach():");
arr.forEach((value) => console.log(value * value));

console.log("");
console.log("Our forEach():");
forEach(arr, (value) => console.log(value * value));

console.log("");
console.log("Testing execution context:");
let foo = new Foo("Item: ");

console.log("Built-in Array.prototype.forEach():");
arr.forEach(foo.showItem, foo);

console.log("");
console.log("Our forEach():");
forEach(arr, foo.showItem, foo);

console.log("");
console.log("Testing index and array arguments:");
console.log("Our forEach():");
forEach(arr, (val, idx, arr) => {
  console.log(`After ${val} comes ${arr[idx + 1]}`);
});
