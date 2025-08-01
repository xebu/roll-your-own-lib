// 01-manual-test.js

// 🚫 These functions are intentionally broken.
// 🧪 Your job is to write manual tests (in this same file) that expose and fix the bugs.
// ✅ You may invent your own test helpers (e.g. assertEqual, expect), but may not use any libraries.

function sum(a, b) {
  return a - b; // ❌ bug: should add
}

function subtract(a, b) {
  return a + b; // ❌ bug: should subtract
}

function multiply(a, b) {
  return a / b; // ❌ bug: should multiply
}

function divide(a, b) {
  return a * b; // ❌ bug: should divide (and handle divide-by-zero if needed)
}

// Write your tests below 👇
// Example starting point (optional):
//
// const result = sum(2, 2);
// if (result !== 4) throw new Error(`Expected 4 but got ${result}`);
