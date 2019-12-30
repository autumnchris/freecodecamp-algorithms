// Repeat a String Repeat a String

/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

// Solved by using a while loop

function repeatStringNumTimes(str, num) {
  let newStr = '';

  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes('abc', 3);

// Solved by using recursion

function repeatStringNumTimes(str, num) {

  if (num <= 0) {
    return '';
  }
  else if (num === 1) {
    return str;
  }
  else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes('abc', 3);
