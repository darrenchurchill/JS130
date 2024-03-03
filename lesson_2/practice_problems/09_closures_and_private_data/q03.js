/**
 * JS130 Lesson 2
 * Assignment 9 Practice Problems
 * Closures and Private Data
 * Question 3
 *
 * Modify the `makeList` function so that it returns an object that provides the
 * interface shown below, including the `add`, `list`, and `remove` methods.
 *
 * ```js
 * > let list = makeList();
 * > list.add("peas");
 * peas added!
 *
 * > list.list();
 * peas
 *
 * > list.add("corn");
 * corn added!
 *
 * > list.list();
 * peas
 * corn
 *
 * > list.remove("peas");
 * peas removed!
 *
 * > list.list();
 * corn
 * ```
 *
 */
"use strict";

// eslint-disable-next-line max-lines-per-function
function makeList() {
  return {
    todoList: [],

    list() {
      if (this.todoList.length === 0) {
        console.log("The list is empty.");
      } else {
        this.todoList.forEach((item) => console.log(item));
      }
    },

    add(item) {
      if (!item) return;
      this.todoList.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let itemIdx = this.todoList.indexOf(item);
      if (itemIdx >= 0) {
        console.log(`${this.todoList.splice(itemIdx, 1)[0]} removed!`);
      }
    }
  };
}

let list = makeList();

list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
