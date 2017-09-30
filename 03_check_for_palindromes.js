/*
Return true if the given string is a palindrome, a word or sentence that's spelled 
the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
  // remove unwanted characters
  var re = /[\W_]/g;
  // lowercase string, then remove spaces 
  var lowRegStr = str.toLowerCase().replace(re, '');
  // chaining method to reverse a string 
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // return boolean 
  return reverseStr === lowRegStr;
}

palindrome("eye");
