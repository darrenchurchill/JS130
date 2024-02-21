/**
 * JS130 Lesson 1
 * Assignment 3 Practice Problems
 * Emulating Iteration Methods
 * Question 3
 *
 * Write a function that acts like the built-in `Array.prototype.reduce` method.
 * For this problem, you only need to emulate the most basic behavior:
 * reducing the elements of an array down to a single value based on the
 * original array values. The result may be a primitive value, an object, or
 * another array. You don't have to include the `thisArg` or support multiple
 * arguments to the callback function, but feel free to add them if you like.
 *
 * Note that the function should not mutate the input array.
 * Don't forget to account for the initialValue argument!
 *
 */

function reduce(arr, callback, initialValue) {
  let result = initialValue;
  let idx = 0;

  if (result === undefined && arr.length > 0) {
    result = arr[0];
    idx += 1;
  }

  while (idx < arr.length) {
    result = callback(result, arr[idx]);
    idx++;
  }

  return result;
}


let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
console.log(reduce(numbers, (prod, number) => prod * number)); // 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
console.log(reduce([], (accum, number) => accum + number)); // => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

// My own test cases:
console.log(reduce([2], (acc, num) => acc * num)); // 2
console.log(reduce([2], (acc, num) => acc * num, 10)); // 20
