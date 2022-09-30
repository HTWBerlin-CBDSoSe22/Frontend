/* eslint-disable */
// cypress test only works if the keycloak.authenticated part is commented out (line 35, 37, 38, 40) in components/CustomNavBar.js - assuming that you are already logged in
describe('create product', () => {

  const newProductName = 'newProduct01';
  const selectedComponent = 'Apple';
  const totalPriceOfNewProduct = '1.00';

  before(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    cy.visit('http://localhost:3000/welcome');
  })

  it('go to /components', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that thw two URLs match
    cy.get('.link-components').click()
    cy.url().should("eq", "http://localhost:3000/components")
    cy.wait(4000)
  })

  it('create new product', () => {
    cy.get('.btn').eq(5).click({force: true})
    cy.get('input[type="text"]').type(`${newProductName}`, {force: true})
        .should("have.value", `${newProductName}`).type('{enter}')
        .should("have.value", "")
  })

  it('go to /products', () => {
    cy.get('.link-products').click()
    cy.url().should("eq", "http://localhost:3000/products")
    cy.wait(4000)
  })

  it('check if product is created with right components', () => {
    cy.get('.btn').last().click({force: true})
    cy.wait(4000)
    cy.get('.card').eq(1).contains('h2', newProductName).should('exist')
    cy.get('.table').contains('td', selectedComponent).should('exist')
    cy.get('.h3-total-price').contains('strong', totalPriceOfNewProduct).should('exist')
  })

})
