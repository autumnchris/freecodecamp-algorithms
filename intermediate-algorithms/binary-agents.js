// Binary Agents

/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {

  var convertedStr = str.split(' ').map(function(char) {
    char = parseInt(char, 2);
		return String.fromCharCode(char);
	});
	return convertedStr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
