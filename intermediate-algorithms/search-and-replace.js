// Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {

  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
    // this makes the first letter of the after argument uppercase
  }
  else if (before.charAt(0) === before.charAt(0).toLowerCase()) {
    after = after.charAt(0).toLowerCase() + after.slice(1);
    // this makes the first letter of the after argument lowercase
    // this isn't technically necessary to pass the challenge but it more accurately abides by the requirement to preserve the casing of the before argument
  }

  return str.replace(before, after);
}

myReplace('Let us go to the store', 'store', 'mall');
