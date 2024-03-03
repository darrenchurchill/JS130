/**
 * JS130 Lesson 2
 * Assignment 11 Practice Problems
 * Immediately Invoked Function Expressions
 * Question 7
 *
 * Refactor the solution from Problem 4 using recursion. Bear in mind that
 * named IIFEs can be referenced by those same functions. That is, you can call
 * a function's name in the body of the IIFE.
 *
 * Problem 4, repeated below:
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

(function countdown(number) {
  console.log(number);
  if (number > 0) countdown(number - 1);
})(7);
