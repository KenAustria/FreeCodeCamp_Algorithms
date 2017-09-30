/*
Write a function that splits an array (first argument) into groups the length
of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // create empty array to push to
  var newArr = [];
  // set count variable
  var count = 0;
  // while loop counter and increment index
  while (count < arr.length) {
    // slice values between count and size, into empty array
    newArr.push(arr.slice(count, count+size));  
    // increase count
    count = count + size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
