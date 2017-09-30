// Return the factorial of the provided integer.

function factorialize(num) {
  // set factorial value
  var factorial = 1;
  
  // iterate through num
  for (var i = 1; i <= num; i++) {
    // factorial equals itself times value of var i
    factorial = factorial * i;
  }
  return factorial;
}

factorialize(4);
