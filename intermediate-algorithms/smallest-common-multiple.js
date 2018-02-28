// Smallest Common Multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  arr.sort();
  var range = [];

  for (var i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  var a = range[0];

  for (var j = 1; j < range.length; j++) {
    var b = range[j];
    var c = a;

    while (a && b) {

      if (a > b) {
        a %= b;
      }
      else {
        b %= a;
      }
    }
    a = c * range[j] / (a + b);
  }

  return a;
}

smallestCommons([1,5]);
