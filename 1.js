// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"


function stringReverse(str) {
  return str.split("").reverse().join("");
}

console.log(stringReverse("hello")); 