/**
 * JS130 Lesson 5
 * Assignment 2 Practice Problems
 * Asynchronous Execution with `setTimeout`
 * Question 1
 *
 * Write a JavaScript function named `delayLog` that loops through the numbers
 * from 1 to 10, and logs each number after that number of seconds. It should
 * log `1` after 1 second, `2` after 2 seconds, and so on.
 *
 * ```js
 * > delayLog();
 * 1  // 1 second later
 * 2  // 1 second later (2 seconds after start)
 * 3  // 1 second later (3 seconds after start)
 * 4  // etc...
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10
 * ```
 */

function delayLog() {
  for (let count = 1; count <= 10; count += 1) {
    setTimeout(() => console.log(count), 1000 * count);
  }
}

delayLog();
