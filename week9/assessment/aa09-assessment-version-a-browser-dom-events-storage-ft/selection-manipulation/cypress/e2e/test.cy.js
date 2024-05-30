describe("Element selection and manipulation", function () {
  beforeEach(function () {
    cy.visit("cypress/e2e/original-index.html");
  });

  it("1. Change the border color to red and the border width to 3 pixels", function () {
    cy.get("div#problem-one")
      .should("have.css", "border-width", "3px")
      .should("have.css", "border-color", "rgb(255, 0, 0)");
  });

  it("2. Change the font color to green and the font weight to bold", function () {
    cy.get("div#problem-two")
      .should("have.css", "color", "rgb(0, 128, 0)")
      .should("have.css", "font-weight", "700")
    cy.get("div#problem-four")
      .should("not.have.css", "color", "rgb(0, 128, 0)")
      .should("not.have.css", "font-weight", "700")
  });

  it("3. Select all of the elements with the class of odd and add a box shadow", function () {
    cy.get("div.odd")
      .should("not.have.css", "box-shadow", "none")
    cy.get("div#problem-one")
      .should("not.have.css", "box-shadow", "none")
    cy.get("div#problem-three")
      .should("not.have.css", "box-shadow", "none")
    cy.get("div#problem-five")
      .should("not.have.css", "box-shadow", "none")
    cy.get("div.even")
      .should("have.css", "box-shadow", "none")
  });

  it('4. Change the text inside the box to the string "Four"', function () {
    cy.get("div#problem-four")
      .should("contain", "Four")
      .should("not.contain", "4")
  });

  it('5. Remove the text "5", and replace it with a child button that says "5!"', function () {
    cy.get("div#problem-five")
      .should("not.have.text", "5")
    cy.get("div#problem-five button")
      .should("contain", "5!")
  });

  it('6. Remove the span element from the DOM', function () {
    cy.get("span")
      .should("not.exist")
    cy.get("div#root").children()
      .should("have.length", 7)
  });

  it('7. Select the element with the number 7, and change the number to 6', function () {
    cy.get("div.seven")
      .should("have.text", "6")
      .should("not.have.text", "7");
  });

  it('8. Select the last box, and add the class of "last". Change the text inside to box to "END!!!"', function () {
    cy.get("#problem-eight")
      .should("have.text", "END!!!")
      .should("not.have.text", "8")
      .should("have.class","last");
  });
});
