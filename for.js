const READLINE = require("readline-sync");

/**** Problem 1 ****
Given a string of any length, return true if it contains at least one space.

Examples:
containsSpace("star wars") → true
containsSpace("     ") → true
containsSpace("") → false
*/

function containsSpace(str) {
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === " ") {
      return true;
    }
  }
  return false;
}

// test your function below
console.log("containsSpace() test");
console.log(containsSpace("star wars"));
console.log(containsSpace("     "));
console.log(containsSpace(""));

/**** Problem 2 ****
Given a string of any length, return the total number of times "a" or "A" appears.

Examples:
countAs("happy") → 1
countAs("lady gaga") → 3
countAs("") → 0
*/

function countAs(str) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === "a" || str.charAt(i) === "A") {
      count++;
    }
  }
  return count;
}

// test your function below
console.log("countAs() test");
console.log(countAs("happy"));
console.log(countAs("lady gaga"));
console.log(countAs(""));

/**** Problem 3 ****
Given a string of any length, return a new string that is a copy of that string in reverse.

Examples:
reverseString("banana") → "ananab"
reverseString("Was it a car or a cat I saw?") → "?was I tac a ro rac a ti saW"
reverseString("doorag") → "garood"
*/

function reverseString(str) {
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

// test your function below
console.log("reverseString() test");
console.log(reverseString("banana"));
console.log(reverseString("Was it a car or a cat I saw?"));
console.log(reverseString("doorag"));
