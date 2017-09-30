/*
Return the remaining elements of an array after chopping off n elements from the head,
the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  // splice array from index[0] to value of howMany
  // return array with remaining values 
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
