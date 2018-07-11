// Repeat a String Repeat a String

/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  let newStr = '';

  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes('abc', 3);
