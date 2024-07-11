let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from the beginning of a band name
function removeArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array based on the band names without the articles
touristSpots.sort((a, b) => {
    let bandA = removeArticle(a);
    let bandB = removeArticle(b);
    return bandA.localeCompare(bandB);
});

// Insert the sorted band names into the ul element with id 'band'
const ul = document.getElementById('band');
touristSpots.forEach(band => {
    let li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
