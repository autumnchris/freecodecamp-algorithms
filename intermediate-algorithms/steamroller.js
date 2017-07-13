// Steamroller

/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {

  arr = arr.reduce(function(acc, value) {

    if (Array.isArray(value)) {
      return acc.concat(steamrollArray(value));
    }
    else {
      return acc.concat(value);
    }
  }, []);

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
