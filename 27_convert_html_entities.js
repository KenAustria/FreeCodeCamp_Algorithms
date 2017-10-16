// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

function convertHTML(str) {
  // split input str into character array
  var placeHolder = str.split("");
  
  // iterate through placeHolder array
  for (var i = 0; i < placeHolder.length; i++) {
    // check current value of character
    switch(placeHolder[i]) {
        // if case is met, replace with html entity
      case '&':
        placeHolder[i] = '&amp;';
        break;
      case '<':
        placeHolder[i] = '&lt;';
        break;
      case '>':
        placeHolder[i] = '&gt;';
        break;  
      case '"':
        placeHolder[i] = '&quot;';
        break;
      case "'":
        placeHolder[i] = '&apos;';
        break;  
    }
  }
  
  // join placeHolder array back into string
  str = placeHolder.join("");
  return str;
}

convertHTML("Dolce & Gabbana");


function convertHTML(str) {
  // split input str into character array
  var placeHolder = str.split("");
  
  // iterate through placeHolder array
  for (var i = 0; i < placeHolder.length; i++) {
    // check current value of character
    switch(placeHolder[i]) {
        // if case is met, replace with html entity
      case '&':
        placeHolder[i] = '&amp;';
        break;
      case '<':
        placeHolder[i] = '&lt;';
        break;
      case '>':
        placeHolder[i] = '&gt;';
        break;  
      case '"':
        placeHolder[i] = '&quot;';
        break;
      case "'":
        placeHolder[i] = '&apos;';
        break;  
    }
  }
  
  // join placeHolder array back into string
  str = placeHolder.join("");
  return str;
}

convertHTML("Dolce & Gabbana");