// Finders Keepers

/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

// Solved by using the .filter() method

function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Solved by using the .find() method

function findElement(arr, func) {
  return arr.find(element => func(element));
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
