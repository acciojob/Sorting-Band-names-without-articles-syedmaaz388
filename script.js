let bandNames = ['The Rolling Stones', 'Pink Floyd', 'Led Zeppelin', 'The Beatles', 'Queen'];

// define an array of articles
let articles = ['a', 'an', 'the'];

// sort the band names in lexicographic order excluding articles
bandNames.sort(function(a, b) {
  // remove the articles from the band names
  a = a.replace(/^(\W)?(a|an|the)\W/gi, '$1');
  b = b.replace(/^(\W)?(a|an|the)\W/gi, '$1');
  // compare the modified band names
  return a.localeCompare(b);
});

// get the UL element by ID
let bandList = document.getElementById('band');

// loop through the sorted band names and add them to the UL element as list items
for (let i = 0; i < bandNames.length; i++) {
  let listItem = document.createElement('li');
  let textNode = document.createTextNode(bandNames[i]);
  listItem.appendChild(textNode);
  bandList.appendChild(listItem);
}
