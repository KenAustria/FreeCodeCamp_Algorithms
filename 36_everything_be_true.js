// Check if the predicate (second argument) is truthy on all
// elements of a collection (first argument).

function truthCheck(collection, pre) {
  // call the every method on collection variable 
  // collection is an array of objects
  // pass callback function on every method
  // takes an argument titled obj, the value of each element in the collection array
  return collection.every(function(obj) {
  // access the values of properties in each of the objects
  // that property is represented by predicate (second argument)
  // check pre if it's not in object, return undefined 
  // undefined is a policy value, making the every method return false   
    
  // if property is in current object, but value is policy object (ex. null), returns false    
  // if property is in current object, and contain truthy values, returns true  
    return obj[pre];
  });  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
