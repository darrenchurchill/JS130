/* eslint-disable max-lines-per-function */
"use strict";

const Car = require("./car");

describe("The Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  test("car wheels NOT undefined", () => {
    expect(car.wheels).not.toBeUndefined();
  });

  test("two new cars are equal objects", () => {
    let car2 = new Car();
    expect(car).toEqual(car2);
  });

  test("does not have doors", () => {
    expect(car.doors).toBeUndefined();
  });

  test("raises an error when called drive on it", () => {
    expect(() => car.drive()).toThrow();
  });

  test("raises a TypeError when called drive on it", () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  test("a new car has no mileage info", () => {
    expect(car.mileageInfo).toBeNull();
  });

  test("wheels is truthy", () => {
    expect(car.wheels).toBeTruthy();
  });

  test("array contains car", () => {
    let arr = [1, 2, 3];
    arr.push(car);

    expect(arr).toContain(car);
  });
});
