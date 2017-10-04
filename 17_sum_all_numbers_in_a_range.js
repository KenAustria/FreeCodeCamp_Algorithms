function sumAll(arr) {
  // find max number in array
  var maxNum = Math.max.apply(null, arr);
  // find min number in array
  var minNum = Math.min.apply(null, arr);
  // used to get range for the for-loop
  var range = maxNum - minNum;
  // keeps track of everytime a number is added  
  var total = 0;
  for (var i = 1; i < range; i++) {
    // 
    total = total + minNum + i;
    // 2 = 0 + 1 + 1
    // 5 = 2 + 1 + 2
    // 10 = 5 + 1 + 3
  }
  
  // adding min and max to total and return
  total = total + maxNum + minNum;
  return total;
}

sumAll([1, 4]);