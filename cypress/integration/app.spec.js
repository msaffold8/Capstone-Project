// Robot login simulation | Test to prove password token is working
// 1.) Find username/password input fields.
// 2.) Type correct/incorrect backend token
// 3.) Find and click button
// 4.) Error/Navigating to next page

describe("Token Validator", () => {
  it("Visits the webpage & inputs valid token", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("[data-cy=username]").type("msaffold8");
    cy.get("[data-cy=password]").type("test123");
    cy.get("[data-cy=loginButton]").click();
    cy.contains("My Wishlist"); // Confirm navigation to wishlist page
  });

  it("Visits the webpage & inputs Invalid token", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("[data-cy=username]").type("msaffold8");
    cy.get("[data-cy=password]").type("wrongToken123");
    cy.get("[data-cy=loginButton]").click();
    // cy.contains("incorrect password"); // Confirm incorrect password
  });
});
