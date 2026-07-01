/* global test, expect, describe */
import caesarCipher from "./caesarCipher.js";

describe("caesar cipher", () => {
  test("return correct shifted string", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });
  test("should wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("case preservation", () => {
    expect(caesarCipher("aBc", 1)).toBe("bCd");
  });

  describe("string parameter wrong input", () => {
    test("empty string should return empty string", () => {
      expect(caesarCipher("", 1)).toBe("");
    });
    test("non-string should return empty string", () => {
      expect(caesarCipher({}, 1)).toBe("");
      expect(caesarCipher([], 1)).toBe("");
      expect(caesarCipher(1, 1)).toBe("");
    });
  });

  describe("shift parameter wrong input", () => {
    test("negative number must work correctly", () => {
      expect(caesarCipher("abc", -2)).toBe("yza");
    });
    test("shifting more than 26", () => {
      expect(caesarCipher("abc", 32)).toBe("ghi");
    });
    test("return empty string if shift param is not an integer", () => {
      expect(caesarCipher("abc", "asd")).toBe("");
      expect(caesarCipher("abc", {})).toBe("");
      expect(caesarCipher("abc", [])).toBe("");
    });
  });
});
