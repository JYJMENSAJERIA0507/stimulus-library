describe('Back link controller', () => {

  it('should return the user to the previous page when there is browser history', () => {
    cy.visit('http://localhost:3000/controllers/autosize_controller.html');
    cy.visit('http://localhost:3000/controllers/back_link_controller.html');
    cy.contains('Go Back').click();
    cy.url().should('include', '/controllers/autosize_controller.html');
  });


  // it('should return the user to a fallback page when there is no browser history', () => {
  //   cy.visit('http://localhost:3000/controllers/back_link_controller.html');
  //   cy.contains('Go Back').click();
  //   cy.url().should('include', 'placeholder_page.html');
  // });

});
