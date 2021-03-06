/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

function confirmEnding(str, target) {
  /* If the target.length is negative, the substr() method
  will start the counting from the end of the string */
  // return boolean
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
