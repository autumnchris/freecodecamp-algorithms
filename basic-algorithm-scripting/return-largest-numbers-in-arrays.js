// Return Largest Numbers in Arrays

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

// Solved by using a for loop

function largestOfFour(arr) {
  let largetNumbers = [];
  let i;

  for (i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => b - a);
    largetNumbers.push(arr[i][0]);
  }
  return largetNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Solved by using the .reduce() method

function largestOfFour(arr) {
  return arr.reduce((acc, cur) => {
    cur.sort((a, b) => b - a);
    acc.push(cur[0]);
    return acc;
  }, []);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Solved by using the .map() method

function largestOfFour(arr) {
  return arr.map(val => {
    val.sort((a, b) => b - a);
    val = val[0];
    return val;
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
