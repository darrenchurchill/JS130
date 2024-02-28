/**
 * JS130 Lesson 2
 * Assignment 8 Practice Problems
 * Closures
 * Question 6
 *
 * Write a program that uses two functions, `add` and `subtract`, to manipulate
 * a running total. When you invoke either function with a number, it should add
 * or subtract that number from the running total and log the new total to the
 * console. It should work like this:
 *
 * ```js
 * add (1);       // 1
 * add(42);       // 43
 * subtract(39);  // 4
 * add(6);        // 10
 * ```
 *
 */

let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

add(1);
add(42);
subtract(39);
add(6);
