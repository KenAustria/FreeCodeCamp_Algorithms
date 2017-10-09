// does source value match anything inside collection array?

function whatIsInAName(collection, source) {
  // use filter method and return true values
  // iterate through source, if source is equal to item, return true
  var arr = collection.filter(function(item) {
    for (var i in source) {
      // check value of source and compares with item 
      // if not equal, return false 
      if (source[i] != item[i]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
