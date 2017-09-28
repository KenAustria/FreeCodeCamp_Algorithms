function truncateString(str, num) {
  // if statement to determine 1 of 3 outcomes
 
  /* if our string is greater than the num, and our truncate point is at least three   
  characters or more into the string*/  
  /* return a slice of our string starting at character 0, and ending at num - 3. We then 
  append our '...' to the end of the string */
  if (str.length > num && num > 3) {
   return str.slice(0, (num-3)) + "...";
   /* if our string length is greater than the num but num is within the first three  
   characters, we don't have to count our dots as characters.*/
   // the end point of our slice, is now just num
   } else if (str.length > num && num <= 3) {
   return str.slice(0, num) + "...";
   // our string length is less than our truncation num
   } else {
   return str;
   }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
