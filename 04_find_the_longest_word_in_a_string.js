function findLongestWord(str) {
  // split str argument into an array, separting words
  var strSplit = str.split(' ');
  // hold length of the longest word
  var longestWord = 0;

  // iterate through array 
  for(var i = 0; i < strSplit.length; i++){
    // if current word is longer than the word it's compared with
    if(strSplit[i].length > longestWord){
      // that current word becomes the new longest word 
      longestWord = strSplit[i].length;
     }
  }
  
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
