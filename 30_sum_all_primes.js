// Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
  // host array for prime numbers 
  var array = [];
  
  // for loop to check if number is prime 
  // i = 2, because prime numbers are greater than 1
  // <= to check if input num is also a prime 
  for (var i = 2; i <= num; i++) {
    // ex - if input num is 10, we don't need to check numbers pass 7
    /* if j is <= to i, because we don't need to check any numbers above
    the number we need to find out if it's a prime */
    for (var j = 2; j <= i; j++) {
      // if equal, number is prime 
      if (i === j) {
        // push prime number into host array
        array.push(i);
      }
      // if true, number is not a prime. break loop
      if (i % j === 0) {
        break;
      }
    }
  }
  
  // reduce array based on function passed 
  // take x and y from array, add together then return
  // add index[0], then index[1], then index[2], continue logic to entire array 
  return array.reduce(function(x, y) {
    return x + y;
  });
}
sumPrimes(4);


/*
-FIRST ITERATION-
var array = [];

for (var i = 2; i <= num; i++) {
  // (i = 2; 2 <= 4; i++)
  for (var j = 2; j <= i; j++) {
    // (j = 2; 2 <= 2; j++)
    if (i === j) {
      // 2 === 2, true 
      array.push(i);
        // var array = [2];
    }
  } 
}

-SECOND ITERATION-
var array = [2];

for (var i = 3; i <= num; i++) {
  // (i = 3; 3 <= 4; i++)
  for (var j = 2; j <= i; j++) {  
    // (j = 2; 2 <= 3; j++)
    if (i === j) {
      // (3 === 2), false
    }
    if (i % j === 0) {
      // (3 % 2 === 0), false 
      break;
    }
  }
  
  for (var j = 3; j <= i; j++) {
    // (j = 3; 3 <= 3; j++)
    if (i === j) {
      // (3 === 3), true
      array.push(i);
        // var array = [2, 3];
    }
  }  
}

-THIRD ITERATION-
var array = [2, 3];

for (var i = 4; i <= num; i++) {
  // (i = 4; 4 <= 4; i++)
  for (var j = 2; j <= i; j++) {   
    // (j = 2; 2 <= 4; j++)
    if (i === j) {
      // (4 === 2), false
    }  
    if (i % j === 0) {
      // (4 % 2 === 0), true 
      break;
    }  
  }
  for (var j = 3; j <= i; j++) {   
    // (j = 3; 3 <= 4; j++)
    if (i === j) {
      // (4 === 3), false
    }  
    if (i % j === 0) {
      // (4 % 3 === 0), false  
      break;
    }  
  }
}  

return array.reduce(function(x, y) {
    return x + y;
  });
  // var array = [2, 3];
  // 2 + 3 = 5

*/