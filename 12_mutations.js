function mutation(arr) {
  // Lowercase string inputs for comparison purposes
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  
  // Iterate through word2 to compare with word1
  // is value of word1 inside of word2, assigned to value variable
  for (var i = 0; i < word2.length; i++) {
    // value holder for character
    var value = word1.indexOf(word2[i]);
    // -1 means it is not contained in word1
    if (value === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
