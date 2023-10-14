//your code here
let bandsNames = ['The Beatles', 'Aerosmith', 'Led Zeppelin', 'Red Hot Chili Peppers', 'The Rolling Stones'];

// Remove articles from band names
bandsNames = bandsNames.map(name => name.replace(/^(a|an|the)\s+/i, ''));

// Sort the modified array
bandsNames.sort();

// Get the ul element with id 'band'
const ul = document.getElementById('bands');

// Create and append <li> elements to the ul
bandsNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

