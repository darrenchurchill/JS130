/**
 * JS130 Lesson 2
 * Assignment 8 Practice Problems
 * Closures
 * Question 5
 *
 * Write a function named `makeMultipleLister` that you can call with a number
 * as an argument. The function should return a new function, that, when
 * invoked, logs every positive integer multiple of that number less than 100.
 * It should work like this:
 *
 * ```js
 * let lister = makeMultipleLister(17);
 * lister();
 * // => 17
 * // => 34
 * // => 51
 * // => 68
 * // => 85
 * ```
 *
 */

function makeMultipleLister(number) {
  return function() {
    let cur = number;

    while (cur < 100) {
      console.log(cur);
      cur += number;
    }
  };
}

let lister = makeMultipleLister(17);
lister();
