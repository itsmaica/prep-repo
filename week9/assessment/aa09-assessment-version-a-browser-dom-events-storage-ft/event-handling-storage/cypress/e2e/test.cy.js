describe("Event handling and local storage", function () {
  beforeEach(function () {
    cy.visit("index.html");
  });

  describe("Problem 1", function () {
    it("prevents bubbling", function () {
      cy.get('#bubble-trouble')
        .click();
      cy.get('#problem-area-1-child')
        .should('not.have.attr', 'class', 'red');
    });
  });

  describe("Problem 2", function () {
    it("counts by one", function () {
      cy.get('#zero-out')
        .click();
      cy.get('#counter-value')
        .contains('0');

      cy.get('#increment')
        .click()
        .click();
      cy.get('#counter-value')
        .contains('2');

      cy.get('#decrement')
        .click();
      cy.get('#counter-value')
        .contains('1');

      cy.get('#zero-out')
        .click();
      cy.get('#counter-value')
        .contains('0');
    });
  });

  describe("Problem 3", function () {
    it("saves text", function () {
      cy.get('#my-name-is')
        .clear();

      cy.reload();

      cy.get('#my-name-is')
        .type('cutiepie');

      cy.reload();

      cy.get('#my-name-is')
        .should('have.value', 'cutiepie');
    });
  });

  describe("Problem 4", function () {
    it("does not navigate elsewhere", function () {
      cy.url().then((previousUrl) => {
        cy.get('#navigates-elsewhere')
          .click();

        cy.url()
          .should('eq', previousUrl);
      });
    });
  });

  describe("Problem 5", function () {
    it("fetches and displays a list of all terrier breeds", function () {
      cy.get("#sub-breed-ol").children()
        .should("have.length", 0);
      cy.get("#go-fetch")
        .click();
      cy.get("#sub-breed-ol").children()
        .should("have.length", 23)
        .should("contain", "patterdale");
    });
    
    // it("has a mouseover event that turns a single subbreed name red", function () {
    //   cy.get("#go-fetch").click();
    //   cy.get("#sub-breed-ol")
    //     .children()
    //     .first()
    //     .should("have.css", "color", "rgb(0, 0, 0)")
    //     .click({ force: true })
    //     .should("have.css", "color", "rgb(255, 0, 0)");
    //   cy.get("#sub-breed-ol")
    //     .children()
    //     .last()
    //     .should("have.css", "color", "rgb(0, 0, 0)")
    //     .click({ force: true })
    //     .should("have.css", "color", "rgb(255, 0, 0)");
    // });
  });
});
