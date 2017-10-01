/*
You will be provided with an initial array (the first argument in
the destroyer function), followed by one or more arguments. Remove
all elements from the initial array that are of the same value as
these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  // get full array values
  var args = Array.prototype.slice.call(arguments);
  // remove original array
  args.splice(0,1);
  var placeholder = [];
  
  // compare array with values and delete any matches
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  
  // filter out falsy values
  placeholder = arr.filter(removeFalseVar);
  return placeholder;
  
  function removeFalseVar(value) {
    return Boolean(value);
  }
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

