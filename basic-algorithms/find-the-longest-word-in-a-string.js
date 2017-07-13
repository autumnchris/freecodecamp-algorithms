// Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var longestWord = 0;
  var myArray = str.split(' ');

  for(var i = 0; i < myArray.length; i++) {
    if(longestWord < myArray[i].length) {
      longestWord = myArray[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
