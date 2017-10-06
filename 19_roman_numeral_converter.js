// Convert the given number into a roman numeral.

function convertToRoman(num) {
  // create host string for final roman number 
  var romanized = "";
  // default conversion of matching indexes
  // array of roman numerals, from 1000 to 1
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];  
  // array for whole integer values of the roman numerals
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  
  // iterate through decimalValue array
  for (var index = 0; index < decimalValue.length; index++) {
    // while current index value is less than, equal to
    // 10 is less than 36
    while (decimalValue[index] <= num) {
      // add roman numeral
      romanized += romanNumeral[index];
      // subtract num from decimal equivalent
      // 36 - 10
      num -= decimalValue[index];
    }
  }
  return romanized;
}

convertToRoman(36);

// 10 is less than 36
// add romanNumeral "X" to romanized variable, because they're matching indices
// romanized = "X";
// 36 - 10 = 26

// repeat above steps
// romanized = "XX"
// 26- 10 = 16

// repeat above steps 
// romanized = "XXX"
// 16 - 10 = 6

// repeat above steps 
// romanized = "XXXV"
// 6 - 5 = 1

// repeat above steps
// romanized = "XXXVI"
// 1 - 1 = 0 
