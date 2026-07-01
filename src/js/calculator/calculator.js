const calculator = {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return 0;
    }
    return a + b;
  },

  subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return 0;
    }
    return a - b;
  },

  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return 0;
    }
    return a * b;
  },

  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return 0;
    }

    if (b === 0) return "Error: zero division!";

    return a / b;
  }
};

export default calculator;
