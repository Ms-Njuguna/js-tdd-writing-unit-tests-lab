// Your code here
// utils.js
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (word.length === 0) return false; // ✅ move this before the regex

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Only alphabetic characters are allowed");
  }

  const lower = word.toLowerCase();
  const reversed = lower.split('').reverse().join('');

  return lower === reversed;
}

