// DNA Pairing

/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let arr = str.split('');
  let i;

  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');

    switch (arr[i][0]) {
      case 'A':
        arr[i].push('T');
        break;
      case 'C':
        arr[i].push('G');
        break;
      case 'G':
        arr[i].push('C');
        break;
      case 'T':
        arr[i].push('A');
        break;
    }
  }
  return arr;
}

pairElement('GCG');
