/**
 * JS130 Lesson 2
 * Assignment 9 Practice Problems
 * Closures and Private Data
 * Question 2
 *
 * In this problem, we'll build a simple todo list program that uses the
 * techniques we've seen in this assignment.
 *
 * Write a `makeList` function that creates and returns a new function that
 * implements a todo list. The returned function should have the following
 * behavior:
 *
 * - When called with an argument that is not already on the list, it adds the
 *   argument to the list.
 * - When called with an argument that is already on the list, it removes the
 *   element from the list.
 * - When called without arguments, it prints all of the items on the list. If
 *   the list is empty, it prints an appropriate message.
 *
 * ```js
 * > let list = makeList();
 * > list();
 * The list is empty.
 *
 * > list("make breakfast");
 * make breakfast added!
 *
 * > list("read book");
 * read book added!
 *
 * > list();
 * make breakfast
 * read book
 *
 * > list("make breakfast");
 * make breakfast removed!
 *
 * > list();
 * read book
 * ```
 *
 */
"use strict";

function makeList() {
  let todoList = [];

  return function(item) {
    if (!item) {
      if (todoList.length === 0) {
        console.log("The list is empty.");
      } else {
        todoList.forEach((item) => console.log(item));
      }
      return;
    }

    let itemIdx = todoList.indexOf(item);

    if (itemIdx === -1) {
      todoList.push(item);
      console.log(`${item} added!`);
    } else {
      console.log(`${todoList.splice(itemIdx, 1)[0]} removed!`);
    }
  };
}

let list = makeList();
list();

list("make breakfast");
list("read book");

list();

list("make breakfast");

list();

list("read book");

list();
