// Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {

  arr.sort();

  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);

  var range = 0;
    for (var i = min; i <= max; i++){
      range += i;
    }

  return range;
}

sumAll([1, 4]);
