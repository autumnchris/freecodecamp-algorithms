// Mutations

/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"] should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"] should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();
  let result = true;
  let i;

  for (i = 0; i < str2.length; i++) {

    if (str1.indexOf(str2[i]) === -1) {
      result = false;
    }
  }
  return result;
}

mutation(['hello', 'hey']);
