/**
 * JS130 Lesson 2
 * Assignment 13 Practice Problems
 * Shorthand Notation
 * Question 18
 *
 * Write a function that takes 5 string arguments, and returns an object with 3
 * properties:
 *
 * - `first`: the first argument
 * - `last`: the last argument
 * - `middle`: the middle 3 arguments as a sorted array
 *
 * After writing the function, write some code to call the function. The
 * arguments you provide should come from an array. You should create local
 * variables named `first`, `last`, and `middle` from the return value.
 *
 * Use shorthand syntax wherever you can.
 *
 */
"use strict";

function sortMiddle(first, second, third, fourth, fifth) {
  return {
    first,
    middle: [second, third, fourth].sort(),
    last: fifth,
  };
}

let numbers = ["1", "4", "3", "2", "5"];
let { first, middle, last } = sortMiddle(...numbers);
console.log({first, middle, last});

let letters = ["a", "d", "c", "b", "e"];
({ first, middle, last } = sortMiddle(...letters));
console.log({first, middle, last});
