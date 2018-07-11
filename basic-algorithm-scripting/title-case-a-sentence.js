//Title Case a Sentence

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let arr = str.toLowerCase().split(' ');
  let i;
  let firstChar;

  for (i = 0; i < arr.length; i++) {
    firstChar = arr[i].charAt(0);
    arr[i] = arr[i].replace(firstChar, firstChar.toUpperCase());
  }
  return arr.join(' ');
}

titleCase('I\'m a little tea pot');
