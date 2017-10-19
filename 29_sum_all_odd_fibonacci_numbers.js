// Given a positive integer num, return the sum of all odd Fibonacci numbers
// that are less than or equal to num.

// sum of Fibonacci values array 
function sumFibs(num) {
  // higher order functions, functions that invoke other functions
  var list = fibsUpTo(num);
  // keep track of sum
  var total = 0;
  // iterate through array 
  for (var i = 0; i < list.length; i++) {
    // if current list element's value is odd..
    if (list[i] % 2 === 1) {
      // add to total
      total += list[i];
    }
  }
  return total;
}

// gather Fibonacci values inside array
function fibsUpTo(num) {
  // base case 
  if (num === 1) {
    return [1, 1];
  }
  // if input num > 1, create array with base case to work from 
  var list = [1, 1];
  
  while(true) {
    // create variable to build on list array
    // add last element to second to last element of list array 
    // cont until the last element of the list array is equal to the input num 
    var next = list[list.length-1] + list[list.length-2];
    
    // check if last element of the list array is equal to the input num
    if (next <= num) {
      // push next value to list array 
      list.push(next);
    } else {
      return list;
    }
  }
}
fibsUpTo(3);