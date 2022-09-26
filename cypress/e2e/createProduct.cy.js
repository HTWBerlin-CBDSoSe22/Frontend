/* eslint-disable */
describe('example to-do app', () => {
  const newProductName = 'newProduct01';
  const selectedComponent = 'Apple';
  const totalPriceOfNewProduct = '1.00';

  before(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/welcome');
  })

  // it('login'), () => {
  //   // login to the page
  //   const username = "keycloack";
  //   const password = "password";
  //
  //   cy.get('nav-link').click();
  //   cy.url().should("eq", "keycloackLink")  // keycloack link
  //   cy.wait(3000);
  //   cy.get('input[type="text"]').eq(0).type(`${username}`, {force: true})
  //       .should("have.value", `${username}`);
  //   cy.get('input[type="text"]').eq(1).type(`${password}`, {force: true})
  //       .should("have.value", `${password}`).type('{enter}');
  //   cy.wait(5000);
  // }



  it('go to /components', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.cypressComponent').click()
    cy.url().should("eq", "http://localhost:3000/components")
    cy.wait(2000)
  })



  it('create new product', () => {
    cy.get('.btn').eq(5).click({force: true})
    cy.get('input[type="text"]').type(`${newProductName}`, {force: true})
        .should("have.value", `${newProductName}`).type('{enter}')
        .should("have.value", "")
  })

  it('go to /products', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.cypressProducts').click()
    cy.url().should("eq", "http://localhost:3000/products")
    cy.wait(2000)
  })

  it('check if product is created with right components', () => {
    cy.get('.btn').last().click({force: true})
    cy.wait(1000)
    cy.get('.card').eq(1).contains('h2', newProductName).should('exist')
    cy.get('.table').contains('td', selectedComponent).should('exist')
    cy.get('.cypressTotalPrice').contains('strong', totalPriceOfNewProduct).should('exist')
  })

})
