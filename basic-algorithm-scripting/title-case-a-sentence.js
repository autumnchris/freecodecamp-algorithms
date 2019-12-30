//Title Case a Sentence

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

// Solved by using the .map() method

function titleCase(str) {
  const arr = str.toLowerCase().split(' ');
  return arr.map(word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }).join(' ');
}

titleCase('I\'m a little tea pot');

// Solved by using a for loop

function titleCase(str) {
  const arr = str.toLowerCase().split(' ');
  let i;

  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
  }
  return arr.join(' ');
}

titleCase('I\'m a little tea pot');
