// Find my place in this sorted array.

function getIndexToIns(arr, num) {
  // counter variable for results
  var count = 0;
  
  // how many numbers in the array are smaller than the numbers provided
  // if arr value - number returns negative, it is a smaller number 
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] - num < 0) {
      count = count + 1;
    }
  }
  
  return count;
}

getIndexToIns([40, 60], 50);

