/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    cy.visit("https://example.cypress.io");
    cy.get("body").children(".container").contains("a", "Querying").as("end");
    cy.visit("https://example.cypress.io");

    cy.get("@end");
  });

  it("does not work", () => {
    // The test case works in Cypress 10.4.0
    // The test case does not work in Cypress 10.5.0+

    cy.visit("https://example.cypress.io");
    cy.get2("body").children(".container").contains("a", "Querying").as("end");
    cy.visit("https://example.cypress.io");

    cy.get("@end");
  });
});
