/* global test, expect, describe */
import calculator from "./calculator.js";

describe("calculator", () => {
  describe("add", () => {
    test("add two numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
    test("return 0 if params are not a numbers", () => {
      expect(calculator.add("1", 2)).toBe(0);
      expect(calculator.add(1, "2")).toBe(0);
    });
  });

  describe("subtract", () => {
    test("subtract two numbers", () => {
      expect(calculator.subtract(3, 2)).toBe(1);
    });
    test("return 0 if params are not a numbers", () => {
      expect(calculator.subtract("1", 2)).toBe(0);
      expect(calculator.subtract(1, "2")).toBe(0);
    });
  });

  describe("multiply", () => {
    test("multiply two numbers", () => {
      expect(calculator.multiply(3, 2)).toBe(6);
    });
    test("return 0 if params are not a numbers", () => {
      expect(calculator.multiply("1", 2)).toBe(0);
      expect(calculator.multiply(1, "2")).toBe(0);
    });
  });

  describe("divide", () => {
    test("divide two numbers", () => {
      expect(calculator.divide(4, 2)).toBe(2);
    });
    test("handle zero division", () => {
      expect(calculator.divide(4, 0)).toBe("Error: zero division!");
    });
    test("return 0 if params are not a numbers", () => {
      expect(calculator.divide("1", 2)).toBe(0);
      expect(calculator.divide(1, "2")).toBe(0);
    });
  });
});
