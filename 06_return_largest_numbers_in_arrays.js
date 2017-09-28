function largestOfFour(mainArray) {
  // map over the main array
  return mainArray.map(function(subArray) {
    // return the largest number in each sub-array with Math.max method
    // use apply method to pass array of numbers to Math.max method
    /* the first argument to apply() sets the value of ‘this’,
    not used in this method, so you pass null */
    // return the largest number in each subArray
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
