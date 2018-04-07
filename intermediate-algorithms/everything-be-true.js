// Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  var i,
  arrCount = 0;

  for (i in collection) {

    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      arrCount++;
    }
  }

  if (arrCount === collection.length) {
    return true;
  }
  else {
    return false;
  }
}
truthCheck([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
