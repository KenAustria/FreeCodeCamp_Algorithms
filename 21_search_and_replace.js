/*
Perform a search and replace on the sentence using the arguments provided and
return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
*/

function myReplace(str, before, after) {
  /* if first letter in before string is lowercased
  and first letter in after string is uppercased */
  
  // if first letter in before string is equal to itself, but capitalized
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    // uppercase the first letter in the after string
    // then add the rest of the letters of the after string 
    str = str.replace(before, after.charAt(0).toUpperCase(0) + after.slice(1));
    // means everything is lowercased so ignore it
  } else {
    // replace before string with after string 
    str = str.replace(before, after);
  }
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
