// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  // create alphabet string
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  // split string into character array
  alphabet = alphabet.split("");
  // split input str into array
  str = str.split("");
  
  // if the first letter in input str is not an 'a', return undefined
  if (str[0] != 'a') {
    return undefined;
  }
  
  // iterate through input str
  for (var i = 0; i < str.length; i++) {
    // if current letter in input string is not in alphabet array
    if (str[i] != alphabet[i]) {
      // return currenet alphabet letter 
      return alphabet[i];
    }
  }
  
  // if both if statements do not apply, just return the input str
  return str;
}

fearNotLetter("abce");