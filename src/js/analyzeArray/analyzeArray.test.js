/* global test, expect, describe */
import analyzeArray from "./analyzeArray.js";

describe("analyze array", () => {
  test("must return object with the necessary parameters", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("should return empty obj if array has not a number element", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, ""])).toEqual({});
  });
  test("should return empty obj if param is not an array", () => {
    expect(analyzeArray(123)).toEqual({});
  });
  test("should return empty obj if array is empty", () => {
    expect(analyzeArray([])).toEqual({});
  });
});
