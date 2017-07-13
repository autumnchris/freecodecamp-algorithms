// Falsy Bouncer

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and, NaN.
*/

function bouncer(arr) {
  function notFalsy(value) {
    return Boolean(value);
  }

  var filteredArr = arr.filter(notFalsy);
  return filteredArr;
}

bouncer([7, "ate", "", false, 9]);
