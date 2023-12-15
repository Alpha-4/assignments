/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  siz = str.length - 1;
  for (i = 0; i < siz; i++) {
    while (!str[i].match(/[A-z]/i)) i++;
    while (!str[siz].match(/[A-z]/i)) siz--;
    if (str[i].toLowerCase() != str[siz--].toLowerCase()) return false;
  }
  return true;
}

module.exports = isPalindrome;
