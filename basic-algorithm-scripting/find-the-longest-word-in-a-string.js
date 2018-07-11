// Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  const arr = str.split(' ');
  let longestWord = 0;
  let i;

  for (i = 0; i < arr.length; i++) {

    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
