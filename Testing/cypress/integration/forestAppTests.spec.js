/// <reference types="Cypress" />

context("Actions", () => {
  before(() => {
    cy.visit("https://forestareafun.firebaseapp.com/");
  });

  it("Should have a title in the header with text 'Forest Area Fun' and subtitle is present", () => {
    cy.get(".navbar-brand").contains("Forest Area Fun!");
    cy.get("h7").contains(
      "See how Forest Area Percent effects the countries of the world"
    );
  });

  it("Should check checkboxes for selected countries", () => {
    cy.get(":nth-child(48) > .countryNameBoxes")
      .click()
      .should("be.checked");
    cy.get(":nth-child(124) > .countryNameBoxes")
      .click()
      .should("be.checked");
    cy.get(":nth-child(125) > .countryNameBoxes")
      .click()
      .should("be.checked");
    cy.get(":nth-child(150) > .countryNameBoxes")
      .click()
      .should("be.checked");
  });

  it("Should check checkboxes for selected facts", () => {
    cy.get('[value="happiness_index"]')
      .click()
      .should("be.checked");
    cy.get('[value="population"]')
      .click()
      .should("be.checked");
  });

  it("Forest Area Percent should be checked when page loads", () => {
    cy.get('[value="forest_area_percent"]').should("be.checked");
  });

  it("Should click submit button and display tables instead of country & fact selection checkboxes", () => {
    cy.get(".submitButton").click();
    cy.get(".countryNameResponse > :nth-child(1)").should("be.visible");
    cy.get(".countryNameResponse > :nth-child(2)").should("be.visible");
    cy.get(".countryNameResponse > :nth-child(3)").should("be.visible");
    cy.get(".countryNameResponse > :nth-child(4)").should("be.visible");
  });

  it("Tables should have country selected as title and selected facts in table", () => {
    cy.get(".countryNameResponse > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "Gabon"
    );
    cy.get(".countryNameResponse > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "New Zealand"
    );
    cy.get(".countryNameResponse > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "Nicaragua"
    );
    cy.get(".countryNameResponse > :nth-child(4) > :nth-child(1)").should(
      "contain",
      "Sweden"
    );
    cy.get(":nth-child(1) > :nth-child(2) > td").should(
      "contain",
      "Forest Area Percent"
    );
    cy.get(":nth-child(1) > :nth-child(3) > td").should(
      "contain",
      "Happiness Index"
    );
    cy.get(":nth-child(1) > :nth-child(4) > td").should(
      "contain",
      "Population"
    );
    cy.get(":nth-child(2) > :nth-child(2) > td").should(
      "contain",
      "Forest Area Percent"
    );
    cy.get(":nth-child(2) > :nth-child(3) > td").should(
      "contain",
      "Happiness Index"
    );
    cy.get(":nth-child(2) > :nth-child(4) > td").should(
      "contain",
      "Population"
    );
    cy.get(":nth-child(3) > :nth-child(2) > td").should(
      "contain",
      "Forest Area Percent"
    );
    cy.get(":nth-child(3) > :nth-child(3) > td").should(
      "contain",
      "Happiness Index"
    );
    cy.get(":nth-child(3) > :nth-child(4) > td").should(
      "contain",
      "Population"
    );
    cy.get(":nth-child(4) > :nth-child(2) > td").should(
      "contain",
      "Forest Area Percent"
    );
    cy.get(":nth-child(4) > :nth-child(3) > td").should(
      "contain",
      "Happiness Index"
    );
    cy.get(":nth-child(4) > :nth-child(4) > td").should(
      "contain",
      "Population"
    );
  });

  it("Should start a new selection when 'start a new selection' button is clicked", () => {
    cy.get(".newQueryButton").click();
    cy.get(".clearedSection > :nth-child(1)").should("be.visible");
    cy.get(".factSection > h5").should("be.visible");
  });

  it("should go the 'Brochure' page via the link", () => {
    cy.get('[href="brochure.html"]').click();
    cy.location()
      .url()
      .should("contain", "/brochure.html");
    cy.get("title").contains("Forest Area Fun - Brochure");
  });
  it("should go the 'About' page via the link", () => {
    cy.get('[href="about.html"]').click();
    cy.location()
      .url()
      .should("contain", "/about.html");
    cy.get("title").contains("Forest Area Fun - About");
  });
});
