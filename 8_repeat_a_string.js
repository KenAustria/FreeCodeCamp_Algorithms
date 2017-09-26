function repeatStringNumTimes(string, times) {
  // to host the repeated string 
  var repeatedString = "";
  
  // as long as times is greater than 0, execute
  while (times > 0) {
    // empty host plus string become repeatedString, and so on
    repeatedString += string;
    // decrement count 
    times--;
  }
  
  return repeatedString;
}
repeatStringNumTimes("abc", 3);