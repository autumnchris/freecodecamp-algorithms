// Steamroller

/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  return arr.reduce((newArr, char) => {

    if (Array.isArray(char)) {
      newArr = newArr.concat(steamrollArray(char));
    }
    else {
      newArr = newArr.concat(char);
    }
    return newArr;
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
