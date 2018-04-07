// Seek and Destroy

/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  var i,
  j,
  args = Array.prototype.slice.call(arguments);

  args.splice(0,1);

  for (i = 0; i < arr.length; i++) {

    for (j = 0; j < args.length; j++) {

      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }

  function removeFalse(value) {
    return Boolean(value);
  }
  return arr.filter(removeFalse);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
