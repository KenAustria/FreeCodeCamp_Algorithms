/*
Drop the elements of an array (first argument), starting from the front, 
until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first 
elements of the array to decide if you should drop it or not.
*/

function dropElements(arr, func) {
  // while func returns false on index[0]
  while (!func(arr[0])) {
    // shift until true 
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });


/*
1ST ITERATION
[1,2,3]
arr[0] = 1
1 < 3 = !true
arr.shift
[2,3]

2ND ITERATION
[2,3]
arr[0] = 2
2 < 3 = !true
arr.shift
[3]

3RD ITERATION
[3]
arr[0] = 3
3 < 3 = !false
[3]

*/