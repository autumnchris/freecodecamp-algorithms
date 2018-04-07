// Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var i,
  longestWord = 0,
  myArray = str.split(' ');

  for (i = 0; i < myArray.length; i++) {

    if (longestWord < myArray[i].length) {
      longestWord = myArray[i].length;
    }
  }
  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
