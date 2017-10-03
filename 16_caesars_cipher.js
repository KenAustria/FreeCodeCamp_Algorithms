// Shift the letters  by 13 spaces

// LBH QVQ VG!
function rot13(encodedStr) { 
  // split string into array
  var codeArr = encodedStr.split(''); 
  // create empty array to push into
  var decodedArr = []; 
  // alphabet array + 13 index shifts
  var alphabet =["A","B","C","D","E","F","G","H","I","J",
                 "K","L","M","N","O","P","Q","R","S","T",
                 "U","V","W","X","Y","Z","A","B","C","D",
                 "E","F","G","H","I","J","K","L","M"];

  // iterate through inputted string array
  for (var i = 0; i < codeArr.length; i++) {           
    //if current value isn't in the alphabet array
    if (alphabet.indexOf(codeArr[i]) === -1) {
        //add that value to decodedArr array      
        decodedArr.push(codeArr[i]);                   
    } else {
        // iterate through alphabet 
        for (var j = 0; j < alphabet.length; j++) {
          // if current value in array is equal to alphabet
          if (codeArr[i] === alphabet[j]) {
            // add that value to decodedArr + 13 index shifts in alphabet
            decodedArr.push(alphabet[j + 13]);   
          }
        }
      }
  }
  
  // return array into string
  return decodedArr.join('');                          
  }

  // Change the inputs below to test
  rot13("SERR PBQR PNZC");