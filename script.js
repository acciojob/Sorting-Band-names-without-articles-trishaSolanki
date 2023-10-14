//your code here
let bandNames = ['The Beatles', 'Aerosmith', 'Led Zeppelin', 'Red Hot Chili Peppers', 'The Rolling Stones'];

// Remove articles from band names
bandNames = bandNames.map(name => name.replace(/^(a|an|the)\s+/i, ''));

// Sort the modified array
bandNames.sort();

// Get the ul element with id 'band'
const ul = document.getElementById('band');

// Create and append <li> elements to the ul
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

