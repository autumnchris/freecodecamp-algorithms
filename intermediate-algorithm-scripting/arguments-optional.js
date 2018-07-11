// Arguments Optional

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  const a = arguments[0];
  const b = arguments[1];

  if (typeof a === 'number') {

    if (arguments.length === 2) {

      if (typeof b === 'number') {
        return a + b;
      }
      else {
        return undefined;
      }
    }
    else {
      return (arg) => {

        if (typeof arg === 'number') {
          return a + arg;
        }
        else {
          return undefined;
        }
      }
    }
  }
  else {
    return undefined;
  }
}

addTogether(2,3);
