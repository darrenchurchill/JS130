/**
 * JS130 Lesson 2
 * Assignment 11 Practice Problems
 * Immediately Invoked Function Expressions
 * Question 4
 *
 * Consider the following code and output:
 *
 * ```js
 * > countdown(7);
 * 7
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1
 * 0
 * ```
 *
 * Replace the invocation of `countdown` with an IIFE that produces the same
 * results.
 */
"use strict";

(function(start) {
  for (let cur = start; cur >= 0; cur -= 1) {
    console.log(cur);
  }
})(7);
