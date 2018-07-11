// Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  }

  str = str.split('').map((char) => {
    return htmlEntities[char] || char;
  });
  return str.join('');
}

convertHTML("Dolce & Gabbana");
