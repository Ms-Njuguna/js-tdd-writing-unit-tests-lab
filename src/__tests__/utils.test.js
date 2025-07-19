// Your tests here
// utils.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a simple palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for a palindrome with mixed case like 'RaceCar'", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("no!on")).toThrow("Only alphabetic characters are allowed");
  });

  it("throws an error when input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
