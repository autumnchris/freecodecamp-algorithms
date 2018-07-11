// Boo who

/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  
  if (bool === Boolean(bool)) {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);
