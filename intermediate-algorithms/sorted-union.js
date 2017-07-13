// Sorted Union

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {

  var args = [].slice.call(arguments);

  args = args.reduce(function(a, b){
     return a.concat(b);
  });
  args = args.filter(function(el, index, inputArray) {
    return inputArray.indexOf(el) == index;
  });

  return args;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
