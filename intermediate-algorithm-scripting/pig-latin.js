// Pig Latin

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let pigLatin = str;

  if (str.charAt(0).match(/[aeiou]/)) {
    pigLatin += 'w';
  }

  while (!pigLatin.charAt(0).match(/[aeiou]/) && pigLatin.match(/[aeiou]/g)) {
    pigLatin += pigLatin.charAt(0);
    pigLatin = pigLatin.slice(1);
  }
  return pigLatin + 'ay';
}

translatePigLatin('consonant');
