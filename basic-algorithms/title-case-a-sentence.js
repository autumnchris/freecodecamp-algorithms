//Title Case a Sentence

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var myArray = str.toLowerCase().split(' ');
  for(var i = 0; i < myArray.length; i++) {
    var ch = myArray[i].charAt(0);
    myArray[i] = myArray[i].replace(ch, ch.toUpperCase());
  }
  return myArray.join(' ');
}

titleCase("I'm a little tea pot");
