// Chunky Monkey

/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var i,
  group = [];

  for (i = 0; i < arr.length; i += size) {
    group.push(arr.slice(i, i + size));
  }
  return group;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
