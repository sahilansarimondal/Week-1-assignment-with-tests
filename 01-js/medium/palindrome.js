/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let noSpecialChar = str.replace(/[^a-zA-Z0-9]/g, "");
  let newS = noSpecialChar.toLowerCase();

  for (let i = 0; i < newS.length; i++) {
    if (newS[i] != newS[newS.length - 1 - i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
