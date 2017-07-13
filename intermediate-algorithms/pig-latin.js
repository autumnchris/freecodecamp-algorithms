// Pig Latin

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {

  var word = str.split('');

  if (word[0].match(/[aeiou]/g)) {
    word.push('way');
  }
  else {
    while (!word[0].match(/[aeiou]/g)) {
      word.push(word[0]);
      word.shift();
    }
    word.push('ay');
  }

  return word.join('');
}

translatePigLatin("consonant");
