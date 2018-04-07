// Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	var htmlEntities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'\"': '&quot;',
		'\'': '&apos;'
	};

	str = str.split('').map(function(char) {
		return htmlEntities[char] || char;
	});
  return str.join('');
}

convertHTML('Dolce & Gabbana');
