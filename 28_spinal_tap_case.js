// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // replace input str with 2 capture groups
  // find matches where LW letter is next to UC letter, then add dash in between
  // first group (lower case a-z). second group (upper case A-Z)
  // match all occurances of this pattern /g
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  // replace any spaces or underscores with dash
  return str.replace(/\s|_/g, '-');
}

spinalCase('This Is Spinal Tap');