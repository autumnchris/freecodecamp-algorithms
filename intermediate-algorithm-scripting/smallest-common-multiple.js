// Smallest Common Multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let range = [];
  let i;
  let a = min;
  let b;
  let c;

  for (i = min; i <= max; i++) {
    range.push(i);
  }

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
