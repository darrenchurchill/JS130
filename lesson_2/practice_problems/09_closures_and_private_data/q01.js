/**
 * JS130 Lesson 2
 * Assignment 9 Practice Problems
 * Closures and Private Data
 * Question 1
 *
 * Create a function named `makeCounterLogger` that takes a number as an
 * argument and returns a function. When we invoke the returned function with a
 * second number, it should count up or down from the first number to the second
 * number, logging each number to the console:
 *
 * ```js
 * > let countlog = makeCounterLogger(5);
 * > countlog(8);
 * 5
 * 6
 * 7
 * 8
 *
 * > countlog(2);
 * 5
 * 4
 * 3
 * 2
 * ```
 *
 */
"use strict";

function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    let count = Math.abs(firstNumber - secondNumber);
    let sign = (secondNumber - firstNumber) > 0 ? 1 : -1;

    for (let cur = 0; cur <= count; cur += 1) {
      console.log(firstNumber + (sign * cur));
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
