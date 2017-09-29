function slasher(arr, howMany) {
  // splice array from index[0] to value of howMany
  // return array with remaining values 
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
