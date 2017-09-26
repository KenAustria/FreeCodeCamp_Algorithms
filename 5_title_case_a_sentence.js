function titleCase(str) {
  // lower case then split the string
  // map through array 
  return str.toLowerCase().split(' ').map(function(word) {
    // upper case each index[0] character of every element 
    // join the new array into a string
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

titleCase("I'm a little tea pot");
