// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  // convert string into array
  // map through each element of array
  return str.split(' ').map(function(value) {
    // parseInt(value, 2) will transform binary chunks to a number
    // fromCharCode will take that number and return a string 
    return String.fromCharCode(parseInt(value, 2));
    // join strings as one string
  }).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
