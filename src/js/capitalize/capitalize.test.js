/* global test, expect, describe */
import capitalize from "./capitalize.js";

describe("capitalize function", () => {
  test("should return a capitalize string", () => {
    expect(capitalize("capitalize")).toBe("Capitalize");
  });

  test("must return empty string when param is empty or falsy", () => {
    expect(capitalize("")).toBe("");
  });

  test("handle uppercase string", () => {
    expect(capitalize("HELLO")).toBe("Hello");
  });

  test("handle non-string value", () => {
    expect(capitalize(123)).toBe("");
    expect(capitalize({ key1: 1, key2: "2" })).toBe("");
    expect(capitalize([1, 2, 3])).toBe("");
  });

  test("handle single character", () => {
    expect(capitalize("g")).toBe("G");
  });
});
