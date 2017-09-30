// Remove all falsy values from an array.

function bouncer(arr) {
  // create host array
  var holderArray = [];
  // call filter to run removeFalseVar method
  holderArray = arr.filter(removeFalseVar);
  return holderArray;
  
  function removeFalseVar(value) {
    // return values for all non-falsy varaibles
    return Boolean(value);
  }
}

bouncer([7, "ate", "", false, 9]);
