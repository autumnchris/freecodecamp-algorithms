// Spinal Tap Case

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[\s_]/g, '-');
  return str;
}

spinalCase('This Is Spinal Tap');
