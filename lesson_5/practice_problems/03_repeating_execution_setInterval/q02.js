/**
 * JS130 Lesson 5
 * Assignment 3 Practice Problems
 * Repeating Execution with `setInterval`
 * Question 2
 *
 * Extend the code from the previous problem with a `stopCounting` function that
 * stops the logger when called.
 */

function startCounting(stop = 10) {
  let cur = 0;
  return setInterval(() => {
    cur += 1;
    console.log(cur);
  }, 1000);
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();
setTimeout(() => stopCounting(id), 10000);
