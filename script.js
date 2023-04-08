//your code here
// Input array
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Queen'];

// Function to remove articles from a string and return the modified string
function removeArticles(str) {
  // Split the string into words
  let words = str.split(' ');
  
  // Check if the first word is an article
  if (words[0].toLowerCase() === 'the' || words[0].toLowerCase() === 'a' || words[0].toLowerCase() === 'an') {
    // Remove the first word
    words.shift();
  }
  
  // Join the remaining words and return the modified string
  return words.join(' ');
}

// Sort the band names in lexicographic order (excluding articles)
bandNames.sort(function(a, b) {
  return removeArticles(a).localeCompare(removeArticles(b));
});

// Get the ul element by its id
let ul = document.getElementById('band');

// Loop through the sorted band names and add them to the ul as li elements
for (let i = 0; i < bandNames.length; i++) {
  let li = document.createElement('li');
  li.innerText = bandNames[i];
  ul.appendChild(li);
}


