// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // create host array
  var newArray = [];
  
  // for each item passed into our function, it gets asked if it is not an array
  function flatten(arr) {
    arr.forEach(function(item) {
      // if not an array
      if (!Array.isArray(item)) {
        // push into newArray 
        newArray.push(item);
      } else {
        // flatten asks if item is an array, then process starts again
        flatten(item);
      }
    });
    // until all items are not arrays and we reach the end of the forEach loop.
  }
  // call function 
  flatten(arr);
  // return statement
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

/*
FIRST ITEM IN STEAMROLLARRAY
arr[0]; = 1
  // not an array
newArray.push(item)
  // push to newArray
var newArray = [1];

SECOND ITEM IN STEAMROLLARRAY
arr[1] = [2]
  // is an array
flatten(item);
  // flatten([2])
  // pass item as flatten(arr)
  // flatten function runs again, but only on [2], instead of whole steamrollArray
  // access item inside that array, which is 2
  // 2 is not an array
  // push to newArray
var newArray = [1,2];
  
THIRD ITEM IN STEAMROLLARRAY
arr[2] = [3,[[4]]]
  // is an array
flatten(item);  
  // flatten([3])
  // pass item as flatten(arr)
  // flatten function runs again, but only on [3], instead of whole steamrollArray
  // access item inside that array, which is 3
  // 3 is not an array
  // push to newArray
var newArray = [1,2,3];
  // flatten([[4]])
  // pass item as flatten(arr)
  // flatten function runs again, but only on [[4]], instead of whole steamrollArray
  // access item inside that array, which is [4]
  // [4] is an array
  // flatten([4])
  // pass item as flatten(arr)
  // flatten function runs again, but only on [4], instead of whole steamrollArray
  // access item inside that array, which is 4
  // 4 is not an array
  // push to newArray
var newArray = [1,2,3,4];
*/