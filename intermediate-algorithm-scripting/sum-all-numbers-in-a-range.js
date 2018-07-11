// Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let i;

  for (i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
