// Boo who

/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

// Solved by using the Boolean object

function booWho(bool) {

  if (bool === Boolean(bool)) {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);

// Solved by using the typeof operator

function booWho(bool) {

  if (typeof bool === 'boolean') {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);
