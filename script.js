let arr = ['The Virupaksha Temple', 'A Victoria Memorial', 'An Tajmahal'];
let withoutArticles = [];

// Create an array of objects with original and modified strings
for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let modifiedStr = str.replace(/\b(a|an|the)\b/gi, "").trim().replace(/ +/gi, " ");
    withoutArticles.push({ original: str, modified: modifiedStr });
}

// Sort the array based on the modified strings
withoutArticles.sort((a, b) => a.modified.localeCompare(b.modified));

// Log the original strings in the sorted order
for (let i = 0; i < withoutArticles.length; i++) {
    console.log(withoutArticles[i].original);
}

// Insert the sorted band names into the ul element with id 'band'
const ul = document.getElementById('band');
withoutArticles.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item.original;
    ul.appendChild(li);
});
