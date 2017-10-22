// Create a function that looks through an array (first argument) and returns the
// first element in the array that passes a truth test (second argument).

function findElement(arr, func) {
  // filter through arr, adding only true values, based on inputted func
  // then set to num variable
  // checks if num has any true values
  // return the first index of num, that is greater than 1 
  // return undefined, if entire array are false values
  return arr.filter(func)[0];
}

find([1, 3, 5, 9], function(num){ return num % 2 === 0; });