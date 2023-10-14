// This is a Cypress test
it('TestingSorting', () => {
  // Visit your webpage
  cy.visit('http://localhost:3000'); // Replace with the actual URL of your webpage

  // Verify that there is at least one <li> element
  cy.get('li').should('have.length.at.least', 1);

  // Get the text content of <li> elements
  const tags_content = [];
  cy.get('li').each(($el) => {
    tags_content.push($el.text());
  });

  // Check if they are without articles and in sorted order
  const sorted_content = tags_content
    .map(tag_content => {
      // Remove articles from the beginning of each band name
      return tag_content.replace(/^(A |An |The )/i, '').trim();
    })
    .sort();

  // Check if the list is sorted
  for (let index = 0; index < sorted_content.length; index++) {
    expect(tags_content[index]).to.eq(sorted_content[index]);
  }
});
