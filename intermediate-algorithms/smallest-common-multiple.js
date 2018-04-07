// Smallest Common Multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  var i,
  j,
  range = [],
  a,
  b,
  c;

  arr.sort();

  for (i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  a = range[0];

  for (i = 1; i < range.length; i++) {
    b = range[i];
    c = a;

    while (a && b) {

      if (a > b) {
        a %= b;
      }
      else {
        b %= a;
      }
    }
    a = c * range[i] / (a + b);
  }

  return a;
}

smallestCommons([1,5]);
