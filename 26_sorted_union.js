// Write a function that takes two or more arrays and returns
// a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr1, arr2, arr3) {
  // create duplicate array from original array
  var placeHolder = arr1;
  
  // iterate through length of arguments
  for (var i = 0; i < arguments.length; i++) {
    // iterates through current index value of arguments
    for (var j = 0; j < arguments[i].length; j++) {
      // check if array contains the value of arguments 
      // return -1 if it does not 
      if (placeHolder.indexOf(arguments[i][j]) === -1) {
        // add it to the end of the placeholder 
        placeHolder.push(arguments[i][j]);
      }
    }
  }
  // set original array equal to altered array
  arr1 = placeHolder;
  return arr1;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);