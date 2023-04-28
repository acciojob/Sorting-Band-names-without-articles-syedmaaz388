let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Nirvana', 'Queen'];

// Remove articles from band names
const removeArticles = (name) => {
  const articles = ['a', 'an', 'the'];
  const words = name.toLowerCase().split(' ');
  if (articles.includes(words[0])) {
    words.shift();
  }
  return words.join(' ');
};

// Sort band names
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create <ul> element
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');

// Add band names as <li> elements inside <ul>
bandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Add <ul> to the document body
document.body.appendChild(ul);
