// Translate the provided string to pig latin.

function translatePigLatin(str) {
  // split string into array
  var letters = str.split("");
  // RegEx for strings that contain 'aeiou'
  var vowelRegEx = /[aeiou]/;
  
  // test the first character of the array
  if (vowelRegEx.test(letters[0])) {
    // upon matching, add to the end of the string 
    return letters.join("") + "way";
  }
  
  // for cases not matching vowels
  while(true) {
    // if regex doesn't contain a vowel at first char 
    if (!vowelRegEx.test(letters[0])) {
      // push it to the end and splice at first letter 
      letters.push(letters.splice(0, 1)); 
    } else {
      // breaks upon finding a vowel
      break;
    }
  }
  
  // adds 'ay'to the end, and joins string back together 
  str = letters.join("") + "ay";
  
  return str;
}

translatePigLatin("consonant");