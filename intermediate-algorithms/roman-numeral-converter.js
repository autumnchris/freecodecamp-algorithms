// Roman Numeral Converter

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

  var result = '';
  var obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  for (var i in obj) {
    while (num >= obj[i]) {
      result += i;
      num -= obj[i];
    }
  }

  return result;
}

convertToRoman(36);
