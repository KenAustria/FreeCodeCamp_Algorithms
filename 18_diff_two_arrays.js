/* 
Compare two arrays and return a new array with any items only found
in one of the two given arrays, but not both. In other words, return
the symmetric difference of the two arrays.
*/


function diffArray(arr1, arr2) {
  // create host array
  var holderArray = [];
  
  // iterate through first array
  for (var i = 0; i < arr1.length; i++) {
    // if second array doesn't contain any one of our values in first array 
    if (arr2.indexOf(arr1[i]) === -1) {
      // push to host array 
      holderArray.push(arr1[i]);
    }
  }
  
  // if each array has a unique word in it, check both arrays
  for (var j = 0; j < arr2.length; j++) {
    // if it doesn't contain our second array item
    if (arr1.indexOf(arr2[j]) === -1) {
      // push to host array
      holderArray.push(arr2[j]);
    }
  }
  
  return holderArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);