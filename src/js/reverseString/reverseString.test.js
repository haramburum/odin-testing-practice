/* global test, expect, describe */
import reverseString from "./reverseString.js";

describe("reverse string function", () => {
  test("should return reverse string", () => {
    expect(reverseString("reverse")).toBe("esrever");
  });

  test("should return empty string when zero string length param", () => {
    expect(reverseString("")).toBe("");
  });

  test("should return empty string when non string param", () => {
    expect(reverseString({key: 1})).toBe("");
    expect(reverseString([1,2])).toBe("");
    expect(reverseString(1)).toBe("");
  });

  test("handle long string with spaces and punctuation marks", () => {
    expect(reverseString("Hello, my name is Andrey!")).toBe("!yerdnA si eman ym ,olleH");
  });
});
