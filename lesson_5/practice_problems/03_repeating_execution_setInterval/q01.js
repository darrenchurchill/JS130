/**
 * JS130 Lesson 5
 * Assignment 3 Practice Problems
 * Repeating Execution with `setInterval`
 * Question 1
 *
 * Write a function named `startCounting` that logs a number to the console
 * every second, starting with `1`. Each output number should be one greater
 * than the previous one.
 */

function startCounting(stop = 10) {
  let cur = 0;
  let id = setInterval(() => {
    cur += 1;
    console.log(cur);
    if (cur >= stop) clearInterval(id);
  }, 1000);
}

startCounting();
