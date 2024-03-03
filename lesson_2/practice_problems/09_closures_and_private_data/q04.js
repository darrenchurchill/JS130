/**
 * JS130 Lesson 2
 * Assignment 9 Practice Problems
 * Closures and Private Data
 * Question 4
 *
 * Notice that our solution to the previous problem lets us access the array of
 * items through the `todoList` property. This wasn't the case in the
 * single-function implementation. Update the implementation from the previous
 * problem so that it retains the use of an object with methods but prevents
 * outside access to the items the object stores internally.
 *
 */
"use strict";

// eslint-disable-next-line max-lines-per-function
function makeList() {
  let todoList = [];

  return {
    list() {
      if (todoList.length === 0) {
        console.log("The list is empty.");
      } else {
        todoList.forEach((item) => console.log(item));
      }
    },

    add(item) {
      if (!item) return;
      todoList.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let itemIdx = todoList.indexOf(item);
      if (itemIdx >= 0) {
        console.log(`${todoList.splice(itemIdx, 1)[0]} removed!`);
      }
    }
  };
}

let list = makeList();
console.log(list.todoList);

list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
