// Sum All Odd Fibonacci Numbers

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  var i,
  arr = [1, 1],
  previousNum = arr[0],
  currentNum = arr[1],
  sum = 0,
  newCurrentNum;

  for (i = 0; i < arr.length; i++) {
    newCurrentNum = previousNum + currentNum;

    if (newCurrentNum <= num) {
      arr.push(newCurrentNum);
      previousNum = currentNum;
      currentNum = newCurrentNum;
    }

    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

sumFibs(4);
