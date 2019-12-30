// Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

// Solved by using a for loop

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

// Solved by using the .map() method

function findLongestWordLength(str) {
  const arr = str.split(' ');
  let longestWord = 0;

  const sentence = arr.map(word => {

    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });
  return longestWord;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// Solved by using the .reduce() method

function findLongestWordLength(str) {
  const arr = str.split(' ');

  return arr.reduce((acc, cur) => {

    if (cur.length > acc) {
      acc = cur.length;
    }
    return acc;
  }, 0);
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
