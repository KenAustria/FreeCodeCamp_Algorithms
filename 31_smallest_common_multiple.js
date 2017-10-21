/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 as well as by all sequential numbers in the range between these parameters.
 
The range will be an array of two numbers that will not necessarily be in numerical order.
*/
function smallestCommons(arr) {
  // determine maximum value of input arr
  var max = Math.max(arr[0], arr[1]);
  // determine mininum value of input arr
  var min = Math.min(arr[0], arr[1]);
  // create counter array
  var arrCount = [];

  // iterate through input arr, from min to max, to fill arrCount
  for (var i = min; i <= max; i++) {
    arrCount.push(i);
  }

  // set starting point    
  var a = arrCount[0];
  
  // iterate through arrCount, finding the LCM for each and returning the last LCM
  for (var j = 1; j < arrCount.length; j++) {
    var b = arrCount[j];
    // calculate the gcd by calling the function
    var c = gcd(a, b);
    // calculate the lcm by calling the function
    var d = lcm(a, b, c);
    // in the first loop, d=LCM for index 0 and 1, and we need the LCM of d and index
    // set a as d, as the new starting point
    a = d;
  }
  return a;
}

// function calculating GCD
function gcd(x, y) {
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}


// function calculating the LCM with the GCD
function lcm(a, b, c) {
  return a * b / c;
}

smallestCommons([1, 5]);