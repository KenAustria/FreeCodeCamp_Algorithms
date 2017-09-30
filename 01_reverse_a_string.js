// Reverse the provided string.

function reverseString(str) {
  // host reversed string  
  var newString = "";
  // iterate through input from last index to first
  for (var i = str.length - 1; i >= 0; i--) {
    // push index character to host string   
    newString += str[i];
  }
  return newString;
}
reverseString('hello');
