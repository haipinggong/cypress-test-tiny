/// <reference types="cypress" />
describe("page", () => {
  it("tag1", { tags: "@tag1" }, () => {
    cy.visit("https://example.cypress.io");
  });
  it.only("tag2", { tags: ["@tag2"] }, () => {
    cy.visit("https://example.cypress.io");
  });
  it("tag2 2", { tags: ["@tag2"] }, () => {
    cy.visit("https://example.cypress.io");
  });
});
