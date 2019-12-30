// Falsy Bouncer

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and, NaN.

Hint: Try converting each value to a Boolean.
*/

// Solved by using the .filter() method

function bouncer(arr) {
  return arr.filter(val => Boolean(val));
}

bouncer([7, 'ate', '', false, 9]);

// Solved by using the .reduce() method

function bouncer(arr) {
  return arr.reduce((acc,val) => {

    if (Boolean(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
}

bouncer([7, 'ate', '', false, 9]);
