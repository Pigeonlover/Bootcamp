// Tests

import { describe, expect, test } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";

// findMaxValue
//
// findMaxValue([3, 7, 2, 8, 5]); // 8
// findMaxValue([0]); // 0
// findMaxValue([100, 200, 300]); // 300
// findMaxValue([1, 1, 1, 1]); // 1
// findMaxValue([Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]); // Number.MAX_SAFE_INTEGER
//

describe("findMaxValue", function () {
  test("test find max value", function () {
    const result = findMaxValue([3, 7, 2, 8, 5]);
    const expectedResult = 8;

    expect(result).toBe(expectedResult);
  });

  test("test find max value", function () {
    const result = findMaxValue([3, 7, 2, 8, 5]);
    const expectedResult = 8;

    expect(result).toBe(expectedResult);
  });

  test("test find max value", function () {
    const result = findMaxValue([0]);
    const expectedResult = 0;

    expect(result).toBe(expectedResult);
  });

  test("test find max value", function () {
    const result = findMaxValue([100, 200, 300]);
    const expectedResult = 300;

    expect(result).toBe(expectedResult);
  });

  test("test find max value", function () {
    const result = findMaxValue([1, 1, 1, 1]);
    const expectedResult = 1;

    expect(result).toBe(expectedResult);
  });

  test("test find max value", function () {
    const result = findMaxValue([
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
    ]);
    const expectedResult = Number.MAX_SAFE_INTEGER;

    expect(result).toBe(expectedResult);
  });
});

// factorial
// factorial(1); // 1
// factorial(10); // 3628800
// factorial(null); // null
// factorial(undefined); // null
//

describe("factorial", function () {
  test("test factorial", function () {
    const result = factorial(1);
    const expectedResult = 1;

    expect(result).toBe(expectedResult);
  });

  test("test factorial", function () {
    const result = factorial(10);
    const expectedResult = 3628800;

    expect(result).toBe(expectedResult);
  });

  test("test factorial", function () {
    const result = factorial(null);
    const expectedResult = null;

    expect(result).toBe(expectedResult);
  });

  test("test factorial", function () {
    const result = factorial(undefined);
    const expectedResult = null;

    expect(result).toBe(expectedResult);
  });
});

//
// areArraysEqual
// areArraysEqual([true, false], [true, false]); // true
// areArraysEqual([1, 2, 3], [1, 2, "3"]); // false
// areArraysEqual([null], [null]); // true
// areArraysEqual([1, 2, 3], [1, 2]); // false
// areArraysEqual("not an array", [1, 2, 3]); // false
//

describe("areArraysEqual", function () {
  test("test are arrays equal", function () {
    const result = areArraysEqual([true, false], [true, false]);
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  test("test are arrays equal", function () {
    const result = areArraysEqual([1, 2, 3], [1, 2, "3"]);
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });

  test("test are arrays equal", function () {
    const result = areArraysEqual([null], [null]);
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  test("test are arrays equal", function () {
    const result = areArraysEqual([1, 2, 3], [1, 2]);
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });

  test("test are arrays equal", function () {
    const result = areArraysEqual("not an array", [1, 2, 3]);
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });
});

// toTitleCase
toTitleCase(""); // ""
toTitleCase("a b c"); // "A B C"
toTitleCase("multiple   spaces"); // "Multiple   Spaces"
toTitleCase("already Title Case"); // "Already Title Case"
toTitleCase(null); // ""
findMaxValue([]); // null
findMaxValue([-10, -5, -1]); // -1
findMaxValue("not an array"); // null

factorial(5); // 120
factorial(0); // 1
factorial(-3); // null
factorial("5"); // null

areArraysEqual([1, 2, 3], [1, 2, 3]); // true
areArraysEqual([1, 2, 3], [3, 2, 1]); // false
areArraysEqual([], []); // true
areArraysEqual([1, 2], [1, 2, 3]); // false

toTitleCase("hello world"); // "Hello World"
toTitleCase("JAVASCRIPT IS FUN"); // "Javascript Is Fun"
toTitleCase("123 testing titles"); // "123 Testing Titles"
toTitleCase(12345); // ""
