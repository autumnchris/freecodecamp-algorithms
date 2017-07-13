// Spinal Tap Case

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[\s_]/g, '-');
  // the first .replace() adds a space before uppercase letters that come after lowercase letters
  // the second .replace() changes all spaces and underscores to dashes

  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
