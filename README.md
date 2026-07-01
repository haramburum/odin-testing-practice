# Testing Practice (The Odin Project)

This repository contains a collection of basic JavaScript functions developed using **Test-Driven Development (TDD)** principles with **Jest** as part of The Odin Project curriculum.

## 📚 Course

This project was built as part of the **JavaScript Path** on The Odin Project.  
👉 [The Odin Project: Testing Practice Lesson](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)

## 🚀 Projects & Features

The project includes implementations and comprehensive test suites for the following functions:

* **`capitalize(string)`** — Returns a string with the first character capitalized.
* **`reverseString(string)`** — Takes a string and returns it reversed.
* **`calculator`** — An object with basic arithmetic methods: `add`, `subtract`, `divide`, and `multiply`. Includes robust type-checking and custom division-by-zero handling.
* **`caesarCipher(string, shift)`** — Shifts each character in a string by a given factor. Features edge-case handling for wrapping (z to a), case preservation, negative shifts, and punctuation/space retention.
* **`analyzeArray(array)`** — Takes an array of numbers and returns an object with `average`, `min`, `max`, and `length`. Fully immutable implementation without side effects.

## 🛠️ Testing Focus

The main goal of this exercise was to practice robust testing, including:
* **Happy Paths:** Verifying correct outputs for standard inputs.
* **Edge Cases:** Handling wrapping in ciphers, float numbers in math (`toBeCloseTo`), and empty inputs.
* **Input Validation:** Writing defenses against wrong data types (e.g., passing objects/strings where numbers or arrays are expected).

## 💻 How to Run

1. Install dependencies::
   ```bash
   npm install

2. Run the test suite::
   ```bash
   npm test
