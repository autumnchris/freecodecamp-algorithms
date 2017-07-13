// Check for Palindromes

/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
*/

function palindrome(str) {
  str = str.toLowerCase().replace(/[\s\W_]/g, '');
  var newString = str.split('').reverse().join('');

  if(str == newString) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
