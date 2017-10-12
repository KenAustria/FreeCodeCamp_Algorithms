/*
Take each character, get its pair, and return the results as a 2d array
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/ 

function pairElement(str) {
  // upper case string for simple checking 
  str = str.toUpperCase();
  // split string to array by character 
  str = str.split('');
  // host array 
  var placeHolderArray = [];
  
  // iterate through character array
  for (var i = 0; i < str.length; i++) {
    // checks current character and equal
    if (str[i] == "G") {
      // adds to placeHolderArray corresponding DNA pair
      placeHolderArray.push(["G", "C"]);
    }
    else if (str[i] == "C") {
      // adds to placeHolderArray corresponding DNA pair
      placeHolderArray.push(["C", "G"]);
    }
    else if (str[i] == "A") {
      // adds to placeHolderArray corresponding DNA pair
      placeHolderArray.push(["A", "T"]);
    }
    else if (str[i] == "T") {
      // adds to placeHolderArray corresponding DNA pair
      placeHolderArray.push(["T", "A"]);
    }
  }
  
  return placeHolderArray;
}

pairElement("GCG");