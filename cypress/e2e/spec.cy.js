/// <reference types="cypress" />
describe("page", () => {
  it("tag1 should not be run", { tags: "@tag1" }, () => {
    cy.visit("https://example.cypress.io");
  });
  it.only("tag2 should be run", { tags: ["@tag2"] }, () => {
    cy.visit("https://example.cypress.io");
  });
  it("tag2 should not be run", { tags: ["@tag2"] }, () => {
    cy.visit("https://example.cypress.io");
  });
});
